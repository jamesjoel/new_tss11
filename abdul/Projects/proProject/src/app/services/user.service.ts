import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable, of, Subject } from 'rxjs';
import { catchError, switchAll, switchMap } from 'rxjs/operators'
import { throwError } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:3000/";

  tableName: string | null = null;
  authenticationStatus : Observable<any> ;
  user$ : Observable<any> ;
  private authenticationStatusSubject = new Subject<Observable<any>>();
  constructor(private http : HttpClient,private afAuth: AngularFireAuth,
    private db: AngularFirestore,) {
      this.authenticationStatus = this.authenticationStatusSubject.pipe(
        switchAll()
      );

      console.log("........",this.afAuth.authState)
  
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          console.log("user..",user)
          if (user) {
          
                this.tableName = 'Users';
                return this.db.doc<User>(`${this.tableName}/${user.uid}`).valueChanges();
            
  
          } else {
            return of(null);
          }
        })
      );
     }

  async login(loginData: any): Promise<any> {
    console.log("login Data",loginData);
    try {
      return await  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(async () => {
          return await this.afAuth.auth.signInWithEmailAndPassword(loginData.email, loginData.password).then(res => {
            console.log("-----9999999",res)
            this.authenticationStatusSubject.next(of({
              status: 200,
              message: 'Logged In Successfully'
            }));
            return res;
          }, error => {
            return error;
          });
        });
    
    } catch (e) {
      this.authenticationStatusSubject.next(of({
        status: 400,
        message: e.message
      }));
      return e;
    }
  }


  
  
  getAllUsers(id=null):Observable<User[]>{
    if(id!=null){
      return this.http.get<User[]>(this.url+"Users/"+id);
    }else{
      return this.http.get<User[]>(this.url+"Users");
    }
  }

  addUser(obj:User){
    return this.http.post<User[]>(this.url+"Users",obj);
  }

  deleteUser(obj:User){
    return this.http.delete<User[]>(this.url+"Users/"+obj.id);
  }

  updateUser(id, obj:User){
    return this.http.put<User[]>(this.url+"Users/"+id,obj);
  }

  errorHandler(error : HttpErrorResponse){
    console.log("console server error");
    return throwError(error);
  }

  emptyObj(){
    return {
      id : null,
      name : "",
      age : null,
      city : ""
    }
  }
}

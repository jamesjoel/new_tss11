var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");

var cors = require("cors");

// app.use(express.static(__dirname+"/public"));

app.use(bodyParser());
app.use(cors());
// app.get("/", (req, res)=>{
//     res.sendFile(__dirname+"/index.html");
// });




// app.get("/api/list", (req, res)=>{
//    MongoClient.connect("mongodb://localhost:27017", (err, client)=>{
//         var db = client.db("tss11");
//         db.collection("student").find().toArray((err, result)=>{
//             res.send(result);
//         })
//    }); 
// });

app.get("/", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, client)=>{
        var db = client.db("tss11");
        var id = "5e5e034c9f45a318275827e1";
        var obj = { name : "samsung", price : 8000 };

        obj.adv_id = mongodb.ObjectId(id);

        db.collection("product").insert(obj, (err, result)=>{
            // console.log(result);
            res.send(result);
        });
    });
});

app.get("/show", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, client) => {
        var db = client.db("tss11");
        db.collection("product").aggregate(
                [ 
                    
                    {
                        $lookup : {
                            from : "adv",
                            localField : "adv_id",
                            foreignField : "_id",
                            as : "adv_info"
                        }
                    } 
                ]
            ).toArray((err, result)=>{
                res.send(result);
        });


        /*
        db.collection("adv").aggregate(
                [
                    {
                        $project : {
                            $eq : { _id : id }
                        }
                    }

                    {
                        $lookup : {
                            from : "product",
                            localField : "_id",
                            foreignField : "adv_id",
                            as : "product_info"
                        }
                    }
                ]
            ).toArray((err, result)=>{
                res.send(result);
        });



        */
    });
})




var port = process.env.PORT || 3000;


app.listen(port, ()=>{
    console.log("server running");
})


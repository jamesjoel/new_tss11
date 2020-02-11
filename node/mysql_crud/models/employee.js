var conn = require("../config/connect");

module.exports.selectAll = function(cb){
    conn.connect((err)=>{
        conn.query("SELECT * FROM employee", cb);
    });
}
module.exports.selectById = function (id, cb) {
    conn.connect((err) => {
        conn.query("SELECT * FROM employee WHERE id = "+id, cb);
    });
}

module.exports.insert=function(obj, cb){
    conn.connect((err)=>{
        conn.query("INSERT INTO employee (name, address, salary) VALUES ('"+obj.name+"', '"+obj.address+"', '"+obj.salary+"')", cb);
    });
}

module.exports.deleteById=function(id, cb){
    conn.connect((err) => {
        conn.query("DELETE FROM employee WHERE id="+id, cb);
    });
}

module.exports.updateById=function(id, obj, cb){
    conn.connect((err)=>{
        conn.query("UPDATE employee SET name = '"+obj.name+"', address = '"+obj.address+"', salary = '"+obj.salary+"' WHERE id="+id, cb);
    })    
}

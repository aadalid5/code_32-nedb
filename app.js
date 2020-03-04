var nedb = require('nedb');

var db = new nedb();

db.insert(
    [
        {
            "UserId":"1446943507761",
            "UserName":"xxx",
            "link":"xxx.html",
            "taskDone":"false",
            "id":14,
            "_id":"fdaaTWSxloQZdYlT"
        },
        {
            "UserId":"1446943507761",
            "UserName":"xxx",
            "link":"xxx.html",
            "taskDone":"false",
            "id":1,
            "_id":"fzh2cedAXxT76GwB"
        },
        {
            "UserId":"1446943507761",
            "UserName":"xxx",
            "link":"xxx.html",
            "taskDone":"false",
            "id":0,
            "_id":"k4loE7XR5gioQk54"
        }  
    ]
);

/* db.find({},(err, data)=>{
    console.log(data)
}); */

db.update({_id: "k4loE7XR5gioQk54"},
    {$set:{taskDone:true} },
    {},
    (err, numrepla)=>{
        console.log("replaced: ",  numrepla)
    }    
);

/* db.find({},(err, data)=>{
    console.log(data)
}); */

console.log(db)
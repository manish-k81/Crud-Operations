const MongoClient = require("mongodb").MongoClient
const Mongourl = "mongodb://localhost:27017";
const CollectionName = "task"

MongoClient.connect(Mongourl,(err,db)=>{
    if(err){
        throw err
    }
    var dbo = db.db("crud");
    dbo.createCollection(CollectionName,(err,res)=>{
        if(err){
            throw err
        }
        // console.log("Collection created!")
        db.close();
    })
})
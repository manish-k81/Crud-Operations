const MongoClient = require('mongodb').MongoClient;
const Mongourl = "mongodb://localhost:27017/crud"

MongoClient.connect(Mongourl,(err,db)=>{
    if(err){
        throw err
    }
    // console.log("DB Created")
    db.close();
})

module.exports = {MongoClient, Mongourl}
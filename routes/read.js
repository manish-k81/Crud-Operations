const express = require('express');
const router = express.Router();
const { MongoClient, Mongourl } = require('../database/mongo');

router.get('/',(req,res)=>{
    MongoClient.connect(Mongourl,(err,db)=>{
        if(err){
            res.json({
                message:"Could not connect to MongoDb"
            })
        }
        var dbo = db.db("crud")
        dbo.collection('task').find({},{ projection: {_id:0, name:1,age:1}}).toArray((err,final)=>{
            if(err){
                res.json({
                    message:"Could not fetch the data"
                })
            }
            res.json({
                message:"Fetched the data from MongoDb",
                allData:final
            })
            db.close();
        })
    })
})

module.exports = router
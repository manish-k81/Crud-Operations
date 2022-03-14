const express = require('express');
const router = express.Router();
const { MongoClient, Mongourl } = require('../database/mongo');


router.put('/',(req,res)=>{
    MongoClient.connect(Mongourl,(err,db)=>{
        if(err){
            res.json({
                message:"Could not connect to MongoDb"
            })
        }
        const dbo = db.db("crud");
        const myQuery = { age:req.body.age }
        const newValues = { $set:{ name:req.body.name } }
        dbo.collection("task").updateOne(myQuery,newValues,(err,final)=>{
            if(err){
                res.json({
                    message:"Could not update the values"
                })
            }
            res.json({
                message:"Updated one value"
            })
            db.close()
        })
    })
})

module.exports = router
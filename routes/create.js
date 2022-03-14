const express = require("express");
const router = express.Router();
const { MongoClient, Mongourl } = require('../database/mongo')

router.post('/',(req,res)=>{
    MongoClient.connect(Mongourl,(err,db)=>{
        if(err){
            res.json({
                message:"Could not connect to MongoDb!"
            })
        }
        var dbo = db.db("crud")
        const myObj = {name:req.body.name ,age:req.body.age}
        dbo.collection("task").insertOne(myObj,{_id:0},(err,final)=>{
            if(err){
                res.json({
                    message:"Not able to insert the data"
                })
            }
            res.json({
                message:"One Data inserted"
            })
            db.close();
        })
    })
})

module.exports = router
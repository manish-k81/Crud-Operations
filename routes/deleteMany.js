const express = require('express');
const router = express.Router()
const { MongoClient, Mongourl } = require('../database/mongo');

router.delete('/',(req,res)=>{
    MongoClient.connect(Mongourl,(err,db)=>{
        if(err){
            res.json({
                message:"Could not connect to MongoDb"
            })
        }
        var dbo = db.db("crud");
        const myQuery = { name:req.body.name }
        dbo.collection("task").deleteMany(myQuery,(err,final)=>{
            if(err){
                res.json({
                    message:"Not able to delete the data"
                })
            }
            res.json({
                message:"Deleted the Data"
            })
            db.close();
        })
    })
})

module.exports = router;
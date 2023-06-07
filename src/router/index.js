const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('hellow word')
})

module.exports=router
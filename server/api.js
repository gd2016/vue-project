var express=require('express');
var router=express.Router();



router.get('/api/index',function(req,res,next){
    res.send({content:"主页"})
})

router.get('/api/settings',function(req,res,next){
    res.send({content:"设置页"})
})

router.get('/api/friends',function(req,res,next){
    res.send('朋友圈数据')
})

router.get('/api/personal',function(req,res,next){
    res.send('个人中心数据')
})
module.exports=router
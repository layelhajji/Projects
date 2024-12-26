const express=require('express');
const router=express.Router();
const User = require("../Models/user")


router.post('/user',async(req,res)=>{
  
    try{
      data=req.body;
      usr= new User(data)
      savedUser= await usr.save()
      res.send(savedUser)
          }
    
    catch{
          (err)=>{
            res.send(err)
          }
    }
  } 
  )
// router.post('/user',(req,res)=>{

//     data=req.body;
//     usr= new User(data)
//     usr.save()
//         .then(
//           (savedUser)=>{
//             res.send(savedUser)
//           }
//         ).catch(
//           (err)=>{
//             res.send(err)
//           }
//         )
    
//   })
  
  router.get('/user',async(req,res)=>{
  
    try{
      users = await User.find()
      res.status(200).send(users)
          }
    
    catch{
          (err)=>{
            res.status(400).send(err)
          }
    }
  } 
  )
  router.get('/user/:id',async(req,res)=>{
  
    try{
      myid=req.params.id
      user = await User.findOne({_id:myid})
      res.send(user)
          }
    
    catch{
          (err)=>{
            res.send(err)
          }
    }
  } 
  )
  router.delete('/user/:id',async(req,res)=>{
  
    try{
      myid=req.params.id
      deleteduser = await User.findOneAndDelete({_id:myid})
      res.send(deleteduser)
          }
    
    catch{
          (err)=>{
            res.send(err)
          }
    }
  } 
  )
  
  
  
  router.put('/user/:id',async(req,res)=>{
  
    try{
      myid=req.params.id
      newdata=req.body
      updateduser = await User.findOneAndUpdate({_id:myid},newdata)
      res.send(updateduser)
          }
    
    catch{
          (err)=>{
            res.send(err)
          }
    }
  } 
  )
  
  
  










module.exports=router
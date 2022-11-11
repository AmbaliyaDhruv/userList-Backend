const express=require('express');
const Users=require('../model/users.model')
const router=express.Router();

router.get("/",async(req,res)=>{
  try {
     
    const users=await Users.find().lean().exec();
    return res.status(200).send(users);

  } catch (error) {
    
    return res.status(400).send(error.message);

  }
})

router.post("/signup",async(req,res)=>{
    try {
        let user=await Users.findOne({email:req.body.email});
        if(user){
            return res.status(400).send("email id already exists")
        }
        user=await Users.create(req.body);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(400).send(error.message)
    }
})

router.post("/login",async(req,res)=>{
  try {
     
    const user=await Users.findOne({email:req.body.email});
    if(!user){
      return res.status(400).send("Please try another email")
    }
    const match=user.checkPassword(req.body.password);
    if(!match){
      return res.status(400).send("Please try another password")
    }
    return res.status(200).send(user)
  } catch (error) {
    return res.status(400).send(error.message)
  }
})

module.exports=router;
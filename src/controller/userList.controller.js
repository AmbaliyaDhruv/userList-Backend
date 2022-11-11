const express=require('express');
const UserLists=require('../model/userLists.model');
const router=express.Router();

router.get('/',async(req,res)=>{
  try {
      const userList=await UserLists.find().lean().exec()
      return res.status(200).send(userList);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}) 

module.exports=router
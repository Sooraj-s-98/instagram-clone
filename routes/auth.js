const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User= mongoose.model("User")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../keys')
const requireLogin=require('../middleware/requireLogin')

router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body
    if(!email|| !password || !name){
       return( res.status(422).json({error:"please add all the fields"}) )
    }
  User.findOne({email:email})
  .then((savedUser)=>{
      if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
      }
      bcrypt.hash(password,12)
      .then(hashedpassword=>{
        const user=new User({
            email,
            password :hashedpassword,
            name
        })
        user.save()
        .then(user=>{
            res.json({message:"saved successfully"})
        })
        .catch(err=>{
            console.log(err)
        })
      })

  })
  .catch(err=>{
      console.log(err)
  })
})

router.post('/signin',(req,res)=>{
    const {email,password}=req.body
    if(!email|| !password ){
       res.status(422).json({error:"please add email and password"}) 
    }
  User.findOne({email:email})
  .then((savedUser)=>{
      if(!savedUser){
         res.status(422).json({error:"Invaild Email or password"})
      }
      bcrypt.compare(password,savedUser.password)
      .then(doMatch=>{
          if(doMatch){
              //res.json({message:"succsessfully signed in"})
              const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
              res.json({token})
          }
          else{
            res.status(422).json({error:"Invaild Email or password"})
          }
      })
      .catch(err=>{
        console.log(err)
      })
    })
})

module.exports=router
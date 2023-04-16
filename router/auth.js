const express= require('express');
const router=express.Router();
require('../db/conn');
const Shark = require('../model/sharkSchema');
const Ep=require('../model/epSchema');


// Middleware
const middleware= (req,res,next) => {
    console.log('in middleware');
    next();
}

// Routes
router.get('/',middleware, (req,res) => {
    res.send("Hello!!");
})

router.get('/', (req,res) => {
    res.send("Hello!!");
})

router.get('/about',middleware, (req,res) => {
    console.log('about')
    res.send("Hello!!");
})

router.get('/contact',middleware, (req,res) => {
    res.send("Hello!!");
})

router.get('/sharkregister',middleware, (req,res) => {
    res.send("Hello!!");
})

router.get('/sharklogin',middleware, (req,res) => {
    res.send("Hello!!");
})

router.get('/epregister',middleware, (req,res) => {
    res.send("Hello!!");
})

router.get('/eplogin',middleware, (req,res) => {
    res.send("Hello!!");
})

router.get('/shark',middleware, (req,res) => {
    res.send("Hello!!");
})

router.get('/ep',middleware, (req,res) => {
    res.send("Hello!!");
})

router.post('/sharkdata',(req,res) => {
    const {name,email,phone,profession,income,password,govtId}=req.body;

    if(!name || !email || !phone || !profession ||! income || !password || !govtId){
        return res.status(422).json({error: "Field left empty"});
    }

    Shark.findOne({email:email})
    .then((userExists) => {
        if(userExists){
            return res.status(422).json({error: "User already exists"});
        }
        
        const shark=new Shark({name,email,phone,profession,income,password,govtId});
        
        console.log('before save');
        shark.save()
        .then(() => {
            console.log('inside then');
            res.status(201).json({message: "Registered successfully"});
        }).catch((err) => {
            console.log('inside catch');
            console.log(err);
            res.status(500).json({error: "Failed to Registered"})
        })
    }).catch((err) => {
        console.log(err);
    })
});

// const {name,email,phone,profession,amount,equity,category,income,profit,password,govtId}=req.body;
// if(!name || !email || !phone || !profession || !amount || !equity || !category || ! income || ! profit || !password || !govtId){
//     return res.status.json({error: "Field left empty"});
// }

router.post('/epdata',(req,res) => {
    const {name,email,phone,profession,amount,equity,category,income,profit,password,govtId}=req.body;

    if(!name || !email || !phone || !profession || !amount || !equity || !category || ! income || !profit || !password || !govtId){
        return res.status(422).json({error: "Field left empty"});
    }

    Ep.findOne({email:email})
    .then((userExists) => {
        if(userExists){
            return res.status(422).json({error: "User already exists"});
        }
        
        const ep=new Ep({name,email,phone,profession,amount,equity,category,income,profit,password,govtId});
        
        console.log('before save');
        ep.save()
        .then(() => {
            console.log('inside then');
            res.status(201).json({message: "Registered successfully"});
        }).catch((err) => {
            console.log('inside catch');
            res.status(500).json({error: "Failed to Registered"})
        })
    }).catch((err) => {
        console.log(err);
    })
});

module.exports=router;
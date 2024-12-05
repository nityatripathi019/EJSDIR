
const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static("public"));//isko create krte h taki hm apni style.css aur js bhi bhej ske 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})

// app.get("/",(req,res)=>{
//     res.send("this is root path");
// })

app.get("/home",(req,res)=>{
    res.render("home.ejs")
})

app.get("/rolldice",(req,res)=>{
   let diceVal = Math.floor(Math.random()*6 + 1); 
    res.render("rolldice.ejs",{diceVal:diceVal});
})

// app.get("/ig/:username",(req,res)=>{
//     let{username} = req.params;
//     let followers = ["aditya","shreya","vaishnawi","pragya","avantika","crazy memes"]
//     res.render("instagram.ejs",{username,followers});
// })

app.get("/ig/:username",(req,res)=>{
    const instadata = require("./data.json");
    let{username}=req.params;
     const data = instadata[username];
     console.log(data);
     if(data){
        res.render("instagram.ejs",{data});
     }
    else{
        res.render("error.ejs");
    }
    
})
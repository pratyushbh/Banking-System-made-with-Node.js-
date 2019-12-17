const fs = require('fs');
const path = require('path');
const express = require('express');
var app = express();
var data = fs.readFileSync(path.join(__dirname,'Public','Data.json'));
var words =JSON.parse(data);
var Account = words.Accounts;
var server = app.listen(3000,()=>console.log("The Server is Running"));
app.use(express.static(path.join(__dirname,'Public')))
app.get('/add/:id/:name/:amount',(Request,Response)=>{
        var data = Request.params;
        var id = data.id;
        var amount = data.amount;
        var name = data.name;
        Account[id] = {"id":Number(id),"name":name,"amount":Number(amount),"Times":0};
        var JSONData = JSON.stringify(words)
        fs.writeFile(path.join(__dirname,'Public','Data.json'),JSONData,(error)=>{if(error) throw error});
        fs.writeFile(path.join(__dirname,'Public','Js','DataBase',id+'.json'),'{"Details":[]}',(error)=>{if(error) throw error});
        Response.redirect('/');
    })
    app.get('/update/:id/:amount/:Times/:name/:amountE',(Request,Response)=>{
        var data = Request.params;
        var id = data.id;
        var amount = data.amount;
        var name = data.name;
        var Times = data.Times;
        Account[id] = {"id":Number(id),"name":name,"amount":Number(amount),"Times":Number(Times)};
        var JSONData = JSON.stringify(words)
        fs.writeFile(path.join(__dirname,'Public','Data.json'),JSONData,(error)=>{if(error) throw error});
        var amountE = data.amountE;
        var idd = Number(data.Times) - 1;
        var NewData = fs.readFileSync(path.join(__dirname,'Public','Js','DataBase',id+'.json'));
        var NewTransction =JSON.parse(NewData);
        var Details = NewTransction.Details;
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        Details[idd] = {"DateTime":dateTime,"Transaction":Number(amountE)};
        var JSOND = JSON.stringify(NewTransction)
        fs.writeFile(path.join(__dirname,'Public','Js','DataBase',id+'.json'),JSOND,(error)=>{if(error) throw error}); 
        Response.redirect('/');
    })

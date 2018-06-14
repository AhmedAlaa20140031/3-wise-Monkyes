var express = require('express');
var mongoose = require('mongoose');
var app = express();
var http = require('http');
//3_wise_monkeys ( Ahmed & Ghada & Karim)
// Connect To DB
var url = 'mongodb://3_wise_monkeys:3_wise_monkeys@ds259410.mlab.com:59410/erpdata';
mongoose.connect(url);
var ERPSchema = new mongoose.Schema(
  {
    id: String,
    data: String
  }
);
// Create Models
var Basic = mongoose.model('Basic',ERPSchema,'basic');
var Biography = mongoose.model('Biography',ERPSchema,'biography');
var Testimonials = mongoose.model('Testimonials',ERPSchema,'testimonials');
var Tweets = mongoose.model('Tweets',ERPSchema,'tweets');
var Data = [];

// Find Function
Basic.find({},function(err,data)
{
  if(err) throw err;
  data.forEach(function(item){
    Data.push({"Basic": item.data});
  });
  Biography.find({},function(err,data)
  {
    if(err) throw err;
    data.forEach(function(item){
      Data.push({"Biography": item.data});
    });
    Testimonials.find({},function(err,data)
    {
      if(err) throw err;
      data.forEach(function(item){
      Data.push({"Testimonials": item.data});
      });
      Tweets.find({},function(err,data)
      {
        if(err) throw err;
        data.forEach(function(item){
        Data.push({"Tweets": item.data});
        });
/////////////////////////////////////////////////////////////
      //Connet to server
      var server = http.createServer(function(req,res)
      {
          res.writeHead(200,{"Content-Type": "application/json"});
          //send API
          res.end(JSON.stringify(Data));
      });
      server.listen(8000);
/////////////////////////////////////////////////////////////
      });
    });
  });
});

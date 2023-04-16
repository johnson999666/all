const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");




const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



    
  
    
  

app.get('/', function(req, res) {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 5 && hours < 12) {
        var greeting = 'good morning'
        res.render('index', {greeting: greeting});
      } else if (hours >= 12 && hours < 18) {
        var greeting = 'good afternoon'
        res.render('index', {greeting: greeting});
      } else {
        var greeting = 'good evening'
        res.render('index', {greeting: greeting});
      }



    
    
    
  });
 
  


app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });
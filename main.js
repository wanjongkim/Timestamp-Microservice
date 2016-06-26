var express = require('express');
var app = express();

app.use(express.static('client'));

app.get('/', function(req, res) {
    console.log("Got a GET request for the homepage");
    res.send();
});

function getUnixDate(date) {
    var dateObj = new Date(date);
    return (dateObj.getTime() / 1000).toFixed(0);
}

function getNaturalDate(unixDate) {
    var date = new Date(unixDate*1000);
    var naturalDate = date.toDateString();
    //i.e naturalDate is Thu Jul 21 2439
    naturalDate = naturalDate.substring(naturalDate.indexOf(" ")+1, naturalDate.length);
    //now naturalDate is Jul 21 2439
    var lastIndexOfSpace = naturalDate.lastIndexOf(" ");
    naturalDate = naturalDate.substring(0, lastIndexOfSpace) + ", " + naturalDate.substring(lastIndexOfSpace+1, naturalDate.length);
    if(naturalDate === ", Date") 
        naturalDate = null;
    return naturalDate;
}

//i.e. /json%20natural?date=december%2015,%202016
app.get('/json%20natural', function(req, res) {
    console.log("Got a json request for the natural date");  
    var naturalDate = req.query.date;
    naturalDate = naturalDate.replace(/%20/g, ' ');
    var unixDate = getUnixDate(naturalDate);
    
    if(isNaN(unixDate)) {
       naturalDate = null;
       unixDate = null;
    }
    
    var response = {
        "unix": unixDate,
        "natural": naturalDate
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response)); 
});

app.get('/json%20unix', function(req, res) {
    console.log("Got a json request for the unix");  
    var unixDate = req.query.date;
    var naturalDate = getNaturalDate(unixDate);
    if(naturalDate == null) {
       naturalDate = null;
       unixDate = null;
    }
    
    var response = {
        "unix": unixDate,
        "natural": naturalDate
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(response)); 
});

app.listen(process.env.PORT, process.env.IP);
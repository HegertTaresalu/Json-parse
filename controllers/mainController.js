const dateTime = require("../getDate.js");
const Date = require("../models/date.js")

exports.getDate = (req,res) => {

    
    let today = dateTime.getDate();
    console.log("test1")
    res.send(today);
}


exports.postDate = (req,res) => {
    console.log("test2");
    let today = dateTime.getDate();

    const newDate = new Date(today)
    newDate.saveDate(today);
    dates = Date.fetchDates();

    res.send(date   );
}
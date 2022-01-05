const path = require("path");
const fs = require("fs");
const filePath = path.join(path.dirname(require.main.filename), "data", "dates.json"    )

module.exports = class Date{
    constructor(today){
        this.today = today;
    }

    saveDate(today){
        fs.readFile(filePath,(error,fileContent)=>{
        let dates =  [];
        if(!error){
            dates = JSON.parse(fileContent);
        }
        else{
            console.log(error)

        }
        dates.push();
        fs.writeFile(filePath, JSON.stringify(dates), (error) => {
            if(!error){
                console.log("date saved")
            }
        });

    });

    }

    static fetchDates(callback){
        fs.readFile(filePath,(error,fileContent)=> {
            if(error)
            {
                callback([]);
            }

            callback(JSON.parse(fileContent));
        });

    }

}
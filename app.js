const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine','ejs');                              /*specifying that we are using EJS with express */

app.get("/",function(req,res){

    var today = new Date(); 
    var currentDay = today.getDay();
    var day ="";                                /*res.render will use the view engine to render a particular page*/

        
        switch (currentDay) {
            case 0:
                     day="Sunday";
                break;
            case 1:
                    day="Monday";
               break;
            case 2:
                     day="Tuesday";
                break;
            case 3:
                     day="Wednesday";
                break;
            case 4:
                     day="Thursday";
                break;
            case 5:
                     day="Friday";
                break;
            case 6:
                     day="Saturday";
                break;
        
            default:
                console.log("Error");
                break;
        }
                                         
    


    res.render("list",{kindofDay:day});                       /*Render list and passing javascript object which has a key value pair */
})                                                            /*key value = as defined in .ejs file*/

app.listen(3000,function(){
    console.log("Server running on port 3000");
})
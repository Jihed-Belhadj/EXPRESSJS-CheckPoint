const express = require('express')
const app = express();
const port=5000;
var date =new Date()
var day=date.getDay()
var hour=date.getHours()

const middleware=(req,res,next)=>{
    
    day>0 && day<6 && hour>8 && hour<18 ? next() :
    res.send('<h1>SORRY, WE ARE CLOSED NOW, WE WILL BE AVAILABLE FROM MONDAY TO FRIDAY, FROM 09 TO 17</h1>')
}



app.use(middleware);
app.use(express.static('public'));
app.listen(port,()=>console.log(`Server is running on port:  ${port}`))
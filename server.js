const express=require('express');
const app = express();
const port = 8080;   //Server is running on this port
const cors= require('cors');

//It requires the post request from the calculatorRouter file
const sipdelaycalculate=require('./routes/calculatorRouter');

app.use('/',sipdelaycalculate);
app.use(cors());


app.use(express.json()); //Parsing the body in middleware...

app.use('/sipdelaycalculate',sipdelaycalculate);  //Using the post api from router... 


app.listen(port, ()=>{
    console.log(`App is listening at http://localhost:${port}`);
});
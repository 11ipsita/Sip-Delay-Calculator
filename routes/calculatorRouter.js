const express = require('express');
const router = express.Router();
const bodyparser=require('body-parser');


const calculatorcontrol = require('../controller/calculatorController');
router.use(bodyparser.json());  //For body-parser...

//Sending post request to server and performing action from controller..
router.post("/", calculatorcontrol);
module.exports=router; 

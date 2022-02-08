const express = require('express');
const router = express.Router();
const bodyparser=require('body-parser');


const calculatorcontroller= require('../controller/calculatorController');
router.use(bodyparser.json());  //For body-parser...

//Sending post request to server and performing action from controller..
router.post("/SipDelayCalculator", calculatorcontroller.Calculatecontrol);
module.exports=router; 

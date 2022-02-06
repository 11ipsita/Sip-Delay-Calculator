const servicelogic=require('../services/bussinesslogic');


const Calculatecontrol = (req,res)=>{
    const{monthlyinvestment,investmentperiod,rateofreturn,delay}=req.body;
    //Validations for user input...
    if(!(monthlyinvestment >= 0)){
        res.send("Invalid monthlyinvestment");
    }else if(!(investmentperiod > 0)){
        res.send("Invalid investmentperiod");
    }else if(!(rateofreturn > 0)){
        res.send("Invalid rateofreturn");
    }else if(!(delay > 0)){
        res.send("Invalid delay");
    }else {
        var info = servicelogic(monthlyinvestment,investmentperiod,rateofreturn,delay);
     
    //Result string...    
    /*res.send(` Delay of ${delay} months in starting your SIP will cause a national Loss of: Rs.${info.loss} in the final value of your investment. 
      If you start investing from today then the final value is Rs.${info.starttoday}.
      If you start investing after ${delay} months then the final value is Rs.${info.delayedstart}.` ); */

      var finalresult = `If you start your investment from today,the final value will be ${info.startfromtoday}.\nIf you start your investment after ${delay} months,the final value will be ${info.delayedstart}.\nAnd it will cause notional loss of :${info.lossfromdelay} in the final value of your investment.`
      res.send(finalresult);
    }    
}

module.exports= Calculatecontrol;

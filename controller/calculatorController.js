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
        var info = servicelogic.CalculateSip({monthlyinvestment, investmentperiod, rateofreturn, delay});

        res.send(info);
        
        /*var finalresult = `If you start your investment from today,the final value will be Rs.${info.startfromtoday}.\nIf you start your investment after ${delay} months,the final value will be Rs.${info.delayedstart}.\nAnd it will cause notional loss of : Rs.${info.lossfromdelay} in the final value of your investment.`
          res.send(finalresult);*/

    }    
}

module.exports= {Calculatecontrol};

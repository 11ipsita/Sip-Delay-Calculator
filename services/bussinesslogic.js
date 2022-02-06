//Function for SIP Delay...
    const CalculateSip = (monthlyinvestment,investmentperiod,rateofreturn,delay) =>{
      var timeduration =(investmentperiod)*12;
      var rate =(rateofreturn)/12;
      var timedurationafterdelay = timeduration-delay;
     
      //SIP for current period time duration..
      var starttoday = sipgrowth(monthlyinvestment,timeduration,rate); 
      
      //SIP for period time durationafterdelay..
      var delayedstart = sipgrowth(monthlyinvestment,timedurationafterdelay,rate); 
      
      //National Loss Cause...
      var loss = starttoday-delayedstart; 
      
      //Return sip information in an object form...
      var sip = {
        starttoday : Math.round(starttoday),
        delayedstart: Math.round(delayedstart),
        loss : Math.round(loss)
      }
      return sip;

}

//Function for calculating sipGrowth..
function sipgrowth(monthlyinvestment,timeduration,rateofreturn) {
    var sipCumulation=0;
    var sipGrowthResult=0;

    for (let i = 1; i <= timeduration; i++) {
        sipCumulation = monthlyinvestment * (Math.pow((1+rateofreturn/100),i));
        sipGrowthResult += sipCumulation;
    }

    return sipGrowthResult;
}


module.exports=CalculateSip;

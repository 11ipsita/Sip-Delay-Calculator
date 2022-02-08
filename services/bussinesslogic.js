 //Function for calling SIP Delay...
    const CalculateSip = (BodydData) =>{

      var monthlyinvestment = BodydData.monthlyinvestment;
      var investmentperiod = BodydData.investmentperiod;
      var rateofreturn = BodydData.rateofreturn;
      var delay = BodydData.delay;


      var timeduration =(investmentperiod)*12;
      var rate =(rateofreturn)/12;
      var timedurationafterdelay = timeduration-delay;
     
      //SIP for current period time duration..
      var sipGrowthToday = sipgrowth(monthlyinvestment,timeduration,rate); 
      
      //SIP for period time durationafterdelay..
      var sipGrowthDelay = sipgrowth(monthlyinvestment,timedurationafterdelay,rate); 
      
      //National Loss Cause...
      var lossFromDelay = sipGrowthToday-sipGrowthDelay; 
      
      //Return sip information in an object form...
      var Data = {
        sipGrowthToday: sipGrowthToday,
        sipGrowthDelay: sipGrowthDelay,
        lossFromDelay: lossFromDelay,
        DelayMonths: delay
    }
  //this is array of objects where the objects are for the showing result in graph
    let Graph = [{
        name: "StartToday",             //name is for x-axis
        amount: sipGrowthToday             //amount is for y-axis
    },
    {
        name: "DelayedStart",
        amount: sipGrowthToday
    },
    {
        name: "Loss",
        amount: lossFromDelay
    }]


    return { Data,Graph };   

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


module.exports={
  CalculateSip
};

function weeklyWage(band, weeklyHours) {
        let totalPay= hourlyRate*hourWorked;
     for (var i=0; i<weeklyHours.length; i++){
         if(band==="A"){
             totalPay+= 23; 
         }else if(band==="B"){
             totalPay+= 37;
         } else if(band==="C"){
             totalPay+=51;
         }else{
             return 0;
         }
         }
         return totalPay;
     }
    

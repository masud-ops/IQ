
//RESULT BUTTON FUNCTION
//const resultReady = document.getElementById("resultReady");
var numberWin = 1;
var numberLost = 1;
//for (var i=0; i<=0; i++){

document.getElementById("resultReady").addEventListener("click", function() {      
   // for (var i=1; i<=1; i++){
    var userInputData = document.getElementById("userInput").value;
     var userNumber = parseInt(userInputData);
     //document.getElementById("userInput").value = "";
    
    var randomNumber =Math.floor (Math.random()*5) + 1 ;
         if (userNumber==randomNumber){
            var totalResult = randomNumber + currrentResult;
             document.getElementById("currrentResult").innerText = "বাহ!-আপনি সঠিক সংখ্যাটি দিয়েছেন-0" + randomNumber;
             document.getElementById("currrentResultFail").innerText ="";
             document.getElementById("userInput").value = "";
             document.getElementById("finalResult").innerText = "সঠিক উত্তর - "+ numberWin ;
            // document.getElementById("finalResulttwo").innerText = "" ;
                numberWin++;  
                   //  i++; 
               //    console.log("numberWin");
         }
         
         else {
            // console.log("lost" + randomNumber);
             document.getElementById("currrentResultFail").innerText = "দুঃখিত-সঠিক সংখ্যাটি হচ্ছে-0" + randomNumber;
             document.getElementById("currrentResult").innerText = "";
             document.getElementById("userInput").value = "";
             document.getElementById("finalResulttwo").innerText = "ভুল উত্তর - "+ numberLost ;
             //document.getElementById("finalResult").innerText = "";
                numberLost++; 
           // console.log("numberLost");
          // i++;  
         
              }        
          
       })
    //  buttonsContainer.appendChild(button);
      // console.log("resultReady");
   // }

       //result button end



//reset button         
document.getElementById("removeResult").addEventListener("click", function(){
  // console.log("button is click");
   document.getElementById("userInput").value = "";
   document.getElementById("show-result").innerText = "please try again";
   document.getElementById("currrentResultFail").innerText = "please try again";
   document.getElementById("finalResult").innerText = "Try Again" ;
   document.getElementById("finalResulttwo").innerText = "Try Again" ;
})    
//reset button end




 

const dob = document.querySelector("#dateOfBirth");
const luckyNumber = document.querySelector("#luckyNumber");
const checkButton = document.querySelector("#check");
const resultField = document.querySelector("#result");
const errorMessage = document.querySelector("#error");
checkButton.addEventListener("click", getResult);

function getResult(){
    errorMessage.style.display="none";
    resultField.style.display="none";
   const birthDate = dob.value;
   if ( birthDate && luckyNumber.value) {
    const sumOfDate = calculateSumOfDate(birthDate);
    if (luckyNumber.value > 0) {
        calculateNoIsLucky(sumOfDate, luckyNumber.value);
    } else if(isNaN(luckyNumber.value )) {
        errorMessageDisplay("Error! Please enter a numeric digit.")
    }else{
        errorMessageDisplay("Error! Please enter your lucky number greater than zero.")

    }
    
   console.log(sumOfDate);
   } else {
    errorMessageDisplay("Error! Please enter Date of Birth and your lucky number.")
   }
   
}
function errorMessageDisplay(message){
    errorMessage.style.display="block";
    errorMessage.innerText = message;
}

function calculateSumOfDate(birthDate){
    const birthDateString = birthDate.replaceAll("-","");
    let sum = 0;
 for (const iterator of birthDateString) {
    sum+=Number(iterator);
 }

    return sum;
}

function calculateNoIsLucky(sumOfDate, luckyNumber){
    resultField.style.display="block";
    if(sumOfDate%luckyNumber === 0)
    {
        resultField.value= "Your Birth date is lucky!!🥳🤗";
    }
    else{
        resultField.value = "Your Birth date is not lucky!!😅";
    }
}
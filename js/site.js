//get value from page
function getValues(){

    //makes alert invisible
    document.getElementById("alert").classList.add("invisible");

    let userWord = document.getElementById("userWord").value;

    let reverseWord = checkForPalindrome(userWord);

    displayResults(reverseWord);

}

//loop through word entered by user
//logic function
function checkForPalindrome(userString){

    //race car
    userString = userString.toLowerCase();
    
    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex,"");


    let reversedWord = [];
    let returnObj = {};

    //reverse a word using a for loop
    for (let index = userString.length -1; index >= 0; index--) {
       
        reversedWord += userString[index];
    }

    if(reversedWord == userString){
        returnObj.msg = "Well done! You entered a Palindrome!";
    }
    else{
        returnObj.msg = "Sorry! You did not enter a Palindrome!";
    }


     returnObj.reversed = reversedWord;

     return returnObj;
}

//display results
function displayResults(returnObj){

    document.getElementById("alertheader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}
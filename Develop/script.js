//function to

let passwordAreaEl = document.querySelector("#password")





function generatePassword () {

    let passwordLength = prompt("Please enter a numeric length of Password, must be at least 8 and less than 128.");
    let isNumeric = confirm("Would you like to have numeric values as part of password?")
    let isLower= confirm("Would you like to have upperCase letters as part of password?");
    let isUpper= confirm("Would you like to have lowerCase letters as part of password?");
    let isSpecial= confirm("Would you like to have special characters as part of password?");

    let isValid = validation(passwordLength, isNumeric,isLower,isUpper,isSpecial)


    if(isValid){
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowerCase = "cdefghijabklmnopqrstuvwxyz";
        var numberChar = "123456789";
        var specialChar = "!@#$%^&*()";
        var allChar="";

        if(isUpper) allChar += upperCase 
        if(isLower) allChar+= lowerCase 
        if(isNumeric) allChar+= numberChar 
        if(isSpecial) allChar += specialChar; 

        console.log("allChar is: ", allChar)


        var randPasswordArray = new Array(parseInt(passwordLength));

        const charArr = Array.from(allChar);

        console.log("charArr: ", charArr);
        //Reseach this 
        for(let i =0; i< randPasswordArray.length; i++){
            randomChar = charArr[Math.floor(Math.random()*charArr.length)];
            randPasswordArray[i] = randomChar;
        }

        
        console.log("randPasswordArray: ", randPasswordArray)
    
        randPasswordArray = randPasswordArray.fill(allChar, passwordLength);
    
        let newPassword = shuffleArray(randPasswordArray.map(function(x)
        { return x[Math.floor(Math.random() * x.length)]
        })).join('');
        
        passwordAreaEl.textContent= newPassword

        return newPassword;

    } else{
        alert("Please try again!")
    }

}

const validation = (passwordlength, isNumeric,isLower,isUpper,isSpecial) =>{

    if(passwordlength<8 ||passwordlength>128) {
        alert("Password length must be between 8 - 128")
        return false;
    }
    if(!isNumeric && !isLower && !isUpper && !isSpecial){
        alert("Password must include at least one of the following types of values numeric, lowercase, uppercase, special characters")
        return false;
    }

    return true;

}

function shuffleArray(array) {
    for (var i = array.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i +1));
        var temp = array [i];
        array [i] = array [j];
        array[j] = temp;
    }
    return array;
}
const buttonEl = document.getElementById("generate")

buttonEl.addEventListener('click',()=>{
    console.log(generatePassword(12))
});


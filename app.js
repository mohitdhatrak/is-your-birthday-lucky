var inputDate = document.querySelector("#input-date");
var inputLuckyNumber = document.querySelector("#input-lucky-number");
var button = document.querySelector("#button");
var outputText = document.querySelector("#output-message");
var errorText = document.querySelector("#error-message");

function clickListner() {
    outputText.innerText = "";
    errorText.innerText = "";
    var luckyNumber = inputLuckyNumber.value;
    var birthdate = inputDate.value;
    var birthdateSum = 0;

    console.log(birthdate);

    if (luckyNumber < 0 || Number.isNaN(Number(luckyNumber))) {
        errorText.innerText = "Please enter a positive numerical value only";
    } else if (birthdate === "") {
        errorText.innerText = "Please enter your birthdate";
    } else if (luckyNumber === "") {
        errorText.innerText =
            "Please enter a positive numeric value as your lucky number";
    } else {
        for (var i = 0; i < birthdate.length; i++) {
            if (!Number.isNaN(Number(birthdate[i]))) {
                birthdateSum = Number(birthdate[i]) + birthdateSum;
            }
        }

        if (birthdateSum % luckyNumber === 0) {
            outputText.innerText = "Your birthday is lucky ! 🎊🎉";
        } else {
            outputText.innerText = "Your birthday is not that lucky 😞";
        }
    }
}

button.addEventListener("click", clickListner);

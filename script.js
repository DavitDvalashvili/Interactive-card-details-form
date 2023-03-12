const confirmBtn = document.querySelector("#button");
const inputName = document.querySelector("#input-name");
const cardName = document.querySelector(".name");
const inputNumber = document.querySelector("#input-number");
const cardNumber = document.querySelector(".number");
const numValidation = document.querySelector(".number-validation");
const nameValidation = document.querySelector(".name-validation");
const cvcValidation = document.querySelector(".cvc-validation");
const inputCvc = document.querySelector("#input-cvc");
const cvc = document.querySelector("#cvc");
const inputMonth = document.querySelector("#input-month")
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const inputYear = document.querySelector("#input-year");
const dateValidation = document.querySelector(".date-validation");
const inputBox = document.querySelector("#input-box");
const confirmation = document.querySelector(".confirmation");



let timeoutId;

//display cardholder's name on screen after 1000 ms
inputName.addEventListener('input', () => {
    clearTimeout(timeoutId);
    nameValidation.style.display = "none";
    timeoutId = setTimeout(() => {
      if(inputName.value == "") {
        cardName.textContent = "FIRST NAME LAST NAME"
      } else {
        cardName.textContent = inputName.value;
        inputName.style.borderColor = "#DFDEE0";
      }
    }, 1000);
});


//display card numbers on screen after 1000 ms
inputNumber.addEventListener('input', (e) => {
    clearTimeout(timeoutId);
    numValidation.style.display = "none"
    timeoutId = setTimeout(() => {
        if(inputNumber.value == "") {
            cardNumber.textContent = "0000 0000 0000 0000"
        } else {
          cardNumber.textContent = inputNumber.value;
          inputNumber.style.borderColor = "#DFDEE0";
        }
    }, 1000);
});

//prevents typing non-numerical characters and add spaces between numbers.
inputNumber.addEventListener("keypress", function (e) {
  if (isNaN(e.key)) {
    e.preventDefault();
  } else if (inputNumber.value.length == 4 || inputNumber.value.length == 9  || inputNumber.value.length == 14){
    inputNumber.value=inputNumber.value+" ";
  }
});

//display cvc code on screen after 500 ms
inputCvc.addEventListener('input', (e) => {
  clearTimeout(timeoutId);
  cvcValidation.style.display = "none"
  timeoutId = setTimeout(() => {
      if(inputCvc.value == "") {
        cvc.textContent = "000"
      } else {
        cvc.textContent = inputCvc.value;
        inputCvc.style.borderColor = "#DFDEE0";
      }
  }, 1000);
});

//prevents typing non-numerical characters
inputCvc.addEventListener("keypress", function (e) {
  if (isNaN(e.key)) {
    e.preventDefault();
  }
});


//display month on screen after 1000 ms
inputMonth.addEventListener('keypress', (e) => {
  clearTimeout(timeoutId);
  dateValidation.style.display = "none" 
  timeoutId = setTimeout(() => {
      if(inputMonth.value == "") {
        month.textContent = "00"
      } else {
        month.textContent = inputMonth.value;
        inputMonth.style.borderColor = "#DFDEE0";
      }
  }, 1000);
});

//prevents typing non-numerical characters
inputMonth.addEventListener("keypress", function (e) {
  if (isNaN(e.key)) {
    e.preventDefault();
  }
});

//display month on screen after 1000 ms
inputYear.addEventListener("input", (e) => {
  clearTimeout(timeoutId);
  dateValidation.style.display = "none";
  timeoutId = setTimeout( () => {
    if(inputYear.value == "") {
      year.textContent = "00"
    } else {
      year.textContent = inputYear.value;
      inputYear.style.borderColor = "#DFDEE0";
    }
  }, 1000)
})

//prevents typing non-numerical characters
inputYear.addEventListener("keypress", function (e) {
  if (isNaN(e.key)) {
    e.preventDefault();
  }
});

//displays confirmation when every input is filled or show error message.
confirmBtn.addEventListener("click", () => {
  if(inputName.value != "" && inputNumber.value != "" && 
  inputCvc.value != "" && inputMonth.value != "" &&
  inputYear.value != "") {
    inputBox.style.display = "none";
    confirmation.style.display = "block"
  } else {
    if(inputName.value == "") {
      nameValidation.style.display = "block";
      inputName.style.borderColor = "#FF5050";
      console.log(inputName.value)
    }
    if (inputNumber.value == "") {
      numValidation.style.display = "block";
      inputNumber.style.borderColor = "#FF5050";
    }
    if (inputCvc.value == "") {
      cvcValidation.style.display = "block";
      inputCvc.style.borderColor = "#FF5050";
    }
    if (inputMonth.value == "") {
      dateValidation.style.display = "block";
      inputMonth.style.borderColor = "#FF5050";
    }
    if (inputYear.value == "") {
      dateValidation.style.display = "block";
      inputYear.style.borderColor = "#FF5050";
    }
  }
})


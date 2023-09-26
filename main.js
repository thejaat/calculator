let buttons = document.querySelectorAll(".number");
let input = document.getElementById("input");
let clear = document.querySelector(".clear");
let backspace = document.querySelector(".backspace");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText == "C") {
      input.value = "";
    } else if (e.target.innerText == "backspace") {
      input.value = input.value.slice(0, -1);
    }
    // left hand side assingment
    else if (e.target.innerText == "=") {
      input.value = eval(input.value);
    } 
    else if(input.value[0] == "*" || input.value[0] == "/" || input.value[0] == "%" || input.value[0] == "+" || input.value == "--"){
        input.value = "";
    }
    else {
      input.value = input.value + e.target.innerText;
    }
  });
});


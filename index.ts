interface input {
  addEventListener: (arg0: string, arg1: () => void) => void,
  textContent: string | number
}

let display = document.getElementById("output") as HTMLInputElement;
let buttons = document.getElementsByClassName("btn");
Array.prototype.forEach.call(buttons, function (button: input) {
  button.addEventListener("click", function () {
    if (
      button.textContent != "=" &&
      button.textContent != "C" &&
      button.textContent != "x" &&
      button.textContent != "÷" &&
      button.textContent != "1/x" &&
      button.textContent !=
      '√' &&
      button.textContent != "x2" &&
      button.textContent != "2nd" &&
      button.textContent != "10x" &&
      button.textContent != "%" &&
      button.textContent != "|x|" &&
      button.textContent != "e" &&
      button.textContent != "mod" &&
      button.textContent !=
      '⌫' &&
      button.textContent != "+/-" &&
      button.textContent != "log" &&
      button.textContent != "ln" &&
      button.textContent != "xy" &&
      button.textContent != "n!" &&
      button.textContent != "π" &&
      button.textContent != "exp"
    ) {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "2nd") {
      power();
    } else if (button.textContent === "10x") {
      power10();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "|x|") {
      absolute();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "+/-") {
      plusMinus();
    } else if (button.textContent === "1/x") {
      upon();
    } else if (
      button.textContent === '⌫'
    ) {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "x2") {
      square();
    } else if (
      button.textContent ===
      '√'
    ) {
      squareRoot();
    } else if (button.textContent === "e") {
      eulersNum();
    } else if (button.textContent === "mod") {
      mod();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "xy") {
      exponent();
    } else if (button.textContent === "n!") {
      factorial();
    } else if (button.textContent === "exp") {
      exp();
    }
  });
});
function checkLength(): void {
  if (display.value.length >= 13) {
    display.value = "Overload Error";
  }
}
function syntaxError(): void {
  if (eval(display.value) == SyntaxError) {
    display.value = "Syntax Error";
  }
}
function equals(): void {
  if (display.value.indexOf("^") > -1) {
    let base = display.value.slice(0, display.value.indexOf("^"));
    let exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else if (display.value === "" || display.value === undefined) {
    clear();
  } else {
    display.value = eval(display.value);
    checkLength();
    syntaxError();
  }
}
function clear(): void {
  display.value = "";
}
function backspace(): void {
  display.value = display.value.substring(0, display.value.length - 1);
}
function multiply(): void {
  display.value = display.value + "*";
}
function divide(): void {
  display.value = display.value + "/";
}
function plusMinus(): void {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}
function factorial(): void {
  let fact = 1;
  const value = Number(display.value);
  for (let i = 1; i <= value; i++) {
    fact = fact * i;
    display.value = String(fact);
  }
}
function pi(): void {
  display.value = String(Number(display.value) * Math.PI);
}
function square(): void {
  display.value = String(Math.pow(Number(display.value), 2));
}
function squareRoot(): void {
  display.value = String(Math.sqrt(Number(display.value)));
}
function percent(): void {
  display.value = String(Number(display.value) / 100);
}
function sin(): void {
  display.value = String(Math.sin(Number(display.value)));
}
function cos(): void {
  display.value = String(Math.cos(Number(display.value)));
}
function tan(): void {
  display.value = String(Math.tan(Number(display.value)));
}
function log(): void {
  display.value = String(Math.pow(10, Number(display.value)));
}
function ln(): void {
  display.value = String(Math.log(Number(display.value)));
}
function exponent(): void {
  display.value = String(Math.pow(Number(display.value), 2));
  display.value += "^";
}
function exp(): void {
  display.value = String(Math.exp(Number(display.value)));
}
function degtorad(): void {
  if ($(".degrees").text() == "DEG") {
    display.value = String((Math.PI * Number(display.value)) / 180);
    $(".degrees").text("RAD");
  } else {
    display.value = String((180 * Number(display.value)) / Math.PI);
    $(".degrees").text("DEG");
  }
}
function power(): void {
  display.value = String(Math.pow(2, Number(display.value)));
}
function power10(): void {
  display.value = String(Math.pow(10, Number(display.value)));
}
function eulersNum(): void {
  if (display.value) {
    display.value = String(Math.E * Number(display.value));
  } else {
    display.value = String(Math.E);
  }
}
function upon(): void {
  display.value = (1 / Number(display.value)).toFixed(2);
}
function absolute(): void {
  display.value = String(Math.abs(Number(display.value)));
}
function mod(): void {
  display.value = display.value + "%";
}
function ceil(): void {
  display.value = String(Math.ceil(Number(display.value)));
}
function floor(): void {
  display.value = String(Math.floor(Number(display.value)));
}
function random(): void {
  display.value = String(Math.random());
}
function exponential(): void {
  let num = parseFloat(display.value);
  display.value = num.toExponential();
}
let memory = [];
function mplus(): void {
  if (display.value != "") {
    $(".memoryplus").css("display", "block");
    $(".memoryminus").css("display", "none");
    $(".memory").css("display", "none");
    memory.push(parseInt(display.value));
    display.value = memory.reduce((a: number, b: number): number => a + b, 0);
  }
}
function mminus(): void {
  if (display.value != "") {
    $(".memoryminus").css("display", "block");
    $(".memoryplus").css("display", "none");
    $(".memory").css("display", "none");
    memory.push(parseInt(display.value));
    display.value = memory.reduce((a: number, b: number): number => a - b, 0);
  }
}
function mrecall(): void {
  if (memory.length > 0) {
    $(".memory").css("display", "block");
    $(".memoryminus").css("display", "none");
    $(".memoryplus").css("display", "none");
    if (memory.length > 1) {
      display.value = memory[memory.length - 1];
    } else {
      display.value = memory[0];
    }
  }
}
function mclear(): void {
  memory = [];
  $(".memory").css("display", "none");
  $(".memoryminus").css("display", "none");
  $(".memoryplus").css("display", "none");
  display.value = "";
}
function msave(): void {
  if (display.value != "") {
    $(".memoryplus").css("display", "none");
    $(".memoryminus").css("display", "none");
    $(".memory").css("display", "block");
    memory.push(parseInt(display.value));
  }
}

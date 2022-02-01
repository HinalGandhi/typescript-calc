var display = document.getElementById("output");
var buttons = document.getElementsByClassName("btn");
Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
        if (button.textContent != "=" &&
            button.textContent != "C" &&
            button.textContent != "x" &&
            button.textContent != "÷" &&
            button.textContent != "1/x" &&
            button.textContent !=
                '√' &&
            button.textContent !=
                '3√' &&
            button.textContent != "x2" &&
            button.textContent != "2n" &&
            button.textContent != "x3" &&
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
            button.textContent != "exp" &&
            button.textContent != "2nd") {
            display.value += button.textContent;
        }
        else if (button.textContent === "=") {
            equals();
        }
        else if (button.textContent === "C") {
            clear();
        }
        else if (button.textContent === "2n") {
            power();
        }
        else if (button.textContent === "10x") {
            power10();
        }
        else if (button.textContent === "x") {
            multiply();
        }
        else if (button.textContent === "|x|") {
            absolute();
        }
        else if (button.textContent === "÷") {
            divide();
        }
        else if (button.textContent === "+/-") {
            plusMinus();
        }
        else if (button.textContent === "1/x") {
            upon();
        }
        else if (button.textContent === '⌫') {
            backspace();
        }
        else if (button.textContent === "%") {
            percent();
        }
        else if (button.textContent === "π") {
            pi();
        }
        else if (button.textContent === "x2") {
            square();
        }
        else if (button.textContent === "x3") {
            cube();
        }
        else if (button.textContent ===
            '√') {
            squareRoot();
        }
        else if (button.textContent ===
            '3√') {
            cuberoot();
        }
        else if (button.textContent === "e") {
            eulersNum();
        }
        else if (button.textContent === "mod") {
            mod();
        }
        else if (button.textContent === "log") {
            log();
        }
        else if (button.textContent === "ln") {
            ln();
        }
        else if (button.textContent === "xy") {
            exponent();
        }
        else if (button.textContent === "n!") {
            factorial();
        }
        else if (button.textContent === "exp") {
            exp();
        }
    });
});
function equals() {
    if (display.value.indexOf("^") > -1) {
        var base = display.value.slice(0, display.value.indexOf("^"));
        var exponent_1 = display.value.slice(display.value.indexOf("^") + 1);
        display.value = eval("Math.pow(" + base + "," + exponent_1 + ")");
    }
    else if (display.value === "" || display.value === undefined) {
        clear();
    }
    else {
        try {
            var x = eval(display.value);
            display.value = eval(x);
        }
        catch (_a) {
            display.value = "Syntax error!";
        }
    }
}
function clear() {
    display.value = "";
}
function backspace() {
    display.value = display.value.substring(0, display.value.length - 1);
}
function multiply() {
    display.value = display.value + "*";
}
function divide() {
    display.value = display.value + "/";
}
function plusMinus() {
    if (display.value.charAt(0) === "-") {
        display.value = display.value.slice(1);
    }
    else {
        display.value = "-" + display.value;
    }
}
function factorial() {
    var fact = 1;
    var value = Number(display.value);
    for (var i = 1; i <= value; i++) {
        fact = fact * i;
        display.value = String(fact);
    }
}
function pi() {
    display.value = String(Number(display.value) * Math.PI);
}
function square() {
    display.value = String(Math.pow(Number(display.value), 2));
}
function cube() {
    display.value = String(Math.pow(Number(display.value), 3));
}
function squareRoot() {
    display.value = String(Math.sqrt(Number(display.value)));
}
function cuberoot() {
    display.value = String(Math.cbrt(Number(display.value)));
}
function percent() {
    display.value = String(Number(display.value) / 100);
}
function sin() {
    display.value = String(Math.sin(Number(display.value)));
}
function cos() {
    display.value = String(Math.cos(Number(display.value)));
}
function tan() {
    display.value = String(Math.tan(Number(display.value)));
}
function log() {
    display.value = String(Math.LOG10E);
}
function ln() {
    display.value = String(Math.log(Number(display.value)));
}
function exponent() {
    display.value += "^";
}
function exp() {
    display.value = String(Math.exp(Number(display.value)));
}
function degtorad() {
    if ($(".degrees").text() == "DEG") {
        display.value = String((Math.PI * Number(display.value)) / 180);
        $(".degrees").text("RAD");
    }
    else {
        display.value = String((180 * Number(display.value)) / Math.PI);
        $(".degrees").text("DEG");
    }
}
function power() {
    display.value = String(Math.pow(2, Number(display.value)));
}
function power10() {
    display.value = String(Math.pow(10, Number(display.value)));
}
function eulersNum() {
    if (display.value) {
        display.value = String(Math.E * Number(display.value));
    }
    else {
        display.value = String(Math.E);
    }
}
function upon() {
    display.value = (1 / Number(display.value)).toFixed(2);
}
function absolute() {
    display.value = String(Math.abs(Number(display.value)));
}
function mod() {
    display.value = display.value + "%";
}
function ceil() {
    display.value = String(Math.ceil(Number(display.value)));
}
function floor() {
    display.value = String(Math.floor(Number(display.value)));
}
function random() {
    display.value = String(Math.random());
}
function exponential() {
    var num = parseFloat(display.value);
    display.value = num.toExponential();
}
var memory = [];
function mplus() {
    if (display.value != "") {
        $(".memoryplus").css("display", "block");
        $(".memoryminus").css("display", "none");
        $(".memory").css("display", "none");
        memory.push(parseInt(display.value));
        display.value = memory.reduce(function (a, b) { return a + b; }, 0);
    }
}
function mminus() {
    if (display.value != "") {
        $(".memoryminus").css("display", "block");
        $(".memoryplus").css("display", "none");
        $(".memory").css("display", "none");
        memory.push(parseInt(display.value));
        display.value = memory.reduce(function (a, b) { return a - b; }, 0);
    }
}
function mrecall() {
    if (memory.length > 0) {
        $(".memory").css("display", "block");
        $(".memoryminus").css("display", "none");
        $(".memoryplus").css("display", "none");
        if (memory.length > 1) {
            display.value = memory[memory.length - 1];
        }
        else {
            display.value = memory[0];
        }
    }
}
function mclear() {
    memory = [];
    $(".memory").css("display", "none");
    $(".memoryminus").css("display", "none");
    $(".memoryplus").css("display", "none");
    display.value = "";
}
function msave() {
    if (display.value != "") {
        $(".memoryplus").css("display", "none");
        $(".memoryminus").css("display", "none");
        $(".memory").css("display", "block");
        memory.push(parseInt(display.value));
    }
}
var btnswap = function () {
    if ($(".sqaure").is(":visible")) {
        $('.sqaure').css('display', "none");
        $('.cube').css('display', 'block');
    }
    else {
        $('.sqaure').css('display', "block");
        $('.cube').css('display', 'none');
    }
};

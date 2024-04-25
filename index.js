let check = document.getElementById("check");
let buttons1 = document.getElementsByClassName("hide");
let buttons2 = document.getElementsByClassName("hidee");
let flagturn = false;
let flageq = false;
let eva = "";
let display = document.getElementById("operation");
check.onclick = function() {
    if (check.checked) {
        if (window.screen.width <= 420) {
            document.getElementById("calculator").style.width = "396px";
            document.getElementById("toogle").style.left = "336px";
            document.getElementById("m").style.transform = "translate(109px, -23px)";
            document.getElementById("l").style.transform = "translate(106px, 25px)";
            document.getElementById("on").style.transform = " translateX(-17px)";
        } else {
            document.getElementById("calculator").style.width = "665px";
            document.getElementById("toogle").style.left = "560px";
            document.getElementById("m").style.transform = "translate(205px,-27px)";
            document.getElementById("l").style.transform = "translate(205px,27px)";
            document.getElementById("on").style.transform = " translateX(1px)";
        }
        document.getElementById("l").style.color = "white";
        document.getElementById("m").style.color = "orangered";
        for (let i = 0; i < buttons1.length; i++)
            buttons1[i].style.opacity = "1";
        for (let i = 0; i < buttons2.length; i++)
            buttons2[i].style.opacity = "1";
    } else {
        if (window.screen.width <= 420) {
            document.getElementById("calculator").style.width = "286px";
            document.getElementById("toogle").style.left = "226px";
            document.getElementById("l").style.transform = "translate(0px,0px)"
            document.getElementById("m").style.transform = "translate(0px,0px)"

        } else {
            document.getElementById("calculator").style.width = "462px"
            document.getElementById("toogle").style.left = "356px";
            document.getElementById("l").style.transform = "translate(0px,0px)"
            document.getElementById("m").style.transform = "translate(0px,0px)"

        }
        document.getElementById("m").style.color = "white";
        document.getElementById("l").style.color = "orangered";
        for (let i = 0; i < buttons1.length; i++)
            buttons1[i].style.opacity = "0";
        document.getElementById("on").style.transform = " translateX(0px)"
        for (let i = 0; i < buttons2.length; i++)
            buttons2[i].style.opacity = "0";
    }
}
document.getElementById("on").onclick = function() {
    flagturn = !flagturn;
    if (flagturn) {
        document.getElementById("on").style.background = "#ff0000";
        document.getElementById("on").textContent = "OFF";
        document.getElementById("screen").style.background = "#119f11";
    } else {
        display.textContent = "";
        document.getElementById("result").textContent = "";
        eva = "";
        document.getElementById("on").style.background = "#00ff00";
        document.getElementById("on").textContent = "ON"
        document.getElementById("screen").style.background = "green";
    }

}
document.getElementById("one").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += 1;
        eva += 1;
    }
};

document.getElementById("two").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += 2;
        eva += 2;
    }
};

document.getElementById("three").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += 3;
        eva += 3;
    }
};

document.getElementById("four").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += 4;
        eva += 4;
    }
};
document.getElementById("five").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += 5;
        eva += 5;
    }
};
document.getElementById("sex").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += 6;
        eva += 6;
    }
};
document.getElementById("siven").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += 7;
        eva += 7;
    }
};
document.getElementById("eight").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += 8;
        eva += 8;
    }
};
document.getElementById("nine").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += 9;
        eva += 9
    }
};
document.getElementById("ze").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += 0;
        eva += 0;
    }
};
document.getElementById("plus").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += "+";
        eva += "+";
    }
};
document.getElementById("sub").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += "-";
        eva += "-";
    }
};
document.getElementById("divi").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += "/";
        eva += "/";
    }
};
document.getElementById("mult").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += "x";
        eva += "*";
    }
};
document.getElementById("eq").onclick = function() {
    if (flagturn) {
        if (eva != "")
            document.getElementById("result").textContent = eval(eva);
        flageq = true;
    }
};
document.getElementById("clear").onclick = function() {
    if (flagturn) {
        clearfun();
    }
};
document.getElementById("po").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += ".";
        eva += ".";
    }
};
document.getElementById("sqrt").onclick = function() {
    let d = display.textContent;
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        if (isnumber(d[d.length - 1])) {
            display.textContent += "√(";
            eva += "*Math.sqrt(";
        } else {
            display.textContent += "√(";
            eva += "Math.sqrt(";
        }
    }
};
document.getElementById("bracr").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += ")"
        eva += ")"
    }
};
document.getElementById("bracl").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += "(";
        eva += "(";
    }
};
document.getElementById("square").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += "^2";
        eva += "**2";
    }
};
document.getElementById("tan").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        let d = display.textContent;
        if (isnumber(d[d.length - 1])) {
            display.textContent += "Tan(";
            eva += "*TAN(";
        } else {
            display.textContent += "Tan(";
            eva += "TAN(";
        }

    }
}
document.getElementById("cos").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        let d = display.textContent;
        if (isnumber(d[d.length - 1])) {
            display.textContent += "Cos(";
            eva += "*COS(";
        } else {
            display.textContent += "Cos(";
            eva += "COS(";
        }
    }
}
document.getElementById("sin").onclick = function() {

    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        let d = display.textContent;
        if (isnumber(d[d.length - 1])) {
            display.textContent += "Sin(";
            eva += "*SIN(";
        } else {
            display.textContent += "Sin(";
            eva += "SIN(";
        }
    }
}
document.getElementById("log").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        let d = display.textContent;
        if (isnumber(d[d.length - 1])) {
            display.textContent += "Log("
            eva += "*Math.log10("
        } else {
            display.textContent += "Log("
            eva += "Math.log10("
        }
    }
}
document.getElementById("ln").onclick = function() {
    let d = display.textContent;
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        if (isnumber(d[d.length - 1])) {
            display.textContent += "Ln("
            eva += "*Math.log("
        } else {
            display.textContent += "Ln("
            eva += "Math.log("
        }
    }
}

document.getElementById("pow").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += "^";
        eva += "**"
    }
}
document.getElementById("fac").onclick = function() {
    if (flageq) {
        display.textContent = "";
        eva = "";
        flageq = false;
    }
    if (flagturn) {
        display.textContent += "!";
        if (eva[eva.length - 1] == ")") {
            console.log("eva=>" + eva)
            let ind = tst(eva);
            let ex = eva.slice(ind);
            let len = eva.length - 1;
            if (ind != 0) {
                eva = eva.slice(0, ind - len - 1);
            } else {
                eva = ""
            }
            eva += `${facto(ex)}`
            console.log("ind=>" + ind);
            console.log("ex=>" + ex);
            console.log("eva=>" + eva)
        } else {
            console.log("eva=>" + eva)
            let ind = lastindexofop(eva);
            let ex;
            if (ind == -1) {
                ex = eva.slice(0)
            } else {
                ex = eva.slice(ind + 1)
            }
            let len = eva.length - 1;
            if (ind != -1)
                eva = eva.slice(0, ind - len);
            else
                eva = "";
            eva += `${facto(ex)}`;
            console.log("ind=>" + ind);
            console.log("ex=>" + ex);
            console.log("eva=>" + eva)
        }
    }
}
document.getElementById("delete").onclick = function() {
    let ope = display.textContent;
    if (flagturn) {
        if ((ope[ope.length - 1] == "(" && ope[ope.length - 2] == "n" && ope[ope.length - 3] == "i" && ope[ope.length - 4] == "S" && eva[eva.length - 5] == "*") ||
            (ope[ope.length - 1] == "(" && ope[ope.length - 2] == "s" && ope[ope.length - 3] == "o" && ope[ope.length - 4] == "C" && eva[eva.length - 5] == "*") ||
            (ope[ope.length - 1] == "(" && ope[ope.length - 2] == "n" && ope[ope.length - 3] == "a" && ope[ope.length - 4] == "T" && eva[eva.length - 5] == "*")) {
            ope = ope.slice(0, -3);
            eva = eva.slice(0, -4);
        }
        if ((ope[ope.length - 1] == "(" && ope[ope.length - 2] == "n" && ope[ope.length - 3] == "i" && ope[ope.length - 4] == "S") ||
            (ope[ope.length - 1] == "(" && ope[ope.length - 2] == "s" && ope[ope.length - 3] == "o" && ope[ope.length - 4] == "C") ||
            (ope[ope.length - 1] == "(" && ope[ope.length - 2] == "n" && ope[ope.length - 3] == "a" && ope[ope.length - 4] == "T")) {
            ope = ope.slice(0, -4);
            eva = eva.slice(0, -4);
        } else if ((ope[ope.length - 1] == "(" && ope[ope.length - 2] == "g" && ope[ope.length - 3] == "o" && ope[ope.length - 4] == "L" && eva[eva.length - 12] == "*")) {
            ope = ope.slice(0, -4);
            eva = eva.slice(0, -12);
        } else if ((ope[ope.length - 1] == "(" && ope[ope.length - 2] == "g" && ope[ope.length - 3] == "o" && ope[ope.length - 4] == "L")) {
            ope = ope.slice(0, -4);
            eva = eva.slice(0, -11);
        } else if ((ope[ope.length - 1] == "(" && ope[ope.length - 2] == "n" && ope[ope.length - 3] == "L" && eva[eva.length - 10] == "*")) {
            ope = ope.slice(0, -3);
            eva = eva.slice(0, -10);
        } else if ((ope[ope.length - 1] == "(" && ope[ope.length - 2] == "n" && ope[ope.length - 3] == "L")) {
            ope = ope.slice(0, -3);
            eva = eva.slice(0, -9);
        } else if (ope[ope.length - 1] == "^") {
            ope = ope.slice(0, -1);
            eva = eva.slice(0, -2);
        } else if (ope[ope.length - 1] == "(" && ope[ope.length - 2] == "√" && eva[eva.length - 11] == "*") {
            ope = ope.slice(0, -2);
            eva = eva.slice(0, -11);
        } else if (ope[ope.length - 1] == "(" && ope[ope.length - 2] == "√" && eva[eva.length - 11] != "*") {
            ope = ope.slice(0, -2);
            eva = eva.slice(0, -10);
        } else {
            ope = ope.slice(0, -1);
            eva = eva.slice(0, -1);
        }
        flageq = false;
    }
    display.textContent = ope;
}


function clearfun() {
    display.textContent = "";
    eva = "";
    document.getElementById("result").textContent = "";
};

function isnumber(number) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    for (let i = 0; i < numbers.length; i++) {
        if (number === numbers[i]) return true;
    }
    return false;
};

function facto(input) {
    input = eval(input);
    let fact = 1;
    for (let i = 2; i <= input; i++) {
        fact *= i;
    }
    return fact;
}

function lastindexofop(input) {
    let indexes = []
    indexes[0] = input.lastIndexOf("/");
    indexes[1] = input.lastIndexOf("+");
    indexes[2] = input.lastIndexOf("-");
    indexes[3] = input.lastIndexOf("*");
    return Math.max(...indexes)
}

function lastindexofbrac(input) {
    return input.lastIndexOf("(");
}

function SIN(angle) {
    angle = (angle * Math.PI) / 180;
    return Number(Math.sin(angle).toFixed(2));
}

function COS(angle) {
    angle = (angle * Math.PI) / 180;
    return Number(Math.cos(angle).toFixed(2));
}

function TAN(angle) {
    angle = (angle * Math.PI) / 180;
    return Number(Math.tan(angle).toFixed(2));
}

function tst(st) {
    const stack = [];
    for (let i = st.length - 1; i >= 0; i--) {
        if (st[i] == ")") {
            stack.push(')');
        } else if (st[i] == "(") {
            if (stack.length == 0) {
                return -1;
            } else {
                stack.pop();
            }
            if (stack.length == 0)
                return i;
        }
    }
}
console.log(window.screen.width);
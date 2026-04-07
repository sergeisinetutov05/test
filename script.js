let expression = "";

function addNum(num) {
    expression += num;
    update();
}

function setOp(op) {
    if (expression === "") return;

    let last = expression.slice(-1);

    // не дає ставити 2 операції підряд
    if (['+', '-', '*', '/'].includes(last)) {
        expression = expression.slice(0, -1);
    }

    expression += op;
    update();
}

function calc() {
    try {
        let result = eval(expression);

        document.getElementById("history").innerText = expression + " =";
        document.getElementById("result").innerText = result;

        expression = result.toString();
    } catch {
        document.getElementById("result").innerText = "Error";
    }
}

function clearAll() {
    expression = "";
    document.getElementById("history").innerText = "";
    update();
}

function backspace() {
    expression = expression.slice(0, -1);
    update();
}

function update() {
    document.getElementById("history").innerText = expression;
    document.getElementById("result").innerText = "";
}

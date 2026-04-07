let expression = "";

// цифри
function addNum(num) {
    expression += num;
    update();
}

// операції
function addOp(op) {
    if (expression === "") return;

    let last = expression.slice(-1);

    // якщо вже є оператор — замінюємо
    if (['+', '-', '*', '/'].includes(last)) {
        expression = expression.slice(0, -1);
    }

    expression += op;
    update();
}

// =
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

// очистка
function clearAll() {
    expression = "";
    document.getElementById("history").innerText = "";
    document.getElementById("result").innerText = "0";
}

// видалити символ
function backspace() {
    expression = expression.slice(0, -1);
    update();
}

// оновлення екрану
function update() {
    document.getElementById("history").innerText = expression;

    // 🔥 ГОЛОВНИЙ ФІКС
    if (expression === "") {
        document.getElementById("result").innerText = "0";
    } else {
        document.getElementById("result").innerText = expression;
    }
}

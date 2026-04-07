let expression = "";

// цифри
function addNum(num) {
    expression += num;
    update();
}
function setOp(op) {
    if (current === "") return;

    operator = op;
    prev = current;
    shouldReset = true;

    update();
}
function addNum(num) {
    if (shouldReset) {
        current = "";
        shouldReset = false;
    }

    current += num;
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
    const result = document.getElementById("result");
    const history = document.getElementById("history");

    // показуємо поточне число
    result.innerText = current || "0";

    // 🔥 показуємо попереднє число + оператор
    if (prev && operator) {
        history.innerText = prev + " " + operator;
    } else {
        history.innerText = "";
    }
}

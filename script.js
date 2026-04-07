<script>
let current = "";
let prev = "";
let operator = "";
let shouldReset = false;

// ➕ ДОДАТИ ЦИФРУ
function addNum(num) {
    if (shouldReset) {
        current = "";
        shouldReset = false;
    }

    // не даємо писати дві крапки
    if (num === '.' && current.includes('.')) return;

    current += num;
    update();
}

// ➕ ОПЕРАЦІЯ
function setOp(op) {
    if (current === "" && prev === "") return;

    // якщо вже є вираз → рахуємо одразу
    if (prev !== "" && current !== "") {
        calc();
    }

    operator = op;
    prev = current || prev;
    shouldReset = true;

    update();
}

// ➕ РАХУВАННЯ
function calc() {
    if (prev === "" || current === "") return;

    let a = parseFloat(prev);
    let b = parseFloat(current);
    let res = 0;

    switch(operator) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/': res = b !== 0 ? a / b : "Error"; break;
    }

    document.getElementById("history").innerText =
        prev + " " + operator + " " + current + " =";

    current = res.toString();
    prev = "";
    operator = "";
    shouldReset = true;

    update();
}

// ➕ ОЧИСТКА
function clearAll() {
    current = "";
    prev = "";
    operator = "";
    shouldReset = false;

    document.getElementById("history").innerText = "";
    update();
}

// ➕ BACKSPACE
function backspace() {
    if (shouldReset) return;

    current = current.slice(0, -1);
    update();
}

// ➕ ОНОВЛЕННЯ ЕКРАНУ
function update() {
    const result = document.getElementById("result");
    const history = document.getElementById("history");

    result.innerText = current || "0";

    if (prev && operator) {
        history.innerText = prev + " " + operator;
    }
}

// ⌨️ КЛАВІАТУРА
document.addEventListener("keydown", function(e) {

    if (e.key >= '0' && e.key <= '9') addNum(e.key);
    if (e.key === '.') addNum('.');

    if (['+', '-', '*', '/'].includes(e.key)) {
        setOp(e.key);
    }

    if (e.key === 'Enter') calc();
    if (e.key === 'Backspace') backspace();

    if (e.key === 'Escape' || e.key === 'Delete') clearAll();
});
</script>

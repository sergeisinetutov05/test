function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        alert("Помилка вводу");
    }
}
/* ФОКУС НА СТОРІНКУ */
document.body.setAttribute("tabindex", "0");
document.body.focus();

/* КЛАВІАТУРА */
document.addEventListener("keydown", function(e) {

    // Вимикаємо стандартну поведінку
    if (["Enter", "Backspace", "Delete"].includes(e.key)) {
        e.preventDefault();
    }

    // Цифри (верхній ряд)
    if (e.key >= '0' && e.key <= '9') {
        addNum(e.key);
    }

    // Numpad (цифри справа)
    if (e.code.startsWith("Numpad")) {
        let num = e.code.replace("Numpad", "");

        if (!isNaN(num)) addNum(num);
        if (num === "Decimal") addNum('.');
    }

    // Крапка
    if (e.key === '.' || e.code === "NumpadDecimal") {
        addNum('.');
    }

    // Операції
    if (['+', '-', '*', '/'].includes(e.key)) {
        setOp(e.key);
    }

    if (e.code === "NumpadAdd") setOp('+');
    if (e.code === "NumpadSubtract") setOp('-');
    if (e.code === "NumpadMultiply") setOp('*');
    if (e.code === "NumpadDivide") setOp('/');

    // Рівно
    if (e.key === 'Enter' || e.code === "NumpadEnter") {
        calc();
    }

    // Backspace
    if (e.key === 'Backspace') {
        backspace();
    }

    // Очистка
    if (e.key === 'Escape' || e.key === 'Delete') {
        clearAll();
    }
});

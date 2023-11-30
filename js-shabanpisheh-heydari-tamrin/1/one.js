function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'عملگر نامعتبر';
    }
}

// مثال:
console.log(calculate(5, 3, '+')); // خروجی: 8
console.log(calculate(10, 2, '*')); // خروجی: 20
console.log(calculate(8, 4, '/')); // خروجی: 2
console.log(calculate(6, 2, '%')); // خروجی: عملگر نامعتبر

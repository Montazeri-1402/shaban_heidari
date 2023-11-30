function executeFunctionOnObject(obj, functionName) {
    if (typeof obj[functionName] === 'function') {
        // تابع موجود است
        return obj[functionName]();
    } else {
        return 'تابع یافت نشد';
    }
}

// مثال:
const result1 = executeFunctionOnObject(sampleObject, 'calculate');
console.log(result1); // خروجی: 'تابع یافت نشد'

const result2 = executeFunctionOnObject(sampleObject, 'findNestedKey');
console.log(result2); // خروجی: 'تابع یافت نشد'

const result3 = executeFunctionOnObject(sampleObject, 'getAge');
console.log(result3); // خروجی: undefined (چون تابع getAge وجود ندارد)

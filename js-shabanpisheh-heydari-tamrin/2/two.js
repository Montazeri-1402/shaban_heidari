function findNestedKey(obj, key) {
    if (key in obj) {
        return obj[key];
    }

    for (let k in obj) {
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            const result = findNestedKey(obj[k], key);
            if (result !== undefined) {
                return result;
            }
        }
    }

    return undefined; // اگر کلید پیدا نشد
}

// مثال:
const sampleObject = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'coding']
};

console.log(findNestedKey(sampleObject, 'city')); // خروجی: 'New York'
console.log(findNestedKey(sampleObject, 'hobbies')); // خروجی: ['reading', 'coding']
console.log(findNestedKey(sampleObject, 'country')); // خروجی: undefined

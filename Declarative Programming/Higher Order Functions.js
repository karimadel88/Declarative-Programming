const test1 = (x) => x = x / 2;
const test2 = (x) => x = x / 4 + 1;

// Function take value as any type and return data with same type
// Ex: test2(4) // 4 integer ==> 4/4 + 1 = 2(integer)  * test1(2) == test1(test2(4)) == 1
console.log(test2(test1(5)))    // 1.625
console.log(test1(test2(5)))    // 1.125

// I consider list of functions with integer type equivlante list of deligate in c#
const func = [
    test1,
    test2
]
// Then can get value with next form
console.log(func[0](5))         // 2.5
console.log(func[1](5))         // 2.25

// build test3 with 2 parameters first as function and second as value
// test3 will return function of value + value
// and we called that Heigher order function
const test3 = (func , value) => func(value) + value
console.log(test3(test1,5));    // 7.5
console.log(test3(test2,5));    // 7.25
const array = [2, 4, 6, 8, 10]
const power = []
array.forEach((number, index) => {
    console.log(number, index);
    power.push(number * number)
})

console.log(array);
console.log(power);
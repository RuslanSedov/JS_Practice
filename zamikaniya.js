// //?Замыкание - это функция внутри функции
// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }
// function createIncrementer(n) {
//     return function(num) {
//         console.log(n+num)
//     }
// }
// let addOne = createIncrementer(1)
// console.log(addOne(9))

// let addTen = createIncrementer(10)
// console.log(addTen(9))

// function URLGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }
// const comURL = URLGenerator("com")
// console.log(comURL("google"))
// console.log(comURL("netflix"))
// const ruURL = URLGenerator("ru")
// console.log(ruURL("yandex"))

/**
 * Написать свою функцию bind
 */
const person1 = {name: "Ruslan", age: 18, job: "frontend"}
const person2 = {name: "Misha", age: 22, job: "backend"}
function logPerson(job) {
    console.log(`Person: ${this.name}, ${this.age}, ${job}`)
}

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

bind(person1, logPerson)("frontend")


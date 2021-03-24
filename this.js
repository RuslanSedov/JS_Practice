const person = {
    name: "Ruslan",
    age: 18,
    // sayHello: Hello,
    // sayHelloWindow: Hello.bind(document),
    info: function(job, number) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name};`)
        console.log(`Age is ${this.age};`)
        console.log(`Job is ${job};`)
        console.log(`Number is ${number};`)
        console.groupEnd("")        
    }
}
// Object.prototype.info = person.info
const yuli = {
    name: "Yuli",
    age: 18,
    infoPerson: person.info.bind(person),
    info: person.info,
    infoFunc: () => person.info.call(yuli, "fro", "87987987"),
    infoApply: () => person.info.apply(yuli, ["data", "3253542"])
}
// person.info.call(yuli)

//?this - ключевое слово, указывающее на тот объект, в контексте которого оно было вызвано (то что стоит слева при вызове функции)
//?оно динамичное


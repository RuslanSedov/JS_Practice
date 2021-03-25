const person = Object.create({
    calculateAge() {
        console.log("Age is: ", new Date().getFullYear() - this.birthYear)
    }
}, {
    name: {
        value: 'Ruslan',
        enumerable: true, //видимость в for
        writable: true, //можно изменять значение
        configurable: true //можно удалять ключ из объекта
    },
    birthYear: {
        value: 2002,
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'black'
            console.log('set age', value)
        }
    }
})



for(let key in person) {
    if(person.hasOwnProperty(key)) {
        console.log("key", key, person[key])
    }
}
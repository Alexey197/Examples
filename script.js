function hello() {
    console.log('Hello!', this)
}

const person2 = new Object({
    name: 'Mama',
    age: 68,
    job: 'junior',
})

const person = new Object({
    name: 'Alex',
    age: 43,
    job: 'junior',
    logInfo: function (phone, sex) {
        console.group(this.name, 'info')
        console.log(`name is ${this.name}`)
        console.log(`age is ${this.age}`)
        console.log(`phone is ${phone}`)
        console.log(`sex is ${sex}`)
        console.groupEnd()
    }
})

const fn = person.logInfo.bind(person2, 'female', '89112499230')
fn()







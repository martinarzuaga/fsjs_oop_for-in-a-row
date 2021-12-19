class Usuario {
    constructor(name, lastName, email) {
        this.name = name
        this.email = email
        this.lastName = lastName
    }

    cheer() {
        console.log(`Hello students from ${this.name}`)
    }
}

const martin = new Usuario(
    'Martin',
    'Arzuaga',
    'martin@gmail.com',
)

console.log(martin.cheer())

class Pet {
    constructor(animal, age, breed, sound) {
        this.animal = animal
        this.age = age
        this.breed = breed
        this.sound = sound
    }

    get activity() {
        const today = new Date()
        const hours = today.getHours()

        if (hours > 8 && hours < 20) {
            return 'Is playing!'
        } else if (hours > 20 && hours < 23) {
            return 'Is eating'
        } else {
            return 'Is sleeping'
        }
    }

    get owner() {
        return this._owner
    }

    set owner(owner) {
        this._owner = owner
        console.log(`The owner was setted and is: ${owner}`)
    }

    speak() {
        console.log(this.sound)
    }
}

const lara = new Pet(
    'Dog',
    22,
    'Labrador',
    'Woof!'
)

console.log(lara.activity)

lara.owner = 'Martin'
console.log(lara.owner)

// Exercise to practice Setters on TreeHouse
class Student {
    constructor(gpa, credits) {
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }

    get level() {
        if (this.credits > 90) {
            return 'Senior';
        } else if (this.credits > 60) {
            return 'Junior';
        } else if (this.credits > 30) {
            return 'Sophomore';
        } else {
            return 'Freshman';
        }
    }

    set major(major) {
        this._major = major

        if (this.level === 'Senior' || this.level === 'Junior') {
            this._major = major
        } else {
            this._major = 'None'
        }

    }

}

let student = new Student(3.9, 60);
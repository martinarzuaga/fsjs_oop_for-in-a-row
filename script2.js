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

class Owner {
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    set phone(phone) {
        const phoneNormalized = phone.replace(/[^0-9]/g,'')
        this._phone = phoneNormalized
    }

    get phone() {
        return this._phone
    }
}

const lara = new Pet(
    'Dog',
    22,
    'Labrador',
    'Woof!'
)

lara.owner = new Owner('Martin', '123 Main Street')
lara.owner.phone = '(444) 444-4444'
console.log(lara.owner)
console.log(lara.owner.phone)
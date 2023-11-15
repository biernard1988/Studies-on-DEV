//JS Object - Literal

/* const student1 = {
    firstName: 'Han',
    lastName: 'Solo',
}

const student2 = {
    firstName: 'Leia',
    lastName: 'Organa',
}

console.log(student1);
console.log(student2); */

//JS OOP - The Cat

class cat {
    constructor(tiredness, hunger, loneliness, happiness) {

        this.tiredness = tiredness;
        this.hunger = hunger;
        this.loneliness = loneliness;
        this.happiness = happiness;
    }

    feed () {
        this.hunger -= 2;
        this.tiredness += 3
    }

    sleep () {
        this.hunger += 5;
        this.tiredness -= 7
        this.loneliness += 2
        this.happiness += 4
    }
    pet () {
        this.loneliness -= 1
        this.happiness += 2
    }

    status () {
        console.log(`The cat is: ${this.hunger} > 5 ? "hungry": "not hungry", ${this.tiredness} > 5 ? "tired": "not tired", ${this.loneliness} > 5 ? "lonely": "not lonely", ${this.happiness} > 5 ? "happy": "not happy")`);
    }
}

const catOne = new cat(5, 5, 5, 5);

/* const catTwo = new cat(1, 1, 1, 1); */

catOne.feed();
catOne.sleep();
catOne.feed();
catOne.pet();

catOne.status();



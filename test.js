class Robots {
  constructor(botName, botColor, botMemory, botProcessor) {
    this.name = botName;
    this.color = botColor;
    this.memory = botMemory;
    this.processor = botProcessor;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  compute() {
    console.log(
      `I am computing data with ${this.memory} of RAM and an ${this.processor} processor.`
    );
  }
}

const Robbie = new Robots("Robbie", "Red", "4GB", "Intel");
Robbie.sayHi();
Robbie.compute();

class Cyborg extends Robots {
  constructor(borgName, botColor, botMemory, botProcessor, botWeapon) {
    super(borgName, botColor, botMemory, botProcessor);
    this.weapon = botWeapon;
    this.borgName = borgName;
  }
  sayHi() {
    console.log(`Hi, I am ${this.borgName}`);
  }
  attack() {
    console.log(
      `${this.borgName} is attacking with it's ${this.weapon} and destroys ${Robbie.name}!`
    );
  }
}

const Cybakilla = new Cyborg("CybaKilla", "Blue", "8GB", "AMD", "Laser");
Cybakilla.sayHi();
Cybakilla.compute();
Cybakilla.attack();

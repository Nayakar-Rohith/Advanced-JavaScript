function Avenger(name, power) {
    this.name = name;
    this.power = power;
    this.attack = function() {
        return `${this.name} attacks with ${this.power}`;
    }
}
// Avenger.prototype.attack = function() {
//     return `${this.name} attacks with ${this.power}`;
// }

// Usage    
const batman = new Avenger('Batman', 'Gadgets');
console.log(batman.attack()); // Batman attacks with Gadgets
const superman = new Avenger('Superman', 'Super Strength');
console.log(superman.attack()); // Superman attacks with Super Strength
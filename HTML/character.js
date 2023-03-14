function Character(name, hp, size, atk, speed) {
    this.charName = name;
    this.charHp = hp;
    this.charSize = size;
    this.charAtk = atk;
    this.charSpeed = speed;
    this.moveCharacter = function moveCharacter() {
        let move = this.charSpeed * dice.roll()
    }
    // this.specialTrait = specialTrait()
}

let klee = new Character("Klee", 4, 3, 4, 2);
let jean = new Character("Jean", 5, 5, 3, 3);
document.getElementById("klee").value = klee;
document.getElementById("jean").value = jean;
console.log(klee)
console.log(jean)

function rolling() {
    let dice = {
        sides: 6,
        roll: function () {
            let randomNumber = Math.floor(Math.random() * this.sides) + 1;
            return randomNumber;
        }
    }
}
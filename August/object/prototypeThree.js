
function Players (name, age, hight, width) {
    this.name = name;
    this.age = age;
    this.hight = hight;
    this.width = width;
}

Players.prototype.info = function () {
    return `
    Name: ${this.name},
    Age: ${this.age},
    Hight: ${this.hight},
    Width: ${this.width}`;
}

const Player = new Players('Sakib', 34, 5.6, 63);

console.log(Player.info());










class Card {
    constructor(id, name, value, img) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.status = false;
        this.img = img;
        this.default = "cardback.jpg";

    }

    draw() {
        let img = `<img src="card_deck/${this.img}" onclick="clickCard(${this.id})">`;
        return img;
    }

    hidden() {
        let img = `<img src="card_deck/${this.default}" onclick="clickCard(${this.id})">`;
        return img;
    }

}

cards = [];


function clickCard(id) {
    for (let i = 0; i < desk.cards.length; i++) {
        if (desk.cards[i].id === id) {
            desk.cards[i].status = true;
        }
    }
    desk.show();
}

class Desk {
    constructor() {
        this.cards = [];
        this.dra = []
    }

    create() {
        let arr = ["S", "C", "H", "D"];
        for (let i = 1; i < 10; i++) {
            for (let j = 0; j < arr.length; j++) {
                let name = i + arr[j];
                let id = j * 10 + i;
                let value = i
                let img = name + ".jpg";
                let card = new Card(id, name, value, img)
                this.cards.push(card);
            }
        }
    }

    show() {
        let desk = "";
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].status) {
                desk += this.cards[i].draw();
            } else {
                desk += this.cards[i].hidden();
            }
        }
        document.getElementById("desk").innerHTML = desk;
    }
}

let desk = new Desk()
desk.create();
desk.show()

class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.money = 1000;
    }

    getScore() {
        let sum = 0;
        for (let i = 0; i < this.cards.length; i++) {
            sum += this.cards[i].value;
        }
        sum = sum % 10 == 0 ? 10 : sum % 10;
        console.log(sum % 10)
        return sum;
    }

    addCards() {
        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * desk.cards.length);
            this.cards.push(desk.cards[num]);
            desk.cards.slice(num, 1);
        }
    }

    draft(desk) {
        let aaa = "";
        for (let i = 0; i < 3; i++) {
            aaa += this.cards[i].draw()
        }
        document.getElementById(desk).innerHTML = aaa;
    }

    back(desk) {
        let aaa = "";
        for (let i = 0; i < 3; i++) {
            aaa += this.cards[i].hidden()
        }
        document.getElementById(desk).innerHTML = aaa;
    }
}

let player1 = new Player("Dung");
let player2 = new Player("Dung");

function gameBoard() {
    player1.addCards();
    player2.addCards();
    player1.draft("desk1")
    player2.draft("desk2")
}



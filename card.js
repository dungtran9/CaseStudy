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
        let img = `<img src="card_deck/${this.img}" >`;
        return img;
    }


}

cards = [];


class Desk {
    constructor() {
        this.cards = [];
    }

    create() {
        this.cards = [];
        let arr = ["S", "C", "H", "D"];
        for (let i = 1; i < 10; i++) {
            for (let j = 0; j < arr.length; j++) {
                let name = i + arr[j];
                let id = j * 10 + i;
                let value = i;
                let img = name + ".jpg";
                let card = new Card(id, name, value, img)
                this.cards.push(card);
            }
        }
    }

    showWin(player1, player2, a, b) {
        player1.money = player1.money + 100;
        player2.money = player2.money - 100;
        document.getElementById(a).innerHTML = player1.name + ": Win " + player1.money + " $"
        document.getElementById(b).innerHTML = player2.name + ":  " + player2.money + " $"
        if (player1.money == 2000 || player2.money == 2000) {
            alert(player1.name + " win ");
            player1.money = 1000;
            player2.money = 1000;

        }

    }

    getWiner(player1, player2) {
        if (player1.getScore() > player2.getScore()) {
            this.showWin(player1, player2, "player1", "player2")
        } else if (player1.getScore() < player2.getScore()) {
            this.showWin(player2, player1, "player2", "player1")
        } else if (player1.getScore() == player2.getScore()) {
            if (player1.getMax() > player2.getMax()) {
                this.showWin(player1, player2, "player1", "player2")
            } else if (player2.getMax() > player1.getMax()) {
                this.showWin(player2, player1, "player2", "player1")
            }
        }
    }
}

let desk = new Desk()
desk.create();

class Player {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.money = 1000;
        this.max = [];

    }

    getScore() {
        let sum = 0;
        for (let i = 0; i < this.cards.length; i++) {
            sum += this.cards[i].value;
        }
        sum = sum % 10 == 0 ? 10 : sum % 10;
        return sum;
    }

    addCards() {
        for (let i = 0; i < 3; i++) {
            let num = Math.floor(Math.random() * desk.cards.length);
            this.cards.push(desk.cards[num]);
            this.max.push(desk.cards[num].id);
            desk.cards.splice(num, 1);

        }

    }

    draft(desk) {
        let aaa = "";
        for (let i = 0; i < 3; i++) {
            aaa += this.cards[i].draw()
        }
        document.getElementById(desk).innerHTML = aaa;
    }

    reGame() {
        this.cards = []
        this.max = []
    }

    getMax() {
        return Math.max.apply(Math, this.max);
    }
}

let player1 = new Player("Player1");
let player2 = new Player("Player2");

function gameBoard() {
    desk.create();
    player1.reGame();
    player2.reGame();
    player1.addCards();
    player2.addCards();
    player1.draft("desk1")
    player2.draft("desk2")
    desk.getWiner(player1, player2)
}



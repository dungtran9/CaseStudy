class Card {
    constructor(id, name, value, img) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.status = false;
        this.img = img;
        this.default = "cardback.jpg"
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

function createDesk() {
    let arr = ["C", "D", "H", "S"];
    for (let i = 1; i < 10; i++) {
        for (let j = 0; j < arr.length; j++) {
            let name = i + arr[j];
            let id = j * 10 + i;
            let value = i
            let img = name + ".jpg";
            let card = new Card(id, name, value, img)
            cards.push(card);
        }
    }
}

function showDesk() {
    let desk = "";
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].status) {
            desk += cards[i].draw();
        } else {
            desk += cards[i].hidden();
        }
    }
    document.getElementById("desk").innerHTML = desk;
}

function clickCard(id) {
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].id === id) {
            cards[i].status = true;
        }
    }
    showDesk();

}

createDesk();
showDesk()

function showShare(x, y, z, a, b, c) {
    let player1 = "";
    player1 = cards[x].draw() + cards[y].draw() + cards[z].draw()
    document.getElementById("player1").innerHTML = player1;
    let player2 = "";
    player2 = cards[a].draw() + cards[b].draw() + cards[c].draw()
    document.getElementById("player2").innerHTML = player2;

}

function shareCard() {
    let num = new Array();
    for (let i = 0; i < 6; i++) {
        let number1 = Math.floor(Math.random() * 35);
        if (i == 0) {
            num.push(number1);
        } else {
            checkIsset(num, number1);
        }
    }

    function checkIsset(num, number) {
        if (num.indexOf(number) === -1) {
            num.push(number);
            return number
        } else {
            let number2 = Math.floor(Math.random() * 35);
            checkIsset(num, number2);
        }
    }

    showShare(num[0], num[1], num[2], num[3], num[4], num[5])
    point1 = cards[num[0]].value + cards[num[1]].value + cards[num[2]].value;
    point2 = cards[num[3]].value + cards[num[4]].value + cards[num[5]].value
    setTimeout(checkWin, 1000)

    function checkWin() {
        if (point1 > point2) {
            document.getElementById("result").innerHTML = "Player1 win"
        } else {
            document.getElementById("result").innerHTML = "Player2 win"
        }
    }
}



    let cards = new Array();
    for (let i = 0; i < 9; i++) {
        cards[i] = i + 1;
    }
    for (let i = 9; i < 18; i++) {
        cards[i] = i - 8;
    }
    for (let i = 18; i < 27; i++) {
        cards[i] = i - 17;
    }
    for (let i = 27; i < 36; i++) {
        cards[i] = i - 26;
    }
    let card = new Array()

    for (let i = 0; i < 6; i++) {
        let number1 = Math.floor(Math.random() * 35);
        if (i == 0) {
            card.push(number1);
        } else {
            checkIsset(card, number1);
        }
    }

    function checkIsset(card, number) {
        if (card.indexOf(number) === -1) {
            card.push(number);
            return number;
        } else {
            let number2 = Math.floor(Math.random() * 35);
            checkIsset(card, number2);
        }
    }

    console.log(card);
    let player1 = [cards[card[0]], cards[card[1]], cards[card[2]]];
    let player2 = [cards[card[3]], cards[card[4]], cards[card[5]]];
    console.log(player1);
    console.log(player2);
        let sum1 = cards[card[0]] + cards[card[1]] + cards[card[2]];
        let point1 = (sum1) % 10;
        if (point1 == 0) {
            point1 = 10
        }
        let sum2 = cards[card[3]] + cards[card[4]] + cards[card[5]];
        let point2 = (sum2) % 10;
        if (point2 == 0) {
            point2 = 10
        }
        document.write("Player1 :" + cards[card[0]] + "," + cards[card[1]] + "," + cards[card[2]] + ", tong diem" + point1 + "<br>")
        document.write("Player2 :" + cards[card[3]] + "," + cards[card[4]] + "," + cards[card[5]] + ", tong diem" + point2 + "<br>")
    function checkWin() {
        if (point1 > point2) {
            document.write("Player1 win")
        } else if (point1 = point2) {
            document.write("Hoa`")
        } else {
            document.write("Player2 win")
        }
    }
    checkWin()


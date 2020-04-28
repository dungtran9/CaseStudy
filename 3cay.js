function Cards(name, value) {
    this.name = name;
    this.value = value;
}
let cards = new Array()
let diamonds = new Array();
for (let i = 0; i < 9; i++) {
    diamonds[i] = new Cards("D", i+1);
    cards.push(diamonds[i]);
}
let hearts = new Array();
for (let i=0; i<9; i++){
 hearts[i] =new Cards("H", i+1);
 cards.push(hearts[i]);
};
let clubs =new Array();
for (let i=0; i<9;i++){
 clubs[i] =new Cards("C", i+1);
 cards.push(clubs[i]);
};
let spades =new Array();
for (let i=0; i<9;i++){
 spades[i] =new Cards("S", i+1);
 cards.push(spades[i]);
};
let img1 = document.getElementById("cardback1")
let img2 = document.getElementById("cardback2")
let img3 = document.getElementById("cardback3")
let img4 = document.getElementById("cardback4")
let img5 = document.getElementById("cardback5")
let img6 = document.getElementById("cardback6")
function start() {
 function findNums(){
  let nums = new Array();
  for (let i=0;i<6;i++){
   let number1 = Math.floor(Math.random()*35);
   if( i==0 ){
    nums.push(number1);
   }
   else{
    checkIsset(nums,number1);
   }
  }
  function checkIsset(nums, number ){
   if (nums.indexOf(number) === -1){
    nums.push(number);
    return number
   }
   else{
    let number2 = Math.floor(Math.random()*35);
    checkIsset(nums,number2);
   }
  }
  return nums
 }
 let N=findNums();n
 img1.src = "card_deck/"+cards[N[0]].value+cards[N[0]].name+".jpg"
 img2.src = "card_deck/"+cards[N[1]].value+cards[N[1]].name+".jpg"
 img3.src = "card_deck/"+cards[N[2]].value+cards[N[2]].name+".jpg"
 img4.src = "card_deck/"+cards[N[3]].value+cards[N[3]].name+".jpg"
 img5.src = "card_deck/"+cards[N[4]].value+cards[N[4]].name+".jpg"
 img6.src = "card_deck/"+cards[N[5]].value+cards[N[5]].name+".jpg"
}
function reset() {
img1.src="card_deck/cardback.jpg"
img2.src="card_deck/cardback.jpg"
img3.src="card_deck/cardback.jpg"
img4.src="card_deck/cardback.jpg"
img5.src="card_deck/cardback.jpg"
img6.src="card_deck/cardback.jpg"
}
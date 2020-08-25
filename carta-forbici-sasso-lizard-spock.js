var choices = ['carta', 'forbici', 'sasso', 'lizard', 'spock'];
var player1 = choices[getRandomIntInclusive(0,4)];
var player2 = choices[getRandomIntInclusive(0,4)];

console.log('Il giocatore 1 ha scelto: ' + player1 + '\n' + 'Il giocatore 2 ha scelto: ' + player2);

//game(player1, player2);

function game(p1, p2) {
  var message, winner = 2;

 if (p1 === p2) {
    return 'Pareggio, entrambi i giocatori hanno scelto ' +p1; // pareggio
  }

 if (p1 === choices[0]) { // carta
   if (p2 === choices[2] || p2 === choices[4]) { // roccia or spock
     winner = 1;

   }
 }

 if (p1 === choices[1]) { // forbice
   if (p2 === choices[0] || p2 === choices[3]) { // carta or lizard
     winner = 1;

   }
 }

 if (p1 === choices[2]) { // roccia
   if (p2 === choices[3] || p2 === choices[1]) { // lizard or forbice
     winner = 1;

   }
 }

 if (p1 === choices[3]) { // lizard
   if (p2 === choices[4] || p2 === choices[0]) { // spock or carta
     winner = 1;

   }
 }

 if (p1 === choices[4]) { // spock
   if (p2 === choices[1] || p2 === choices[2]) { // carta or lizard
     winner = 1;

   }
 }

 message = `Il giocatore ${winner} ha vinto, `;
 if (winner === 1) {
   message += `${p1} batte ${p2}!`;
 } else {
   message += `${p2} batte ${p1}!`;
 }

 return message;

}


function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(game(player1, player2));

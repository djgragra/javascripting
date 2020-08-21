var time = 12560;

var hour = Math.round(time / 3600);
var minute = Math.round((time - (hour * 3600)) / 60);
var seconds = Math.round(time - ((minute * 60) + (hour * 3600)));

console.log(hour + ' ore ' + minute + ' minuti e ' + seconds + ' secondi');

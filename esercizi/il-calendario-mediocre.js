var dmonth = 31
var dweek = 4

var day0 = 'lun'; day1 = 'mar'; day2 = 'mer'; day3 = 'gio'; day4 = 'ven'; day5 = 'sab'; day6 = 'dom';
var week_count = ""

//cicli
if (dmonth < 28 || dmonth > 31 || dweek < 0 || dweek > 6) {
  console.log(' Hai inserito il giorno della settimana (Lun = 0; Dom = 6) o il numero dei giorni del mese (min = 28; max = 31) errato.');
}
else {
  for (var i = 1; i < dmonth + 1; i++) {
    switch (dweek){
      case 0:
        week_count = day0
        dweek++
        break;
      case 1:
        week_count = day1
        dweek++
        break;
      case 2:
        week_count = day2
        dweek++
        break;
      case 3:
        week_count = day3
        dweek++
        break;
      case 4:
        week_count = day4
        dweek++
        break;
      case 5:
        week_count = day5
        dweek++
        break;
      case 6:
        week_count = day6
        dweek = 0
        break;
      default:
        console.log('Hai inserito un giorno della settimana non valido');

  }
    console.log(week_count + "  " + i);
}
}

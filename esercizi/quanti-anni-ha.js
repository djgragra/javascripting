var name = 'Emanuele';
var year = 2020;
var birth = 1976;
var age = (year - birth);
var to100 = (100 - age);

if (age <= 100){
  console.log(name + ' ha ' + age + ' anni, e gli mancano ' + to100 + ' anni per arrivare a 100 anni');
} else {
  console.log(name + ' ha ' + age + ' e ha già 100 anni da ' + (age - 100) + ' anni');
}
//console.log(name + ' ha ' + age + ' anni, e gli mancano ' + to100 + ' anni per arrivare a 100 anni');

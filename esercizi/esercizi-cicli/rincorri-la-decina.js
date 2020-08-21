var i = 0;
var x = 0;
var raw1 = "";
var raw2 = "";
var raw3 = "";
var raw4 = "";
var raw5 = "";
var raw6 = "";
var raw7 = "";
var raw8 = "";
var raw9 = "";
var raw10 = "";

//prima decina
do {
 i++;
 x++;
if(i == 1) {
  raw1 = i;
}
else
{
   raw1 = raw1 + " " + i;
}
  if(x >= 10) {
    x = 0;

}
} while (i < 10);

//seconda decina
do {
 i++;
 x++;
if(i == 11) {
  raw2 = i;
}
else
{
   raw2 = raw2 + " " + i;
}
  if(x >= 20) {
    x = 0;

}
} while (i < 20);

//terza decina
do {
 i++;
 x++;
if(i == 21) {
  raw3 = i;
}
else
{
   raw3 = raw3 + " " + i;
}
  if(x >= 30) {
    x = 0;

}
} while (i < 30);

//quarta decina
do {
 i++;
 x++;
if(i == 31) {
  raw4 = i;
}
else
{
   raw4 = raw4 + " " + i;
}
  if(x >= 40) {
    x = 0;

}
} while (i < 40);

//quinta decina
do {
 i++;
 x++;
if(i == 41) {
  raw5 = i;
}
else
{
   raw5 = raw5 + " " + i;
}
  if(x >= 50) {
    x = 0;

}
} while (i < 50);

//sesta decina
do {
 i++;
 x++;
if(i == 51) {
  raw6 = i;
}
else
{
   raw6 = raw6 + " " + i;
}
  if(x >= 60) {
    x = 0;

}
} while (i < 60);

//settima decina
do {
 i++;
 x++;
if(i == 61) {
  raw7 = i;
}
else
{
   raw7 = raw7 + " " + i;
}
  if(x >= 70) {
    x = 0;

}
} while (i < 70);

//ottava decina
do {
 i++;
 x++;
if(i == 71) {
  raw8 = i;
}
else
{
   raw8 = raw8 + " " + i;
}
  if(x >= 80) {
    x = 0;

}
} while (i < 80);

//nona decina
do {
 i++;
 x++;
if(i == 81) {
  raw9 = i;
}
else
{
   raw9 = raw9 + " " + i;
}
  if(x >= 90) {
    x = 0;

}
} while (i < 90);

//decima decina
do {
 i++;
 x++;
if(i == 91) {
  raw10 = i;
}
else
{
   raw10 = raw10 + " " + i;
}
  if(x >= 100) {
    x = 0;

}
} while (i < 100);


console.log(raw1 + "\n" + raw2 + "\n" + raw3 + "\n" + raw4 + "\n" + raw5 + "\n" + raw6 + "\n" + raw7 + "\n" + raw8 + "\n" + raw9 + "\n" + raw10);
console.log('end');

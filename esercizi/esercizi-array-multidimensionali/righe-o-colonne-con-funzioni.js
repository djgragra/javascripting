let m=4;
let n=2;
let sum;
let R=new Array();
let C=new Array();
//matrix=[[1],[1,2],[1,2,3],[]];
let matrix=new Array(m);
for(let i=0;i<matrix.length;i++) {
matrix[i]=new Array(n);
for(let j=0;j<matrix[i].length;j++) {
matrix[i][j]=Math.ceil(Math.random()*100);
}
}
let length= maxLength(matrix);
for(let i=0; i<matrix.length;i++) {
sum=0;
for(let j=0; j<matrix[i].length;j++)
{
sum+=matrix[i][j];
}
R[i]=sum;
}
for(let j=0; j<length;j++) {
sum=0;
for(let i=0; i<matrix.length;i++) {
if(typeof(matrix[i][j])!=='undefined') {
sum+=matrix[i][j];
}
else {sum+=0;}
}
C[j]=sum;
}
function maxLength(matrix) {
var max_length =matrix[0].length;
for(var i=0; i<matrix.length;i++) {
if(matrix[i].length>max_length) {
max_length=matrix[i].length;
}
}
return max_length;
}
console.log(matrix);
console.log(R);
console.log(C);

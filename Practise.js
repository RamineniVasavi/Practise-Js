console.log(x);
var x=9;
console.log(abcd);

var abcd=function(){
console.log("abc");
}
abcd();
//call back function
function abc(){
console.log("namaste");
};
function y(abc){
    abc();
}
y(abc);

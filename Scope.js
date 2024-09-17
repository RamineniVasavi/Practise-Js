var a=10;
function abc(){
    var a=30;
    console.log(a);
}
abc();
console.log(a);
let b=100;
console.log(window.b);
const value=100;
console.log(value);

// shadowing 
var varshadow=10;
{
    var varshadow=20;
    console.log(varshadow);
}
console.log(varshadow);
function foo(x) {
    let y = x; // y is shadowed by x
    {
        let x = 20; // x is shadowed by y
       let y = 30;
        console.log(x);
        console.log(y);
    }
    console.log(x);
    console.log(y);
 }
 foo(10)
 //Illegal shadowing
 let ab=20;
 {
    //var ab=50;
 }
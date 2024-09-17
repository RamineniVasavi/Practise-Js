function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    a=100;
    y();
}
x();

//function expression
var func=function xyz(){
console.log("function expression");
};
func();

const closu=function (){
    let counter =0;
    return function valu(){
        counter=counter+1;
        console.log(counter);
        return counter;
    }

}();
closu();
closu();

const closu1=function (){
    let counter =0;
    return function valu(){
        counter=counter+1;
        console.log(counter);
        return counter;
    }

};
closu1()();

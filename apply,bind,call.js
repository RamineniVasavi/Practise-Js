const object={
    firstname:"abc",
lastname:'bcd',
y:function ab(name){
    console.log(this.firstname+" "+this.lastname+" "+name);
}
}

const ob1={
    firstname:"hbj",
lastname:'yhb'
}

//call
object.y.call(ob1,"anu");
//apply
object.y.apply(ob1,["anu"]);
//bind
const value1=object.y.bind(ob1,"anu");
console.log(value1);
console.log(value1());


let name1={
    firstname:"vasavi",
    Lastname:"Ramineni"
}

let printname=function(town,state,country){
    console.log(this.firstname+" "+this.Lastname+" "+town+" "+state+" "+country);
}
printname("India");
Function.prototype.Bindforpollyfill =function(...args){
let obj=this,
params=args.slice(1);
return function(...args2){
    obj.apply(args[0],[...params,...args2]);
}
}

let printname2=printname.Bindforpollyfill(name1,"tpt","AP");
printname2("india");
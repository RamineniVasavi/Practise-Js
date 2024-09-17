const arr=[1,2,3,4];
const output=arr.map(x=>x.toString(2));// to get binary values of array
console.log(output);
var output1= arr.map(function(x){ // Another way of using map 
return x.toString(2);
});
console.log(output1);
function binary(x){
    return x.toString(2);
}
const output2=arr.map(binary);
console.log(output2);
arr.push(5);
//map
const users=[
    {firstname:"anu",lastname:"ramineni",age:26},
    {firstname:"siri",lastname:"ramineni",age:23},
    {firstname:"nanda",lastname:"tineedi",age:23},
    {firstname:"abc",lastname:"tineedi",age:23},
];
console.log(users.map(x=>x.firstname+" "+x.lastname));
//filter to get age<20 and firstname
const age=users.filter(x=>x.age>23).map(x=>x.firstname);
console.log(age);
//Reduce to get age<20 and firstname
const age2=users.reduce(function(sum,curr){
 if(curr.age>23){
    sum.push(curr.firstname);
 }
 return sum;
},[]);
console.log(age2);
//Reduce to get count of same age
const age1=users.reduce(function(sum,curr){
if(sum[curr.age]){
    const age=++sum[curr.age];
    sum[curr.age]=age;
}
else{
    sum[curr.age]=1;
}
return sum;
},{});
console.log(age1);


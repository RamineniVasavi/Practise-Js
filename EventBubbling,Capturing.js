document.querySelector("#gparent").addEventListener('click',()=>{
    console.log("grand parent clicked !");
},false);
// if we dont give argument or give false then bubbling will happen
document.querySelector("#parent").addEventListener('click',()=>{
console.log("parent clicked!");
},false);

document.querySelector("#child").addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("child clicked!");
},true);

//stop propogation - wont call next function after stop propogation function
// document.querySelector("#gparent").addEventListener('click',(e)=>{
//     console.log("grand parent clicked !");
//     e.stopPropagation();
// },true);

// document.querySelector("#parent").addEventListener('click',()=>{
// console.log("parent clicked!");
// },false);

// document.querySelector("#child").addEventListener('click',()=>{
//     console.log("child clicked!");
//     e.stopPropagation();
// },true);
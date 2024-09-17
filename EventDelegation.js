document.querySelector("#categories").addEventListener('click',(e)=>{
console.log(e);
if(e.target.tagName=="li"){
 window.location.href="/"+e.target.id;
}

});
document.querySelector("#categories").addEventListener('keyup',(e)=>{
    if(e.target.dataset.uppercase!=undefined){
        e.target.value=e.target.value.toUpperCase();
     }
});

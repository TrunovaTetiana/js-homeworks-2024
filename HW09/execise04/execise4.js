window.onload=function(){

let[...allItemsButtons]=document.querySelectorAll('.div-item button');
allItemsButtons.forEach(button=>{
    button.onclick=function(){
        button.parentElement.remove();
    }
});
let [...allDivs]=document.querySelectorAll('.div-item');
allDivs.forEach(div=>{
    div.onclick=function(){
        div.remove();
    }

    
});
}

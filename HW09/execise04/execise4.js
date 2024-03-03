window.onload=function(){

let[...allItemsButtons]=document.querySelectorAll('.div-item button');
allItemsButtons.forEach(button=>{
    button.onclic=function(){
        button.parentElement.remove();
    }
});
let [...allDivs]=document.querySelectorAll('.div-item');
allDivs.forEach(div=>{
    div.onclic=function(){
        div.remove();
    }

});
}

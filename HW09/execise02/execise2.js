window.onload=function(){

let btnEl=document.querySelector('.size');
btnEl.classList.add('new');
//btnEl.style.fontSize='100px';

let newFontSize='50px';

btnEl.onclick=function(){

    newFontSize+=2;
    

}


}
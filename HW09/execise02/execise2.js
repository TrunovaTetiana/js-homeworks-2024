window.onload=function(){

let btnEl=document.querySelector('.size');

let newFontSize=12;

btnEl.onclick=function(){
    newFontSize+=2;
   this.style.fontSize=`${newFontSize}px`;

}


}
window.onload=function(){

let  conteinerEl=document.querySelector('.heder');
conteinerEl.style.backgroundColor='gold';



function aEl(content){
    let a=document.createElement('a');
    a.innerText=content;
    return a;
}
const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    // Додайте ще пункти меню за потреби
];
menuData.forEach(menu=>{
    let butnEl=document.createElement('butn');
    for(let key in menu){
        butnEl.appendChild(aEl(menu[key]));
    }
conteinerEl.appendChild(butnEl);
});



}
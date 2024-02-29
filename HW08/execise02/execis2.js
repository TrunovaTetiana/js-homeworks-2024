window.onload=function(){



 let restTdiv=document.querySelector('.rest');
 restTdiv.style.backgroundColor='yellow';
 restTdiv.style.padding="50px";
 restTdiv.style.textAlign="center";
 console.log(restTdiv);

 function tdEl(content){
    let td =document.createElement('td');
    td.innerText=content;
    return td;
 }

 const menuData = [
        { name: 'Головна', url: '/' },
        { name: 'Про нас', url: '/about' },
        { name: 'Послуги', url: '/services' },
        // Додайте ще пункти меню за потреби
    ];

menuData.forEach(menu=>{
    let trEl=document.createElement('tr');
    for (let key in menu){
        trEl.appendChild(tdEl(menu[key]));
    }
    restTdiv.appendChild(trEl);
});
}

   

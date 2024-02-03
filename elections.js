let userAge = prompt('Age');
let userCountry=prompt('Country');


if (userAge>=18 && userCountry=='Ukraina'){
    alert('Вітаємо Ви маєте права голосу в Украіне');
}
else if(userAge<18||userCountry=='Ukraina'){
    alert('Ви ще занадто молоді для голосування');
}
else{
    alert('Перевірте правила голосування у Вашій країні');
}
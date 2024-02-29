window.onload=function(){
 
 

const booksArray=[
    {
     title:'Пригоди Аліси в Країні Див ',
     year:1865,
     rating:4.5
   },
    {
    title:'1984',
     year:1949,
     rating:4.8
   },
    {
        title:'Гаррі Поттер і філософський камінь',
        year:1997,
       rating:4.7
    }
];
let tableTbody=document.querySelector('.myTable tbody');
console.log(tableTbody);
function tdEl(cotent){
  let td=document.createElement('td');
  td.innerText=cotent;
  return td;
}
booksArray.forEach(book=>{
  let trEl=document.createElement('tr');
  for(let key in book){
    trEl.appendChild(tdEl(book[key]));
  }
  tableTbody.appendChild(trEl);
});


}

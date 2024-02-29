window.onload=function(){

   function createDivs(number){
    const containerEl=document.createElement('div');
    containerEl.style.display='flex';

    for (let i=0;i<number;i++){
      const div=document.createElement('div');
      div.style.width='50px';
      div.style.height='50px';
      div.style.borderRadius='20%';
      div.style.backgroundColor='aquamarine';
      containerEl.appendChild(div);
   }
    document.body.appendChild(containerEl);

   }
createDivs(50);


}


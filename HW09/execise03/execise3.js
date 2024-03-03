window.onload=function(){

    let helloBtn=document.querySelector('.hello');
    helloBtn.onclick=function(){
          alert('Hello');
        if(count>=10){
          helloBtn.removeEventListener('click');
    }
        count+=1; 
        pEl.innerHTML=`Counter<strong>${count}</strong>`
    }
       let count=0; 
     let pEl=document.querySelector('p');
    }
    
    

    
    

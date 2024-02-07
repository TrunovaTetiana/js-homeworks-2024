let userFirstNumber=+prompt('Type number');
let userSecondNumber=+prompt('Type number');
let n1=userFirstNumber;
let n2=userSecondNumber;
let userOperation=prompt('user choice +-/*');

if (n1+n2){
   alert(`Summ ${n1}+${n2}=${n1+n2}`);
}else{

}

if (n1-n2){
    alert(`Minus${n1}-${n2}=${n1-n2}`);
}else{

}

if (n1*n2){
    alert(`Multiply${n1}*${n2}=${n1*n2}`);
}else{

}

if (n1/n2){
   alert(`Divide${n1}/${n2}=${n1/n2}`);
}else if(n2=0){
    alert('Attention');
}
else {

}  

switch(n1,n2){
    case n1+n2:
        alert(`Summ ${n1}+${n2}=${n1+n2}`);
        break;
    case n1-n2:
        alert (`Minus ${n1}-${n2}=${n1-n2}`);
        break;
    case n1*n2:
        alert(`Multiply${n1}*${n2}=${n1*n2}`);
        break;
    case n1/n2:
        alert(`Divide${n1}/${n2}=${n1/n2}`);
        break;            
}


  





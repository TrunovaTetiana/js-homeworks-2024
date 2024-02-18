var n=Math.floor(Math.random()*11);
   // alert(n);
while(true){
    var x=prompt('Enter the number from 0 to 10');
    if(isNaN(x)){
        alert('Input Error!');
        break;
    }else if(x<n){
        alert('Few');
    }else if(x>n){
        alert('A lot of');
    }else{
        alert('You guessed!!!');
        break;
    }
    }

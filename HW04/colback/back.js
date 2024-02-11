function ask(question,yes,no){
      if(confirm(question))yes(), no();
  
}

function wellcomUser(){
    let user='Tom';
    alert('Вітаю', user);
}
function hiuser(){
    alert('Goodbye');
}
    ask ('Your name?', wellcomUser,hiuser);

ask(
    'Your name?',
    ()=> alert('Вітаю'),
    ()=> alert('Goodbye')
);




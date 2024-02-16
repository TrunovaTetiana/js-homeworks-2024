let Person=class{
    name='John';
    sayHi(){
        alert(`Hello,${this.name}!`);
    }
}
new Person().sayHi();
class Person{
    constructor(name,grade){
        this.grade=grade;
        this.name=name;

    }
}
class Student extends Person{
    construktor(name,studentld){
    
        this.studentld=studentld;
    }
}
let student=new Student('Jon',9);
alert(student.name);
alert(student.grade);
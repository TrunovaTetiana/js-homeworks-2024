const person={
    name:'Jon',
    age: 25,
    accupation:'Developer'
};
for(const key in person){
    alert(`${key}=${person[key]}`); 
}
function mapWithTransForm(array,callback){
    let newArr=array.map(item=>callback(item));
    return newArr;
}
let newVlueArr=mapWithTransForm(numbersArr,item=>`new value:${item}`);
alert(newVlueArr);

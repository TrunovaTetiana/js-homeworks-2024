let numberArrUniq=[10,20,30,20,10]
function filterArrayFn(array){
    let uniqValue=[];
    array.forEach(item => {
        if(!uniqValue.includes(item)){
            uniqValue.push(item);
        }
        
    });
    return uniqValue;
}
alert(filterArrayFn(numberArrUniq));
function sumOfminmax(el){
    let temp = el.sort();
    return temp[temp.length-1]+temp[0]
}
const arr =[12,35,1,10,34,1];
console.log(sumOfminmax(arr));
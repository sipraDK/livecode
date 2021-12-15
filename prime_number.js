function isPrime (num){
    for (var i = 2; i<num; i++)
    if(num %i===0) return false;
    return num > 1

}
const arr = [12,35,1,10,34,1]
for ( let el of arr){
    if (isPrime(el)){
        console.log(el);
    }
}
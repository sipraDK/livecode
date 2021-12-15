function combination(word){
    let combinations=[];
    for(let i= 0; i<word.length;i++)
    {
        for(let j= i+1; j<word.length+1;j++)
      {
      combinations.push(word.slice(i,j));
    }
}
return combinations;
}
console.log(combination('dog'));
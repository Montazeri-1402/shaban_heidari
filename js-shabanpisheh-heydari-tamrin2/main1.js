const taas=(num1,num2,p)=>{
    let rand=Math.random()*10%(num2-num1)+num1;
    rand=rand.toFixed(p)
    return rand;
}
console.log(taas(20,30,2));
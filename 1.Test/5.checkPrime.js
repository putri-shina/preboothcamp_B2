function checkPrime(param){
    for(let i = 2; i < param; i++)
     if(param % i === 0) return false;
    return param > 1;
  }
  console.log(checkPrime(23));
  document.write("<br/> adalah bilangan prima");
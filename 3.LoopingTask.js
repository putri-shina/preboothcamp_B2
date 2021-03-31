function firstLooping(loopOne){
    const array = [];
    for (let i=1; array.length < loopOne; i++){
      array.push(i);
    } 
    return array;
  
  } console.log(firstLooping(15));

  


  function quadrat(loopTwo){
    const secondLoop = [];
    for (let i=1; secondLoop.length<loopTwo; i++){
      const loopTwo = i*i;
      secondLoop.push(loopTwo);
    } 
    return secondLoop;
  
  } console.log(quadrat(15));

  



  function thirdLooping(num){
    const loopT = [];
    for (let i=1; loopT.length<num; i++){
      const loopThree = i*3;
      loopT.push(loopThree);
    } 
    return loopT;
  
  } console.log(thirdLooping(20));

  
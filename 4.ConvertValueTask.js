function score (param){
    if (param>=86 && param<=100) 
    document.write("<br/> Nilai konversi adalah A");
    else if (param<=85 && param>=70) 
    document.write("<br/> Nilai konversi adalah B");
    else if (param<=69 && param>=50) 
    document.write("<br/> Nilai konversi adalah C");
    else if (param<=49 && param>=30) 
    document.write("<br/> Nilai konversi adalah D");
    else if (param<=29 && param>=0) 
    document.write("<br/> Nilai konversi adalah E");
  }
  console.log (score(29));
function nilai (param){
    if (param>=86 && param<=100) {return "Nilai konversi adalah A"}
    else if (param<=85 && param>=70) {return "Nilai konversi adalah B"}
    else if (param<=69 && param>=50) {return "Nilai konversi adalah C"}
    else if (param<=49 && param>=30) {return "Nilai konversi adalah D"}
    else if (param<=29 && param>=0) {return "Nilai konversi adalah E"};
  }
  console.log (nilai(76));
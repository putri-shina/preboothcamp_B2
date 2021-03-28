function rangeUsia (param){
    if (param>=1 && param<=0) {return "Bayi"}
    else if (param<=10 && param>=2) {return "Anak-anak"}
    else if (param<=19 && param>=11) {return "Remaja"}
    else if (param<=60 && param>=20) {return "Dewasa"}
    else if (param<=100 && param>=61) {return "Lanjut usia"};
  }
  console.log (rangeUsia(73));
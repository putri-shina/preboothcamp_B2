function suhu(param1, param2, param3) {
  
    if (param1 =="celsius" && param3 =="reamur"){
      const hasil=param2*4/5;
      return hasil;
    }
    else if (param1 =="celsius" && param3 =="fahrenheit"){
      const hasil=param2*9/5+32;
      return hasil;
    }
    else if (param1 =="celsius" && param3 =="kelvin"){
      const hasil=param2+273;
      return hasil;
    }
    else if (param1 =="reamur" && param3 =="celsius"){
      const hasil=param2*5/4;
      return hasil;
    }
    else if (param1 =="reamur" && param3 =="fahrenheit"){
      const hasil=param2*9/4+32;
      return hasil;
    }
    else if (param1 =="reamur" && param3 =="kelvin"){
      const hasil=param2*5/4+273;
      return hasil;
    }
    else if (param1 =="fahrenheit" && param3 =="reamur"){
      const hasil=4/9*(param2-32)
      return hasil;
    }
    else if (param1 =="fahrenheit" && param3 =="celsius"){
      const hasil=5/9*(param2-32)
      return hasil;
    }
    else if (param1 =="fahrenheit" && param3 =="kelvin"){
      const hasil=5/9*(param2-32)+ 273
      return hasil;
    }
    else if (param1 =="kelvin" && param3 =="reamur"){
      const hasil=4/5*(param2+273)
      return hasil;
    }
    else if (param1 =="kelvin" && param3 =="celsius"){
      const hasil=param2-273;
      return hasil;
    } 
    else if (param1 =="kelvin" && param3 =="fahrenheit"){
      const hasil=9/5*(param2-273)+32;
      return hasil;
    }
 }
 
 console.log(suhu("fahrenheit", 88, "kelvin"));
 
 
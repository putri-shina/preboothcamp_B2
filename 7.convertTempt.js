function suhu(param1, param2, param3) {
  
    if (param1 =="celsius" && param3 =="reamur"){
      const hasil=param2*4/5
      return hasil
    }
    else if (param1 =="celsius" && param3 =="fahrenheit"){
      return param2*9/5+32
    }
    else if (param1 =="celsius" && param3 =="kelvin"){
     return param2+273
    }
    else if (param1 =="reamur" && param3 =="celsius"){
      return param2*5/4
    }
    else if (param1 =="reamur" && param3 =="fahrenheit"){
     return param2*9/4+32
    }
    else if (param1 =="reamur" && param3 =="kelvin"){
     return param2*5/4+273
    }
    else if (param1 =="fahrenheit" && param3 =="reamur"){
     return 4/9*(param2-32)
    }
    else if (param1 =="fahrenheit" && param3 =="celsius"){
    return 5/9*(param2-32)
    }
    else if (param1 =="fahrenheit" && param3 =="kelvin"){
    return 5/9*(param2-32)+ 273
    }
    else if (param1 =="kelvin" && param3 =="reamur"){
    return 4/5*(param2+273)
    }
    else if (param1 =="kelvin" && param3 =="celsius"){
    return param2-273
    } 
    else if (param1 =="kelvin" && param3 =="fahrenheit"){
    return 9/5*(param2-273)+32
    }
 }
 
 console.log(suhu("celsius", 67, "reamur"))
 
 
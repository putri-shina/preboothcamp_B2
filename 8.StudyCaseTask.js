function printAge() {
    let age = document.getElementById("inputAge").value;
    if (age >=1 && age<= 0) {
      document.getElementById("output-age").innerHTML= age + " tahun adalah Bayi"
    } else if (age<= 10 && age >= 2) {
      document.getElementById("output-age").innerHTML= age + " tahun adalah Anak-anak"
    } else if (age<=19 && age>=11) {
      document.getElementById("output-age").innerHTML= age + " tahun adalah Remaja"
    } else if (age<=60 && age>=20) {
      document.getElementById("output-age").innerHTML= age + " tahun adalah Dewasa"
    }
      else if (age<=100 && age>=61) {
      document.getElementById("output-age").innerHTML= age + " tahun adalah Lanjut Usia"
    };
  }
  // console.log (rangeAge(73));
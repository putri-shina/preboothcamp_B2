
let profile 
    name= "Bapak Andi",
    group= "A",
    workingHours= "8",
    perDay= 8*1000,
    perMonth= 8*30*1000,
    overTime= 240*200,

  document.write("Nama = " + name);
  document.write("<br> Golongan = " + group);
  document.write("<br> Gaji Perhari = " + perDay);
  document.write("<br> Lembur = "+ overTime);
  document.write("<br> Gaji Per Bulan = " + perMonth);
  document.write("<br> Total Keseluruhan = " + (perMonth+overTime));




  
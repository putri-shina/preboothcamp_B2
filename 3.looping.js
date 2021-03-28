
function pengulanganSatu(param){
  const array = []

  for (let i=1; array.length<param; i++){
    array.push(i)
  } 
  return array

} console.log(pengulanganSatu(15))

function kuadrat(param){
  const pengulangan = []
  for (let i=1; pengulangan.length<param; i++){
    const loopDua=i*i
    pengulangan.push(loopDua)
  } 
  return pengulangan

} console.log(kuadrat(15))

function perkalianTiga(param){
  const pengulangan = []
  for (let i=1; pengulangan.length<param; i++){
    const loopTiga=i*3
    pengulangan.push(loopTiga)
  } 
  return pengulangan

} console.log(perkalianTiga(20))


function printReverseNumbers() {
    let input = document.getElementById("reverseNum").value;
    let output = "";
    for (let i = input.length - 1; i >=0 ; i--){
        output = output + input[i];
    }
  document.getElementById("output-reverse").innerHTML = output;
}

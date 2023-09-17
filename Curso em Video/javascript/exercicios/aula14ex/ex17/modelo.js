function tabuada() {
  let num = document.getElementById("txtn");
  let tab = document.getElementById("seltab");
  if (num.value.length == 0) {
    window.alert("Por favor, digite um número!");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = ""; //limpar area de tabuada
    while (c <= 10) {
      let item = document.createElement("option"); //cria um elemento option
      item.text = `${n} x ${c} = ${n * c}`; //criando função de calculo
      item.value = `tab${c}`; //dando valor ao option
      tab.appendChild(item); //adicionar elemento filho
      c++;
    }
  }
}

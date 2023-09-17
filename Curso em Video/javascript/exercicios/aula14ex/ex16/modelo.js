function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    /* window.alert("[ERRO] Faltam dados!"); */
    res.innerHTML = "Impossível contar!";
  } else {
    res.innerHTML = "Contando: <br> ";
    let i = Number(ini.value); //converte o valor do ini para numero
    let f = Number(fim.value); //converte o valor do fim para numero
    let p = Number(passo.value); //converte o valor do passo para numero
    if (p <= 0) {
        window.alert("Passo inválido! Considerando passo 1");
        p = 1;
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`; //emojis in unicode
      }
      res.innerHTML += `\u{1F3C1}`; //emojis in unicode
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`; //emojis in unicode
      }
      res.innerHTML += `\u{1F3C1}`; //emojis in unicode
    }
  }
}

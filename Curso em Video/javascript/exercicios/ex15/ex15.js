function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");//criando elemento img
    img.setAttribute("id", "foto"); //criando um atributo
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "images/boy-kid.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "images/boy-young.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "images/man-adult.jpg");
      } else {
        //idoso
        img.setAttribute("src", "images/grandpa.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "images/girl-kid.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "images/girl-young.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "images/woman-adult.jpg");
      } else {
        //idoso
        img.setAttribute("src", "images/grandma.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}

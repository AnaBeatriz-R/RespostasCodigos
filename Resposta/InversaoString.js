function inversao(palavra) {
    let palavrainvr = "";
    for(let i = palavra.length - 1; i >= 0; i--){
      palavrainvr += palavra[i];
    }
    return palavrainvr;
  }
  
 
  let String = "Palavra invertida";
  let StringInvertida = inversao(String);
  console.log(StringInvertida);
  
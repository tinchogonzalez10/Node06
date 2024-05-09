let contador = 0;
let numeroMayor = contador;

function esPar() {
  let numero = document.getElementById('semilla').value;
  let secuencia = [numero];
  console.log(secuencia[0]);

  if (numero == 0 || numero >= 10000) {
    console.error("El numero no puede ser 0 o mayor a 10000.");
    return;
  }
  const iteracionesMaximas = 1000; 
  while (secuencia[contador] > 1 && contador < iteracionesMaximas) {
    if (secuencia[contador] > numeroMayor){
        numeroMayor = secuencia[contador]
    }
    if (secuencia[contador] % 2 === 0) {
      secuencia.push(secuencia[contador] / 2);
      contador++;
    } else {
      secuencia.push((secuencia[contador] * 3) + 1);
      contador++;
    }
  }
  console.log(secuencia);
  console.log(secuencia.length);
  console.log(numeroMayor);
}



//Ejercicio 1 -- Avistaje de Pájaros

function pajarosMigratorios(pajaros) {
  let map = {},
    maxCount = 0,
    resp = [];
  for (let i = 0; i < pajaros.length; i++) {
    if (!map[pajaros[i]]) {
      map[pajaros[i]] = 1;
    } else {
      map[pajaros[i]] += 1;
    }

    if (map[pajaros[i]] > maxCount) {
      maxCount = map[pajaros[i]];
    }
  }

  for (let j = 0; j < pajaros.length; j++) {
    if (map[pajaros[j]] === maxCount) {
      resp.push(pajaros[j]);
    }
  }

  return Math.min(...resp);
}
console.log(pajarosMigratorios([1, 3, 4, 5, 3, 4, 2, 6, 7]));

//Ejercicio 2: Puntuando Exámenes

// Función para obtener el múltiplo de 5
function multipoDeCinco(n) {
  let contador = 0;
  while (n % 5 != 0) {
    n++;
    contador++;
  }
  return contador;
}
function redondearNotas(notas) {
  let notasRedondeadas = [];
  for (let i = 0; i < notas.length; i++) {
    let diferencia = multipoDeCinco(notas[i]);
    let notaFinal = diferencia + notas[i];

    //Controlamos que la diferencia sea menor a 3 y NotaFinal mayor o igual a 40
    if (diferencia < 3 && notaFinal >= 40) {
      notasRedondeadas.push(notaFinal);
    } else {
      notasRedondeadas.push(notas[i]);
    }
  }
  return notasRedondeadas;
}
console.log(redondearNotas([32, 58, 63, 84, 91]));

//Ejercicio 3 -- La máquina del Tiempo

function viajarEnElTiempo(año, dia) {
  if (año > 1700 && año < 2700) {
    //Juliano
    if (año <= 1918) {
      const buscarDia = new Date(año, 01, 01);
      buscarDia.setDate(dia);
      var diaEncontrado =
        buscarDia.getDate() -
        2 +
        "." +
        buscarDia.getMonth() +
        "." +
        buscarDia.getFullYear();
      return diaEncontrado;
    }
    //Gregoriano
    else {
      const buscarDia = new Date(año, 01, 01);
      buscarDia.setDate(dia);

      var diaEncontrado =
        buscarDia.getDate() -
        1 +
        "." +
        buscarDia.getMonth() +
        "." +
        buscarDia.getFullYear();
      return diaEncontrado;
    }
  } else console.error("El año no es correcto, fuera del rango");
}

console.log(viajarEnElTiempo(2016, 313));

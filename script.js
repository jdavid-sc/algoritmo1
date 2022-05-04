 const secuenciaProteina = [
     "A",
     "C",
     "G",
     "T"
]

function funcionPrincipal() {
    let listaProteina = []
    for (let index = 0; index < 20; index++) {
        const dato = prompt("Ingrese inicial de la proteina");
        listaProteina.push(dato);
    }  
    const correctos = validarSecuencia(listaProteina);

    if (correctos == 20) {
        const resultados = cuentaProteinas(listaProteina);
        alert("Adenina=" + resultados[0] + " " + "Citosina=" + resultados[1] + " " + "Guanina=" + resultados[2] + " " + "Tinina=" + resultados[3]);
        console.log(resultados);
    } else {
        alert("Error en la secuencia. Hay valores que no corresponden a las proteínas válidas");
    }
}

function validarSecuencia(lista) {
    let valoresCorrectos = 0;
    lista.forEach(proteina => {
        const correcta = secuenciaProteina.find(secuencia => proteina.toUpperCase() == secuencia.toUpperCase());
        if (correcta != undefined) {
            valoresCorrectos++;
        }
    });
    return valoresCorrectos;
}

function cuentaProteinas(listaProteina) {
    let resultados = [];
    listaProteina.forEach(proteina => {
            switch(proteina) {
                case "A": 
                    resultados[0] = listaProteina.filter(f => f.toUpperCase() == "A").length;
                    break;
                case "C":
                    resultados[1] = listaProteina.filter(f => f.toUpperCase() == "C").length;
                    break;
                case "G": 
                resultados[2] = listaProteina.filter(f => f.toUpperCase() == "G").length;
                    break;
                case "T":
                    resultados[3] = listaProteina.filter(f => f.toUpperCase() == "T").length;
                    break;
            }
        });
    return resultados;
}


funcionPrincipal();
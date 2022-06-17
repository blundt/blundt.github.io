const lista1 = [
    600,
    300,
    400,
    500,  
    200,
    400,
    300,
    1000,
    700,
    900,
    150,
    430,
    500,
    280, 
];

const mitadLista1 = parseInt(lista1.length / 2);
function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

let mediana

const lista = lista1.sort(function(a, b) {
    return a - b;
  });
if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];
    mediana = ( (elemento1 + elemento2)/2)
} else {
    mediana = lista1[mitadLista1];
}

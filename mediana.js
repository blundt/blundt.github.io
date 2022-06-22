// Helpers 
function esPar(numerito) {    
    return (numerito % 2 === 0); 
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
// Calculadora de mediana

function calculadoraMediana(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad
    }
}

// interaccion html

const listap = []

function agregarLista() {
    const input = document.getElementById("InputNumero");
    const valor = input.value
    listap.push(valor)
    const pListaPresult = document.getElementById("pListaP");        
    pListaPresult.innerText = ( "Tus numeros son " + listap)
}
function borrarUltimo() {
    listap.pop() 
    const pListaPresult = document.getElementById("pListaP");        
    pListaPresult.innerText = ( "Tus numeros son " + listap)
}

function calcularMediana() {
    const listap2 = listap.map(Number);
    const media = calculadoraMediana(listap2);
    const resultP = document.getElementById("ResultP");        
    resultP.innerText = ("La media de tus numeros es " + media)
}

function borrarLista() {
    listap.length = 0
    const pListaPresult = document.getElementById("pListaP");        
    pListaPresult.innerText = (listap)
    const resultP = document.getElementById("ResultP");        
    resultP.innerText = " "
}
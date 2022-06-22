
function calculadoraModa(lista){
    const listaCount = {};

    lista.map(
        function(elemento){
            if( listaCount[elemento]){
                listaCount[elemento] += 1
            }else{
                listaCount[elemento] = 1
            }
        }
    );
    const listaArray= Object.entries(listaCount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1]
        }
    );
    return moda = listaArray[listaArray.length-1]
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

function calcularModa() {
    const listap2 = listap.map(Number);
    const moda = calculadoraModa(listap2);
    const resultP = document.getElementById("ResultP");        
    resultP.innerText = ("La moda de tus numeros es " + moda[0] + 
    " y se repite " + moda[1] + " veces")
}

function borrarLista() {
    listap.length = 0
    const pListaPresult = document.getElementById("pListaP");        
    pListaPresult.innerText = (listap)
    const resultP = document.getElementById("ResultP");        
    resultP.innerText = " "
}
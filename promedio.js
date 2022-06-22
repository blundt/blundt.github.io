




function calcularMediaAritmetica(lista){
    //{let sumaLista = 0;
    //for (let i = 0; i < lista.length; i++) {
    //sumaLista = sumaLista + lista[i]
    //}
    //


    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista
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

function calcularPromedio() {
    const listap2 = listap.map(Number);
    const promedio = calcularMediaAritmetica(listap2);
    const resultP = document.getElementById("ResultP");        
    resultP.innerText = ( "El promedio de tus numeros es  " + promedio)
}


function borrarLista() {
    listap.length = 0
    const pListaPresult = document.getElementById("pListaP");        
    pListaPresult.innerText = (listap)
    const resultP = document.getElementById("ResultP");        
    resultP.innerText = " "
}


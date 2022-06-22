// Helpers

function esPar(numerito) {    
  return (numerito % 2 === 0); 
}
// Calculadora de promedio

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
// Calculadora de moda

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

// Bases funcionamiento

const listN = []  // listN.push()
const listV = []  // listV.push()
const list = [listN,listV];  //list.push({ Nombre: "Camila", Valor: 500,}); !! -.- !!

// /**///***//*//  INTERACCION HTML //****/*/*/*/* */

function addToList() {
  const input1 = document.getElementById("InputNombre");
  const input2 = document.getElementById("InputValor");
  const value1 = input1.value;
  const value2 = input2.value;
  listN.push(value1);
  listV.push(value2);
  const lista1Presult = document.getElementById("ListaP1");
  const lista2Presult = document.getElementById("ListaP2");
  lista1Presult.innerText = ("Nombres : " + listN);
  lista2Presult.innerText = ("Valores : " + listV);
}
function borrarUltimo() {
  listN.pop();
  listV.pop();
  list.pop(); 
  const lista1Presult = document.getElementById("ListaP1");
  const lista2Presult = document.getElementById("ListaP2");
  lista1Presult.innerText = ("Nombres :" + listN);
  lista2Presult.innerText = ("Valores : " + listV);
}
function borrarList() {
  listN.length = 0
  listV.length = 0
  list.length = 0
  const lista1Presult = document.getElementById("ListaP1");
  const lista2Presult = document.getElementById("ListaP2");
  lista1Presult.innerText = ("Nombres :" + listN);
  lista2Presult.innerText = ("Valores : " + listV);
}
function PromedioList(){
  const listVP = listV.map(Number);
  const promedio = calcularMediaAritmetica(listVP);
  const resultPP = document.getElementById("PListaP");
  resultPP.innerText = ("El Promedio de tus valores es " + promedio)
}
function MedianaList(){
  const listVMe = listV.map(Number);
  const media = calculadoraMediana(listVMe);
  const resultPMe = document.getElementById("MeListaP");        
  resultPMe.innerText = ("La media de tus numeros es " + media)
}
function ModaList(){
  const listVMo = listV.map(Number);
  const moda = calculadoraModa(listVMo);
  const resultPMo = document.getElementById("MoListaP");        
  resultPMo.innerText = ("La moda de tus numeros es " + moda[0] + 
  " y se repite " + moda[1] + " veces")
}
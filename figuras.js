// Código del cuadrado

console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado)  {
    return lado * 4
}
//console.log ("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado)  {
    return lado * lado
}
//console.log ("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd()
//Código del cuadrado

//Código del triangulo
console.group("Triangulo")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log ("Los lados del triángulo miden: " + 
    //ladoTriangulo1 + "cm, "
    //+ladoTriangulo2 + "cm, "
    //+ baseTriangulo + "cm."
//);

//const alturaTriangulo = 5.5;
//console.log ("La altura del triánglo mide " + alturaTriangulo + "cm")
function alturaTrianguloEquilatero (lado1) {
    return Math.sqrt(3) * (lado1 / 2);
}
function alturaTrianguloIsoceles (lado1 , base) {
    return Math.sqrt( ( lado1 * lado1) - ( (base * base) / 4) );
}
function alturaTrianguloEscaleno (lado1 , lado2 , base){
    const semiP = (lado1 + lado2 + base)/2 ;
    return (2 / base) * ( Math.sqrt(semiP*(semiP - base)*(semiP - lado1)*(semiP - lado2)));
}
function alturaT(lado1, lado2, base)
{ 
    if (lado1 === lado2 && lado1 === base)
    {
        return altura = alturaTrianguloEquilatero (lado1);
    } 
    else if ( lado1 == lado2 && lado1 != base )
    {
        return altura = alturaTrianguloIsoceles (lado1 , base)
    }
    else 
        return altura = alturaTrianguloEscaleno (lado1 , lado2 , base)
}
function perimetroTriangulo(lado1, lado2, base)  {
    
    return lado1 + lado2 + base;
}
//console.log ("El perimetro del triángulo mide " + perimetroTriangulo + "cm")

function areaTriangulo(base, altura)  {
    return (base*altura)/2;
}
//console.log ("El area del triángulo mide " + areaTriangulo + "cm^2")

console.groupEnd()

//CODIGO DEL TRIANGULO

//CODIGO DEL CIRCULO

console.group("Círculo")
//const radioCirculo = 4;
//const diametroCirculo = (2*radioCirculo);
const PI = Math.PI;
function diametroCirculo(radio){
    return radio*2
}

//console.log ("El radio del circulo mide "  + radioCirculo + "cm");

//console.log ("El diamtro del circulo mide "  + diametroCirculo + "cm");

function perimetroCirculo(radio)  {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//console.log ("El perímetro del circulo mide " + perimetroCirculo + "cm") ;
function areaCirculo(radio)  {
    return (radio * radio) * PI
    
}
//console.log ("El área del circulo mide " + areaCirculo + "cm^2");

console.groupEnd()

//Código del círculo


// AQUI SE INTERACTUA CON HTML --------//


// INICIO SECCION CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
}

// FIN SECCION CUADRADO

// INICIO SECCION ALTURA TRIANGULO

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("InputLadoA");
    const ladoA = input1.value;
    const input2 = document.getElementById("InputLadoB");
    const ladoB = input2.value;
    const input3 = document.getElementById("InputLadoC");
    const ladoC = input3.value;
    var altura
    altura = alturaT(ladoA, ladoB, ladoC)
    alert(altura);
}
// FIN SECCION ALTURA TRIANGULO

// INICIO SECCION TRIANGULO

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputLado2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputBase");
    const base = input3.value;

    const perimetro = perimetroTriangulo(value1 , value2 , base)
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputBase");
    const base = input3.value;
    const input4 = document.getElementById("InputAltura");
    const altura = input4.value;

    const area = areaTriangulo(base, altura)
    alert(area);
}
// FIN SECCION TRIANGULO

// INICIO SECCION CIRCULO
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio)
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const radio = input.value;

    const area = areaCirculo(radio)
    alert(area);
}

// FIN SECCION CIRCULO
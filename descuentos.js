//const precioOriginal = 125;
//const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");        
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento
}

function onClickCuponDiscount(){
    const input2Price = document.getElementById("InputPrice2");
    const price2Value = input2Price.value;
    const inputCupon = document.getElementById("InputCupon");
    const inputcupon = inputCupon.value;

    if (inputcupon == 222 )
    {    
        const discountValue = 15 ;
        const precioConDescuento = calcularPrecioConDescuento(price2Value, discountValue);                                    
        const resultP2 = document.getElementById("ResultP2");        
        resultP2.innerText = "El precio con su cupon tipo A son: $" + precioConDescuento
    } 
    else if (inputcupon == 444 )
    {   
         const discountValue = 30 ;
         const precioConDescuento = calcularPrecioConDescuento(price2Value, discountValue);
        const resultP2 = document.getElementById("ResultP2");        
        resultP2.innerText = "El precio con su cupon tipo B son: $" + precioConDescuento
    }    
    else if (inputcupon == 667 )
    {   
         const discountValue = 50 ;
         const precioConDescuento = calcularPrecioConDescuento(price2Value, discountValue);
        const resultP2 = document.getElementById("ResultP2");        
        resultP2.innerText = "El precio con su cupon tipo C son: $" + precioConDescuento
    }    
    else{ 
        const resultP2 = document.getElementById("ResultP2");        
        resultP2.innerText = "Cupon invalido"
        return console.log ({
            " El numero del cupon ingresado es " :
              inputCupon,
        })
    }
}
//console.log({
 //   precioOriginal,
 //   descuento,
  //  porcentajePrecioConDescuento,
   // precioConDescuento,
//})
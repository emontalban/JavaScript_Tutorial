// Esta función recibe un precio base y una extensión de céntimos.
// Su objetivo es normalizar el precio para que siempre termine
// con un valor atractivo (por ejemplo, .95), como es común en e-commerce.
//
// Primero elimina los decimales del precio original usando Math.floor,
// quedándose solo con la parte entera.
// Después añade la extensión proporcionada.
// Finalmente devuelve el nuevo precio formateado.



function prettyPrice(precioBase, extension){
    let prize = Math.floor(precioBase);
    let centimos = 0;
  
      
    if (extension >= 1){
       centimos =  extension  / 100;
    }
   
    return  prize + centimos

}
prettyPrice(3.9, 0.68)
prettyPrice(3.9, 68)

// otra opcion
function prettyPriceOne(precioBase, extension){
    let prize = Math.floor(precioBase);

 
    if (extension >= 1){
       extension =  extension  / 100;
    }
   
    return  prize + extension

}
prettyPriceOne(3.9, 0.68)
prettyPriceOne(3.9, 68)

//tercera Version


const prettyPriceTwo = (grossPrice, extension) => {
  if (Number.isInteger(extension)) {
    extension = extension * 0.01;
  }
  return Math.floor(grossPrice) + extension;
};

prettyPriceTwo(2.2, 0.95); 
prettyPriceTwo(2.2, 95);
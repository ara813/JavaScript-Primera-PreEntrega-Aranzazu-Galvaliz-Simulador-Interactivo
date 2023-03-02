// Prototipo JS pagina de fotografia \\
let nombre = prompt("Bienvenid@ a RAME :) Ingrese su nombre");
console.log (nombre)
for (let i=0; i<2; i++){
    if (nombre !== ""){
        console.log("introdujo nombre")
      break
        } else {
          nombre = prompt("Bienvenid@ a RAME :) Ingrese su nombre");
        }
        }
let fotografia = prompt("Ingrese el nombre de la fotografia que quiere comprar")
console.log(fotografia)
for (let i=0; i<2; i++){
    if (fotografia !== ""){
        console.log("introdujo nombre de foto")
      break
        } else {
          fotografia = prompt("Ingrese el nombre de la fotografia que quiere comprar");
        }
        }
let mail = prompt ("Introduzca su correo electronico")
console.log(mail)
for (let i=0; i<2; i++){
    if (mail !== ""){
        console.log("introdujo mail")
      break
        } else {
          mail = prompt("Introduzca su correo electronico");
        }
        }
  
  
  console.log (1000)
  alert ("El costo de la imagen inicialmente es de $1000");

 function sumar(parametro0, parametro1 , parametro2, parametro3, parametro4, parametro5){
  console.log("LAMINA: "+parametro0);
  console.log("MARCO: "+parametro1);
  console.log("VIDRIO: "+parametro2);
  console.log("CANCION: "+parametro3);
  console.log("TEXTO: "+parametro4);
  console.log("ENVIO: "+parametro5);
  let total = parametro0 + parametro1 + parametro2 + parametro3 + parametro4 + parametro5;
  console.log(total);
  alert ("Hola " + nombre + " el costo de tu compra por la fotografia "+fotografia+" es de " + total)
}
let num0 = Number(1000);
let num1 = parseFloat(prompt("El costo del marco es de $4000. Ingrese 4000 si le gustaria agregar un marco sino ingrese 0"));
if (num1 != 4000){
  alert ("Continuemos su compra");
  console.log (0)
  num1 = 0
  }
  else {
  alert ("Ha agregado un marco a su fotografia: $4000")
  console.log(4000)
}
let num2= parseFloat(prompt("El costo del vidrio es de $3000. Ingrese 3000 si le gustaria agregar un vidrio sino ingrese 0"));
if (num2 != 3000){
  alert ("Continuemos su compra");
  console.log(0)
  num2 = 0
}
else {
  alert ("Ha agregado un vidrio a su fotografia: $3000")
  console.log(3000)
}   
let num3 = parseFloat(prompt("El costo de incrustar una cancion es de $2000. Ingrese 2000 si le gustaria incrustar una cancion sino ingrese 0"));
if (num3 != 2000){
 alert ("Continuemos su compra");
 console.log (0)
 num3 = 0
}
else {
 alert ("Ha agregado una cancion incrustada a su fotografia: $2000")
 console.log(2000)
 let song = prompt ('Ingrese el nombre de la cancion como figura en Spotify y al lado el nombre del artista')
 console.log(song)
 alert ("Usted a ingresado la cancion " + song)
}
let num4 = parseFloat(prompt("El costo del texto adiciol es de $1000. Ingrese 1000 si le gustaria agregar un texto adicional sino ingrese 0"));
if (num4 != 1000){
  alert ("Continuemos su compra");
  console.log(0)
  num4 = 0
}
else {
  alert ("Ha agregado un texto adicional a su fotografia: $1000")
  console.log(1000)
  let text = prompt ('Ingrese el texto adicional, fecha, nombre o frase que quiere agregar y la zona de la imagen donde le gustaria que este')
  console.log(text)
  alert ("Usted a agregado  " + text)
}  
let num5 = parseFloat(prompt("El costo del envio es de $3000. Ingrese 3000 si le gustaria recibir su fotografia a domicilio sino ingrese 0"));
if (num5 != 3000){
  alert ("Continuemos su compra");
  console.log(0)
  num5 = 0
}
else {
  alert ("Ha seleccionado su fotografia con envio a domicilio: $3000")
  console.log(3000)
  let direccion = prompt ('Ingrese su direccion y codigo postal')
  console.log(direccion)
  alert ("Su compra llegara a la siguiente direccion: " + direccion)
  
}  
sumar(num0, num1 , num2, num3, num4, num5);
function saludoFinal () {
  let saludo = ( "Gracias "+ nombre +" por tu compra nos comunicaremos contigo al mail " + mail + " tambien puedes comunicarte al whatsapp 3436-413715 por cualquier duda :)");
  alert (saludo);    
  console.log( "Gracias "+ nombre +" por tu compra nos comunicaremos contigo al mail " + mail + " tambien puedes comunicarte al whatsapp 3436-413715 por cualquier duda :)")  
}
saludoFinal()
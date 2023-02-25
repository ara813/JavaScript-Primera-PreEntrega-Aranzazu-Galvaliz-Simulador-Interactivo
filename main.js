// Prototipo pagina de fotografia //
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

let marco = parseInt (prompt ("El costo del marco es de $4000. Ingrese 4000 si le gustaria agregar un marco sino deje en blanco"));
 if (!marco){
  alert ("Continuemos su compra");
  console.log (0)
  marco = 0
}
else {
  alert ("Ha agregado un marco a su fotografia: $4000")
  console.log(4000)
}
                        
let vidrio = parseInt (prompt ("El costo del vidrio es de $3000. Ingrese 3000 si le gustaria agregar un vidrio sino deje en blanco"));
 if (!vidrio){
  alert ("Continuemos su compra");
  console.log(0)
  vidrio = 0
}
else {
  alert ("Ha agregado un vidrio a su fotografia: $3000")
  console.log(3000)
}                        

let cancion = parseInt (prompt ("El costo de incrustar una cancion es de $2000. Ingrese 2000 si le gustaria incrustar una cancion sino deje en blanco"));
 if (!cancion){
  alert ("Continuemos su compra");
  console.log (0)
  cancion = 0
}
else {
  alert ("Ha agregado una cancion incrustada a su fotografia: $2000")
  console.log(2000)

}  
let texto = parseInt (prompt ("El costo del texto adiciol es de $1000. Ingrese 1000 si le gustaria agregar un texto adicional sino deje en blanco"));
 if (!texto){
  alert ("Continuemos su compra");
  console.log(0)
  texto = 0
}
else {
  alert ("Ha agregado un texto adicional a su fotografia: $1000")
  console.log(1000)
}  
let envio = parseInt (prompt ("El costo del envio es de $3000. Ingrese 3000 si le gustaria recibir su fotografia a domicilio sino deje en blanco"));
 if (!envio){
  alert ("Continuemos su compra");
  console.log(0)
  envio = 0
}
else {
  alert ("Ha seleccionado su fotografia con envio a domicilio: $3000")
  console.log(3000)
  
}  
let presupuesto = (marco + vidrio + cancion + texto + envio);
console.log (presupuesto)


function mostrarResultado (){
let resultado = ( "Hola "+ nombre +" el presupuesto para la fotografia " + fotografia +" es de $"+ presupuesto);
alert (resultado);             
 }
 mostrarResultado ()

let previoRetiro = ( "Antes de que te vayas veamos los detalles")
alert (previoRetiro)

let song = prompt ("Si usted agrego una cancion incrustada a su fotografia ingrese SI sino es asi ingrese NO")
console.log(song)
switch (song){
  case "SI" :
  let cancionIncrustada = prompt ("Ingrese el nombre de la cancion como aparece en spotify seguido del nombre del artista")
  alert ("Usted a elegido la cancion " + cancionIncrustada)
  console.log ("Introdujo " + cancionIncrustada)
  break;
  case "si":
  let cancionIncrustada1 = prompt ("Ingrese el nombre de la cancion como aparece en spotify seguido del nombre del artista")
  alert ("Usted a elegido la cancion " + cancionIncrustada1)
  console.log ("Introdujo " + cancionIncrustada1)
  break;
  case  "Si":
  let cancionIncrustada2 = prompt ("Ingrese el nombre de la cancion como aparece en spotify seguido del nombre del artista")
  alert ("Usted a elegido la cancion " + cancionIncrustada2)
  console.log ("Introdujo " + cancionIncrustada2)
  break;
  case "NO":
  let noSong = ("Sigamos adelante")
  alert (noSong)
  console.log("No ingreso cancion")
  break;
  case "no":
  let noSong1 = ("Sigamos adelante")
  alert (noSong1)
  console.log("No ingreso cancion")
  break;
  case "No":
  let noSong2 = ("Sigamos adelante")
  alert (noSong2)
  console.log("No ingreso cancion")
  break;
  default: 
  let problemas = ("Si tuvo problemas en este campo comuniquese al 3436-413715 una vez finalizado el tramite");
  alert (problemas);
  console.log ("Problemas")
  
}

let text = prompt ("Si usted agrego un texto adicional a su fotografia ingrese SI sino es asi ingrese NO")
console.log(text)
switch (text){
  case "SI":
  let textoAdd = prompt ("Ingrese el nombre, la frase o la fecha que desea agregar entre comillas y la zona donde le gustaria que aparzca")
  alert ("Usted a elegido agregar " + textoAdd)
  console.log ("Introdujo " + textoAdd)
  break;
  case "si":
  let textoAdd1 = prompt ("Ingrese el nombre, la frase o la fecha que desea agregar entre comillas y la zona donde le gustaria que aparzca")
  alert ("Usted a elegido agregar " + textoAdd1)
  console.log ("Introdujo" + textoAdd1)
  break;
  case "Si":
  let textoAdd2 = prompt ("Ingrese el nombre, la frase o la fecha que desea agregar entre comillas y la zona donde le gustaria que aparzca")
  alert ("Usted a elegido agregar " + textoAdd2)
  console.log ("Introdujo" + textoAdd2)
  break;
  case "NO":
  let noText = ("Sigamos adelante")
  alert (noText)
  console.log ("No introdujo texto")
  break;
  case "no":
  let noText1 = ("Sigamos adelante")
  alert (noText1)
  console.log ("No introdujo texto")
  break;
  case "No":
  let noText2 = ("Sigamos adelante")
  alert (noText2)
  console.log ("No introdujo texto")
  break;
  default: 
  let problemas = ("Si tuvo problemas en este campo comuniquese al 3436-413715 una vez finalizado el tramite");
  alert (problemas);
  console.log ("Problemas")
}

let direction = prompt ("Si usted ha requerido el envio a domicilio para su fotografia ingrese SI sino es asi ingrese NO")
console.log(direction)
switch (direction){
  case "SI":
  let donde = prompt ("Ingrese su direccion y codigo postal")
  alert ("Usted a elegido la direccion " + donde)
  console.log ("Introdujo la direccion " + donde)
  break;
  case "si":
  let donde1 = prompt ("Ingrese su direccion y codigo postal")
  alert ("Usted a elegido la direccion " + donde1)
  console.log ("Introdujo la direccion " + donde1)
  break;
  case "Si":
  let donde2 = prompt ("Ingrese su direccion y codigo postal")
  alert ("Usted a elegido la direccion " + donde2)
  console.log ("Introdujo la direccion " + donde2)
  break;
  case "NO":
  let noDirection = ("Sigamos adelante")
  alert (noDirection)
  console.log ("No introjo direccion")
  break;
  case  "no":
  let noDirection1 = ("Sigamos adelante")
  alert (noDirection1)
  console.log ("No introjo direccion")
  break;
  case "No":
  let noDirection2 = ("Sigamos adelante")
  alert (noDirection2)
  console.log ("No introjo direccion")
  break;
  default: 
  let problemas = ("Si tuvo problemas en este campo comuniquese al 3436-413715 una vez finalizado el tramite");
  alert (problemas);
  console.log ("Problemas")
}

function saludoFinal () {
  let saludo = ( "Gracias "+ nombre +" por tu compra nos comunicaremos contigo al mail " + mail + " tambien puedes comunicarte al whatsapp 3436-413715 por cualquier duda :)");
  alert (saludo);      
}
saludoFinal()
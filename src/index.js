import validator from './validator.js';

function validarT() {

    let tarjeta= document.getElementById("tarjeta").value;

    let result= isValid("tarjeta");
    console.log(result);

    let cover=maskify("tarjeta");
    console.log(cover);

    let message= document.getElementById("mensaje");
    message.innerHTML+="<p>"+cover+"</p>";

      if(tarjeta==true){
        message.innerHTML+="<p>Tarjeta válida</p>";
      }

      else{
        message.innerHTML+="<p>Tarjeta invalida</p>";
      }


console.log(validator);

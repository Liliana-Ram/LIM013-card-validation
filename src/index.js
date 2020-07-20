import validator from './validator.js';

const siguiente=document.getElementById("siguiente");
siguiente.onclick= resumenDatos;

function resumenDatos(){

  let nombre = document.getElementById("nombre");
  let username = nombre.value;

  if (username== ''){
    document.getElementById("alerta-nombre").innerHTML = "Campo obligatorio";
  return false;} 

  let email = document.getElementById("email");
  let correo = email.value;


  let celular = document.getElementById("celular");
  let movil = celular.value;


  document.getElementById("r-nombre").innerHTML = (username)
  document.getElementById("r-email").innerHTML = (correo)
  document.getElementById("r-telefono").innerHTML = (movil)

  document.getElementById('cont-datos').style.display = 'none';
  document.getElementById('resumen-d').style.display = 'block';
  document.getElementById('cont-tarj').style.display = 'block';
}

const modificar=document.getElementById("modificar");
modificar.onclick= returnD;

function returnD(){

  document.getElementById('resumen-d').style.display = 'none';
  document.getElementById('cont-datos').style.display = 'block';
}


const validar=document.getElementById("validar");
validar.onclick= verificar;

function verificar() {

  let tarjeta= document.getElementById("tarjeta").value;

  let result= validator.isValid(tarjeta);
  console.log(result);

  let cover= validator.maskify(tarjeta);
  console.log(cover);

  let message= document.getElementById("mensaje");
  message.innerHTML+="<p>"+cover+"</p>";

  let messageError= document.getElementById("error");

    if(tarjeta=true){
      message.innerHTML+="<p>Tarjeta válida</p>";
      document.getElementById('cont-tarj').style.display = 'none';
      document.getElementById('val-tarj').style.display = 'block';
    }

    else{
      messageError.innerHTML+="<p>Tarjeta invalida</p>";
    }

  }

  
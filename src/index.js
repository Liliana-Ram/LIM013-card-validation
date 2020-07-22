import validator from './validator.js';

/* Funcionalidades para box de llenar datos */
const siguiente = document.getElementById("siguiente");
siguiente.onclick = resumenDatos;

function resumenDatos() {

  let nombre = document.getElementById("nombre");
  let username = nombre.value;
  let email = document.getElementById("email");
  let correo = email.value;
  let celular = document.getElementById("celular");
  let movil = celular.value;

  if (username === '' || correo === '' || movil === '') {
    document.getElementById("alerta-datos").innerHTML = "* Todos los campos son obligatorios";
    return false;
  }

  document.getElementById("r-nombre").innerHTML = (username)
  document.getElementById("r-email").innerHTML = (correo)
  document.getElementById("r-telefono").innerHTML = (movil)
  document.getElementById('cont-datos').style.display = 'none';
  document.getElementById('resumen-d').style.display = 'block';
  document.getElementById('cont-tarj').style.display = 'block';
}

const modificar = document.getElementById("modificar");
modificar.onclick = returnD;

function returnD() {

  document.getElementById('resumen-d').style.display = 'none';
  document.getElementById('cont-datos').style.display = 'block';
}
/* Fin de funcionalidades para box de llenar datos */

/* Funcionalidades para box de validar tarjeta */
const validar = document.getElementById("validar");
validar.onclick = verificar;

function verificar() {

  let tarjeta = document.getElementById("tarjeta").value;
  let titular = document.getElementById("titular").value;
  let fecha = document.getElementById("fecha").value;
  let cvv = document.getElementById("cvv").value;

  let result = validator.isValid(tarjeta);
  console.log(result);
  let cover = validator.maskify(tarjeta);
  console.log(cover);

  if (tarjeta === '' || titular === '' || fecha === '' || cvv === '') {
    document.getElementById("alerta-tarjeta").innerHTML = "* Todos los campos son obligatorios";
    return false;
  }

  let message = document.getElementById("mensaje");
  let numerosCover = document.getElementById("cubierto");
  let messageError = document.getElementById("error");

  if (result == true) {
    numerosCover.innerHTML += cover;
    message.innerHTML += "<p>Tarjeta válida</p>";
    document.getElementById('cont-tarj').style.display = 'none';
    document.getElementById('val-tarj').style.display = 'block';
  }
  else {
    messageError.innerHTML += "<p>Tarjeta invalida</p>";
  }
}

const modificarT = document.getElementById("modificar-t");
modificarT.onclick = returnT;

function returnT() {
  document.getElementById('val-tarj').style.display = 'none';
  document.getElementById('cont-tarj').style.display = 'block';
}

const pagar = document.getElementById("pagar");
pagar.onclick = pay;

function pay() {
  let nombreF = document.getElementById("nombre").value;

  document.getElementById("nombre-f").innerHTML = (nombreF)
  document.getElementById('pasarela').style.display = 'none';
  document.getElementById('agradecimiento').style.display = 'block';
}

/* Fin de funcionalidades para box de validar tarjeta */


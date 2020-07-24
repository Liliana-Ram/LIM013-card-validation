import validator from "./validator.js";

/* Funcionalidades para box de llenar datos */
const siguiente = document.getElementById("siguiente");

function resumenDatos() {

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const celular = document.getElementById("celular").value;

  if (nombre === '' || email === '' || celular === '') {
    document.getElementById("alerta-datos").innerHTML = "* Todos los campos son obligatorios";
    return false;
  }

  document.getElementById("cont-datos").style.display = "none";
  document.getElementById("resumen-d").style.display = "block";
  document.getElementById("cont-tarj").style.display = "block";
  document.getElementById("r-nombre").innerHTML = (nombre)
  document.getElementById("r-email").innerHTML = (email)
  document.getElementById("r-telefono").innerHTML = (celular)
}

siguiente.addEventListener("click", resumenDatos);

const modificar = document.getElementById("modificar");

function returnD() {

  document.getElementById("resumen-d").style.display = "none";
  document.getElementById("cont-datos").style.display = "block";
}

modificar.addEventListener("click", returnD);
/* Fin de funcionalidades para box de llenar datos */

/* Funcionalidades para box de validar tarjeta */
const validar = document.getElementById("validar");

function verificar() {

  const tarjeta = document.getElementById("tarjeta").value;
  const titular = document.getElementById("titular").value;
  const fecha = document.getElementById("fecha").value;
  const cvv = document.getElementById("cvv").value;


  if (tarjeta === '' || titular === '' || fecha === '' || cvv === '') {
    document.getElementById("alerta-tarjeta").style.display = "block";
    document.getElementById("alerta-tarjeta").innerHTML = "* Todos los campos son obligatorios";
    return false;
  }

  if (tarjeta.length > 16 || tarjeta.length < 16) {
    document.getElementById("alerta-tarjeta").style.display = "none";
    document.getElementById("error-cant-d").style.display = "block";
    document.getElementById("error-cant-d").innerHTML = "Se requiere 16 dígitos";
    return false;
  }

  const result = validator.isValid(tarjeta);
  const cover = validator.maskify(tarjeta);

  const message = document.getElementById("mensaje");
  const numerosCover = document.getElementById("cubierto");
  const messageError = document.getElementById("error");

  if (result == true) {
    document.getElementById("cont-tarj").style.display = "none";
    document.getElementById("val-tarj").style.display = "block";
    numerosCover.innerHTML = cover;
    message.innerHTML = "<p>Tarjeta válida</p>";
  }
  else {
    document.getElementById("error-cant-d").style.display = "none";
    document.getElementById("alerta-tarjeta").style.display = "none";
    document.getElementById("error").style.display = "block";
    messageError.innerHTML = "<p>Tarjeta invalida</p>";
  }
}

validar.addEventListener("click", verificar);

const modificarT = document.getElementById("modificar-t");

function returnT() {
  document.getElementById("val-tarj").style.display = "none";
  document.getElementById("cont-tarj").style.display = "block";
  document.getElementById("error-cant-d").style.display = "none";
  document.getElementById("error").style.display = "none";
  document.getElementById("error-cant-d").style.display = "none";
  document.getElementById("tarjeta").value = "";
}

modificarT.addEventListener("click", returnT);

const pagar = document.getElementById("pagar");

function pay() {
  const nombreF = document.getElementById("nombre").value;

  document.getElementById("pasarela").style.display = "none";
  document.getElementById("agradecimiento").style.display = "block";
  document.getElementById("nombre-f").innerHTML = (nombreF)
}

pagar.addEventListener("click", pay);
/* Fin de funcionalidades para box de validar tarjeta */


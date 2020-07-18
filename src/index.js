import validator from './validator.js';

const siguiente=document.getElementById("siguiente");
siguiente.onclick= resumenDatos;

function resumenDatos(){

  let nombre = document.getElementById("nombre");
  let username = nombre.value;

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


function saludomensaje(){
  const nombre= document.getElementById("nombre").value;
  const saludo= document.getElementById("saludo")
  saludo.innerHTML="<p> hola "+ nombre +"</p>";
}

function verificar() {

  let tarjeta= document.getElementById("tarjeta").value;

  let result= isValid(tarjeta);
  console.log(result);

  let cover= maskify(tarjeta);
  console.log(cover);

  let message= document.getElementById("mensaje");
  message.innerHTML+="<p>"+cover+"</p>";

    if(tarjeta==true){
      message.innerHTML+="<p>Tarjeta válida</p>";
    }

    else{
      message.innerHTML+="<p>Tarjeta invalida</p>";
    }

  }

  function isValid(creditCardNumber){
    let suma= 0;
    for(i=0; i<creditCardNumber.length; i++){
      if(i%2!=0){
       let digito= creditCardNumber[i];
       if(digito>9){
         let digito1= parseInt(digito/10);
         let digito2= digito%10;
         digito=digito1+digito2;
       } 
       creditCardNumber[i]=digito;
      }

      suma=suma+parseInt(creditCardNumber[i]);
    }
    if (suma%10==0){
      return true;
    }
    else{
      return false;
    }
  }

  function maskify(creditCardNumber){
    let longitudNumero= creditCardNumber.length;
    let result="";
    if(longitudNumero>4){
      for(i=0; i<creditCardNumber.length; i++){
        if(i>=creditCardNumber.length-4){
          result+=creditCardNumber[i];
        }
        else{
          result+="*";
        }
      }
    }
    else{
      result=creditCardNumber
    }
    return result;
  }

  
const validator = {

  isValid: function (creditCardNumber) {
    const cadena = creditCardNumber.toString();
    const longitud = cadena.length;
    let cifra = "";
    let cifra_cad = "";
    let suma = 0;
    for (let i = 0; i < longitud; i += 2) {
      cifra = parseInt(cadena[i]) * 2;
      if (cifra > 9) {
        cifra_cad = cifra.toString();
        cifra = parseInt(cifra_cad[0]) +
          parseInt(cifra_cad[1]);
      }
      suma += cifra;
    }
    for (let i = 1; i < longitud; i += 2) {
      suma += parseInt(cadena[i]);
    }

    if ((suma % 10) == 0) {
      return true;
    } else {
      return false
    }
  }

  , maskify: function (creditCardNumber) {
    const longitudNumero = creditCardNumber.length;
    let result = "";
    if (longitudNumero > 4) {
      for (let i = 0; i < creditCardNumber.length; i++) {
        if (i >= creditCardNumber.length - 4) {
          result += creditCardNumber[i];
        }
        else {
          result += "*";
        }
      }
    }
    else {
      result = creditCardNumber
    }
    return result;
  }

};

export default validator;

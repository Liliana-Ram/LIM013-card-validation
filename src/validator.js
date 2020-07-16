const validator = {


      function isValid(creditCardNumber){
        let suma= 0;
        for(i = 0; i<creditCardNumber.length; i++){
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
        let resultado="";
        if(longitudNumero>4){
          for(i=0; i<creditCardNumber.length; i++){
            if(i>=creditCardNumber.length-4){
              resultado+=creditCardNumber[i];
            }
            else{
              resultado+="*";
            }
          }
        }
        else{
          resultado=creditCardNumber
        }
        return resultado;
      }






    
  }
};

export default validator;

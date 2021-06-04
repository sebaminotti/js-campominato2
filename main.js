
function generaNumeri (min, max){
    return Math.floor(Math.random()*(max - min ) + min);
} 
bombe = [];

while(bombe.length < 16){
  var numero = generaNumeri(1,100)
         if(!bombe.includes(numero)){
              bombe.push(numero)
                    }
                    
}
console.log(bombe);






var livello = prompt('facile medio difficile')
var tentativi 
if(livello=='facile'){
    alert('HAI SCELTO FACILE ! DEVI INSERIRE 5 NUMERI SENZA FAR SCOPPIARE NESSUNA BOMBA PER VINCERE')
    tentativi=5
}else if(livello=='medio'){
    alert('HAI SCELTO MEDIO ! DEVI INSERIRE 25 NUMERI SENZA FAR SCOPPIARE NESSUNA BOMBA PER VINCERE')
    tentativi=25
} else if( livello=='difficile'){
    alert('HAI SCELTO DIFFICILE ! DEVI INSERIRE 84 NUMERI SENZA FAR SCOPPIARE NESSUNA BOMBA PER VINCERE')
    tentativi=84
}





var numeriUtente = []

for(var i = 0; i < tentativi; i ++){

    var utente = Number(prompt('inserisci il tuo numero ! da 1 a 100'))
     if(!numeriUtente.includes(utente)){
            if (bombe.includes(utente)) {
                 alert('BOOMMMMM  💣☢☢☢')
                      break;
            }


        numeriUtente.push(utente);
           console.log(numeriUtente);
     }  else {

        alert(' numero gia inserito scegli un altro numero !!')
                 i--
     }  

     if ((utente < 1)||(utente > 100)) {
         
        alert('invalid number inserisci un numero da 1 a 100')
            i--
     } else if ( (isNaN(utente))){

        alert('non valido ⛔ riprova con un valore numerico ')
            i--
     }
}






if(numeriUtente.length == tentativi ){
    alert( ' bravo hai vinto !!' )
       var ricominciamo = prompt('vuoi rigiocare ? si no')
           if(ricominciamo=='si'){
              location.reload()
                            }  else {
                               window.close()
                                                }
}







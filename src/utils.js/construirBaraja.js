import shuffle from 'lodash.shuffle'
import FontAwesomeClasses from './fontAwesomeClasses'
const NUMERO_DE_CARTAS = 20;

export default () => {
    const fontAwesomeClasses = FontAwesomeClasses()
    let cartas = []

    //seleccionar algunas cartas de las que tiene fontAwesome
    while (cartas.length < NUMERO_DE_CARTAS) {
        // indice aleatorio indica la clase de fontAwesome
         const index = Math.floor(Math.random() * fontAwesomeClasses.length )
         //console.log(index);
         //elimiar la  clase y asignarsela al icono el icono
         const carta = {
             icono:fontAwesomeClasses.splice(index, 1)[0],
            fueAcertada:false,
          
         }
         cartas.push(carta)
         //clonar carta para que la referencia sea diferente
         cartas.push({...carta})
        
         
    }
    //mesclar las cartas  en una nueva ronda.
    return shuffle(cartas);
}
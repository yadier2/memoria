import React, { useEffect, useState } from 'react'
import ReactCardFlip from 'react-card-flip';

export const Carta = ({ icono, seleccionarCarta,estaSiendoComparada,fueAdivinada}) => {

    return (

        <div className="carta" >
            
            <ReactCardFlip isFlipped={estaSiendoComparada || fueAdivinada }>
             
             <div className="portada" onClick={seleccionarCarta}>
             <i>?</i>
             </div>

             <div className="contenido" onClick={seleccionarCarta}>
                 <i className={`fa ${icono} fa-4x`}></i>
             </div>
         </ReactCardFlip>

        </div>
    )
}

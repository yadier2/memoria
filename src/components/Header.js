import React from 'react'

export const Header = ({ numeroIntentos, resetPartida }) => {
    return (
        <div className="header">
            <h2 style={{ textAlign: 'center', margin: 0 }}>Memoriza</h2>
           
            <div style={{display: 'flex',justifyContent: 'space-evenly'}
            }>
                <h3  className="reiniciar" onClick={resetPartida}>Reiniciar</h3>
                <h3> Intentos : {numeroIntentos}
                </h3>
            </div>

        </div>
    )
}

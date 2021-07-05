
import { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';



import { Header } from './components/Header';
import { Tablero } from './components/Tablero';
import construirBaraja from './utils.js/construirBaraja'

const getEstadoInicial = () => {
  const baraja = construirBaraja()
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    numeroIntentos: 0
  }
}

function App() {

  const [state, setState] = useState(getEstadoInicial())
  const [play, setPlay] = useState(false)

  const seleccionarCarta = (carta) => {
    //console.log("click");
    if (
      state.estaComparando || state.parejaSeleccionada.indexOf(carta) > -1 || carta.fueAdivinada) {
      //console.log("click X")
      return;
    }

    const compararParejas = (parejaSeleccionada) => {
      setState({
        ...state,
        parejaSeleccionada,
        estaComparando: true
      })
      setTimeout(() => {
        const [primeraCarta, segundaCarta] = parejaSeleccionada;
        // console.log(primeraCarta,segundaCart);
        let baraja = state.baraja;

        if (primeraCarta.icono === segundaCarta.icono) {
          baraja = baraja.map((carta) => {
            if (carta.icono !== primeraCarta.icono) {
              return carta
            }
            return { ...carta, fueAdivinada: true }
          })
        }
        verificarGanador(baraja)

        setState({
          ...state,
          parejaSeleccionada: [],
          baraja,
          estaComparando: false,
          numeroIntentos: state.numeroIntentos + 1
        })
        //console.log(baraja);
      }, 500)


    }
    const verificarGanador = (baraja) => {
     
        if (baraja.filter((carta) => !carta.fueAdivinada).length === 0) {
      //  alert(`Ganaste en ${state.numeroIntentos} intentos`)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Ganaste en ${state.numeroIntentos} intentos`,
        showConfirmButton: true,
        
      })
      }
    }

    const parejaSeleccionada = [...state.parejaSeleccionada, carta]
    setState(
      { ...state, parejaSeleccionada })

    if (parejaSeleccionada.length === 2) {
      compararParejas(parejaSeleccionada)
    }

  }

  const resetPartida = () => {
    Swal.fire({
      title: 'Reiniciar',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        setState(getEstadoInicial())
    }
      
    })
  }
  return (
    <div>
      {
        play ? 
      <div>

      <Header
        numeroIntentos={state.numeroIntentos}
        resetPartida={resetPartida} />

      <Tablero baraja={state.baraja}
        parejaSeleccionada={state.parejaSeleccionada}
        seleccionarCarta={(carta) => seleccionarCarta(carta)} />
        </div>
        :
        <div className="bienvenido">
          <img  className="imagenLogo"
          src="https://image.freepik.com/vector-gratis/fondo-formas-escena-abstracta-3d_52683-59415.jpg" alt="" />
      <h1 className=""
          style={{marginBottom: 0}}>Memoriza</h1>
      <h2
      style={{borderBlockEnd:'1px solid', padding:'0 0 10px 0'}}>
      <span onClick={() =>setPlay(true)}>JUGAR</span>

      </h2>
        </div>
      }
      </div>
  );
}

export default App;

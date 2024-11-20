import { useState } from "react"
import usePartidaStore from "../../store/partida";
import usePlayersStore from "../../store/players";
import { useNavigate } from "react-router-dom";
import RegJugadores from "../../components/inicio/RegJugadores";
import NJugadores from "../../components/inicio/NJugadores";

const Inicio = () => {

  const navigate = useNavigate();
  const [nick, setNick] = useState([])
  const { getCard, nCartas, initMesa } = usePartidaStore(state => ({
    shuffleCards: state.shuffleCards,
    mazo: state.mazo,
    getCard: state.getCard,
    nCartas: state.nCartas,
    initMesa: state.initMesa,
    mesa: state.mesa
  }));

  const { createPlayer, nPlayers, setNPlayers } = usePlayersStore(state => ({
    createPlayer: state.createPlayer,
    players: state.players,
    nPlayers: state.nPlayers,
    setNPlayers: state.setNPlayers,

  }))

  const handleClickJugar = () => {
    nick.length ? generarPartida() : alert("Debes introducir un Nick")
  };

  const handleClickNJugadores = (num) => setNPlayers(num);

  const generarPartida = () => {

    for (var i = 1; i <= nPlayers; i++) {
      let cards = [];
      for (let i = 1; i <= nCartas; i++) {
        cards = cards.concat(getCard());
      }
      createPlayer(i, nick[i], cards)

    }
    initMesa();
    navigate('/Partida')

  }
  //console.log(nPlayers);
  return (
    <div className=" bg-fondo bg-cover">
      {nPlayers ? <RegJugadores onHandleClickJugar={handleClickJugar} setNick={setNick} nick={nick} /> : <NJugadores onHandleClickNJugardor={handleClickNJugadores} />}
    </div>
  )


}

export default Inicio
import usePlayersStore from "../../store/players";
import { useState } from "react";
import logo from "../../assets/Logo.png"

const RegJugadores = ({ onHandleClickJugar, setNick, nick }) => {

  const { nPlayers } = usePlayersStore(state => ({
    nPlayers: state.nPlayers,
  }))

  const [nickL, setNickL] = useState(["", "", "", "", ""])

  const handleChangeText = (e) => {

    const nickAux = nickL.map((nick, index) => {
      if (Number(index) === Number(e.target.dataset.index)) {
        nick = e.target.value
      }
      return nick
    })
    setNickL(nickAux)
    setNick(nickAux)
  }

  const containerReturn = (nPlayers) => {
    var rows = [];
    for (let i = 1; i <= nPlayers; i++) {
      rows.push(
        <div key={i} className="flex flex-row place-content-center m-2">
          <label className="flex mx-2 text-2xl font-lilita text-white">Player {i}</label>
          <input
            type="text"
            data-index={i}
            onChange={handleChangeText}
            value={nickL[i]}
            className='flex w-32 h-8 p-3 rounded-lg border-2 bg-transparent text-white font-lilita '>
          </input>
        </div>
      )
    }
    return rows
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <img src={logo} alt='Logo' className=" h-48 top-10 absolute" />
      <div className=" font-lilita text-white text-6xl">
        Enter the names
      </div>
      <div className="m-5">
        {containerReturn(nPlayers)}
      </div>
      <button
        type="button"
        onClick={onHandleClickJugar}
        className='w-32 h-16 place-content-center border-4 border-white rounded-3xl text-3xl text-white font-lilita hover:bg-yellow-400 transition-all hover:scale-110 hover:shadow-2xl shadow-black hover:text-white m-5'>
        Play
      </button>
    </div>
  )
}

export default RegJugadores
import { useEffect } from "react"
import usePartidaStore from "../../store/partida"
import usePlayersStore from "../../store/players"

const  ListPlayers = () => {

  const { players } = usePlayersStore((state) => ({
    players: state.players
  }))

  const { turnoPlayer } = usePartidaStore((state) => ({
    turnoPlayer: state.turnoPlayer
  }))
  useEffect(() => { }, [turnoPlayer])

  const containerReturn = (cards) => {
    if (cards.length) {
      return (
        cards?.map((card, index) => {
          return <div className="w-50 rounded-lg p-1 text-xs overflow-hidden bg-card bg-center bg-cover bg-yellow-500 m-1 text-center" key={index}> {card.title}</div>
        })
      )
    } else {
      return <div className=" text-yellow-400 text-2xl text-center font-lilita">Finished</div>

    }
  }

  return (
    <div className="w-full">
      <div className=" font-lilita  text-center text-2xl text-amber-100 "> List Players</div>
      {
        players.map((player, index) => {
          return (
            <div key={index} className={`py-2 border-2  border-solid rounded-lg my-2 /*bg-amber-300*/ ${turnoPlayer === index ? ' border-red-600  shadow-xl' : 'border-white'} p-2`}>
              <div className="text-bold flex font-lilita text-white " >
                <p className="flex-1">Player: {player.nick}</p>
                <p className="text-right">Cards: {player.cards.length}</p>
              </div>
              <div key={index} className="max-h-36 overflow-y-auto">
                {containerReturn(player.cards)}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListPlayers;
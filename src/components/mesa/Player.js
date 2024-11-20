import { useEffect, useState } from "react";
import usePlayersStore from "../../store/players";
import Card from "./Card";
import usePartidaStore from "../../store/partida";

const Player = () => {

  const [player, setPlayer] = useState([])

  const { getPlayer, players } = usePlayersStore(state => ({
    getPlayer: state.getPlayer,
    players: state.players
  }))

  const { turnoPlayer } = usePartidaStore(state => ({
    turnoPlayer: state.turnoPlayer
  }))

  useEffect(() => {
    setPlayer(getPlayer(turnoPlayer))
  }, [players, turnoPlayer, getPlayer])


  return (
    <div>
      <div className="flex flex-col border-4 mx-10 p-10 rounded-lg border-white overflow-x-auto ">
        <div className="flex flex-full flex-row place-content-center">
          {
            player.cards?.map((carta, index) => {
              return (
                <div key={index}>
                  <Card {...carta} index={index} selectable showImage />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="flex place-content-center pb-4 ">
        <p className="font-lilita text-amber-400 text-4xl"> CARDS OF {player.nick}</p>
      </div>
    </div>
  )
}

export default Player
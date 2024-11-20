import { create } from "zustand";

const usePlayersStore = create((set, get) => ({
  
  nPlayers: 0, /* numero de jugadores */  
  players: [], /* Array que contiene a todos los jugadores */


  setNPlayers: (num) => set({ nPlayers: num }),
  
  createPlayer: (id, nick, cards) => {
    const newObjPlayer = {
      id: id,
      nick: nick,
      cards: cards,
    }
    set({ players: get().players.concat(newObjPlayer) })

  },

  getPlayer: (id) => get().players[id],
  getCardsPlayer: (id) => get().players[id].cards,

  pushCardPlayer: (indexPlayer, idCard) => {

    const playersTemp = get().players;
    let playersNew = [];

    playersTemp.map((player, index) => {
      //debugger
      if (index === indexPlayer) {
        let newCardsPlayer = []
        player.cards?.map((card, index) => {
          if (card.id !== idCard) {
            newCardsPlayer = newCardsPlayer.concat(card)
          }
          return null
        })
        const objPlayNew = {
          id: player.id,
          nick: player.nick,
          cards: newCardsPlayer
        }

        playersNew = playersNew.concat(objPlayNew)
      } else {
        playersNew = playersNew.concat(player)
      }
      return null

    })

    set({ players: playersNew })

  },

  stealCard: (indexPlayer, objCardSteal) => {
    if (objCardSteal) {
      const playersTemp = get().players;
      let playersNew = [];

      playersTemp.map((player, index) => {
        //debugger
        if (index === indexPlayer) {
          let newCardsPlayer = []
          newCardsPlayer = player.cards.concat(objCardSteal)
          const objPlayNew = {
            id: player.id,
            nick: player.nick,
            cards: newCardsPlayer
          }

          playersNew = playersNew.concat(objPlayNew)
        } else {
          playersNew = playersNew.concat(player)
        }

        return null

      })

      set({ players: playersNew })
    } else {
      console.log("fin de mazo");
    }

  }
}))

export default usePlayersStore;
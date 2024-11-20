import { useEffect, useState } from "react";
import Card from "./Card";
import usePartidaStore from "../../store/partida";

const Deck = () => {

  const [card, setCard] = useState({})
  const { nextCardMazo, mazo } = usePartidaStore(state => ({
    nextCardMazo: state.nextCardMazo,
    mazo: state.mazo
  }))

  useEffect(() => {
    setCard(nextCardMazo);
  }, [mazo, nextCardMazo])

  return (
    <div className="flex flex-col border-4 mx-10 px-10 py-5 rounded-lg border-white w-full h-full text-center">
      <p className=" font-lilita text-xl text-white">DECK</p>
      <div className="absolute mt-6"><Card {...card} showImage /></div>
    </div>
  )
}

export default Deck;
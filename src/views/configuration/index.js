import usePartidaStore from "../../store/partida"
import logo from "../../assets/Logo.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Configuration = () => {

  const { nCartas, cardsSteals, setNCards, setCardsSteal } = usePartidaStore(state => ({
    nCartas: state.nCartas,
    setNCards: state.setNCards,
    cardsSteals: state.cardsSteals,
    setCardsSteal: state.setCardsSteal
  }))

  const [dificult, setDificult] = useState(cardsSteals)
  const [cards, setCards] = useState(nCartas)

  const handleChangeDificult = (e) => {    
    setDificult(e.target.value)
    setCardsSteal(e.target.value)
  }

  const handleChangeCards = (e) => {
    setNCards(e.target.value)
    setCards(e.target.value)
  }

  const navigate = useNavigate();
  const handleClickBack = () => navigate('/')

  return (
    <div className=" bg-fondo bg-cover">
      <div className="flex flex-col h-screen justify-center items-center">        
        <img src={logo} alt ='Logo' className="h-64 top-10 absolute" />
        <label className="flex place-content-center text-6xl font-lilita text-white">Configuration</label>
        <div className="flex flex-col p-3">
          <div className=" font-lilita text-3xl text-white">
            <lable>Dificult</lable>
            <input className=" bg-black" type='range' min='1' max='3' value={dificult} onChange={handleChangeDificult}/> {dificult}
          </div>
          <div className=" font-lilita text-lg text-white">
            <lable>Nº Cards</lable>
            <input type='range' min='5' max='8' value={cards} onChange={handleChangeCards}/> {cards}
            </div>
        </div>  
        <div className="">          
          <button
            type="button"
            onClick={handleClickBack}
            className='w-32 h-16 border-4 border-white rounded-3xl text-3xl text-white font-lilita place-content-center hover:bg-yellow-400 transition-all hover:scale-110 hover:shadow-2xl shadow-black hover:text-white m-5'>
            Volver
          </button>
      </div>     
      </div>
    </div>
  )
}

export default Configuration
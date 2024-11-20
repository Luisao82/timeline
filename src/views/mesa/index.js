import Player from "../../components/mesa/Player";
import CartasMesa from "../../components/mesa/CartasMesa";
import Msn from "../../components/mesa/Msn";
import ListPlayers from "../../components/mesa/ListPlayers"
import Deck from "../../components/mesa/Deck";
import SelectedCarddBoard from "../../components/mesa/SelectedCardBoard";
import logo from "../../assets/Logo.png"

const Mesa = () => {
  return (
    <div className="flex flex-row bg-fondo bg-green-900">
      <div className="w-4/5 h-screen bg-cover bg-fondo p-1">
        <div className="w-full h-1/3 ">
          <CartasMesa />
        </div>
        <div className="w-full h-1/3 ">
          <div className="flex flex-row">
            <div className="w-1/6 ">
              <Deck />
            </div>
            <div className="w-4/6 py-12  place-content-center text-center align-middle inline-block ">
              <Msn />
            </div>
            <div className="w-1/6">
              <SelectedCarddBoard />
            </div>
          </div>
        </div>
        <div className="w-full h-1/3 ">
          <Player />
        </div>
      </div>
      <div className="w-1/5 flex-row">
        <div className="h-5/6 border-l-4 bg-gradient-to-r from-stone-800 via-stone-600  to-stone-700 p-2 rounded-3xl border-amber-500 flex place-content-center ">
          <ListPlayers />
        </div>
        <div className="h-1/6">
          <img src={logo} alt='logo' className="h-full" />
        </div>
      </div>
    </div>
  )
}

export default Mesa
import Card from "./Card";
import usePartidaStore from "../../store/partida";

const SelectedCarddBoard = () => {

  const { cardSelected } = usePartidaStore(state => ({
    cardSelected: state.cardSelected,
  }))

  return (
    <div className="flex flex-col border-4 -mx-10 px-10 py-5  rounded-lg border-white w-full h-full text-center">
      <p className=" font-lilita text-xl text-white">SELECTED CARD</p>
      {Object.entries(cardSelected).length !== 0 && <Card {...cardSelected} showImage />}
    </div>
  )
}

export default SelectedCarddBoard
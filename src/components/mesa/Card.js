import usePartidaStore from "../../store/partida";
import usePlayersStore from "../../store/players";

const Card = (props) => {
    const {title, description, year, yearShow, index, anio, selectable, showDescription, showImage} = props;
    const { getCardsPlayer } = usePlayersStore(state => ({
        getCardsPlayer: state.getCardsPlayer
    }))
    const { turnoPlayer, selectionCard } = usePartidaStore(state => ({
        turnoPlayer: state.turnoPlayer,        
        selectionCard: state.selectionCard
    }))

    const handleClickCard= (year,index) => {        
        selectionCard(getCardsPlayer(turnoPlayer)[index]);
    }

    return(
      <div onClick={() => selectable && handleClickCard(year,index)} className={` border-yellow-800 border-2 border-solid bg-card w-32 rounded-lg p-2 overflow-hidden z-0 bg-yellow-500 h-40 ${selectable && `scale-100 mx-1 cursor-pointer hover:shadow-lg hover:shadow-black transition ease-in-out delay-10 hover:scale-110`}`}>            
          {anio && <p className="text-center text-lg font-bold ">{yearShow}</p>}
          <div className="text-sm text-center leading-3 font-bold h-2/6">{title}</div>           
          {showImage && <div className="w-full h-4/6 bg-amber-800 border-1  rounded-md border-yellow-800" ></div>}            
          {showDescription && <p className="text-xs text-justify leading-none">{description}</p>}
          
      </div>
    )
}

export default Card;
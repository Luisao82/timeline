import usePartidaStore from "../../store/partida";
import Card from "./Card";
import usePlayersStore from "../../store/players";

const CartasMesa = () => {
	const { mesa, cardSelected, addCardMesa, turnoPlayer, getCard, cambiarTurno, backCard, setMsn, cardsSteals } = usePartidaStore(state => ({
		mesa: state.mesa,
		orderMesa: state.orderMesa,
		cardSelected: state.cardSelected,
		addCardMesa: state.addCardMesa,
		turnoPlayer: state.turnoPlayer,
		getCard: state.getCard,
		cambiarTurno: state.cambiarTurno,
		backCard: state.backCard,
		setMsn: state.setMsn,
		cardsSteals: state.cardsSteals
	}));

	const { pushCardPlayer, stealCard, players } = usePlayersStore(state => ({
		pushCardPlayer: state.pushCardPlayer,
		stealCard: state.stealCard,
		players: state.players,
	}))

	const handleClickPosition = (index) => {
		let correcto = false;
		if (Object.entries(cardSelected).length === 0) {
			setMsn("SELECT A CARD", 2)
		} else {
			switch (true) {
				case index === -1:
					correcto = Number(mesa[index + 1].year) > Number(cardSelected.year) && true
					break;
				case index === (mesa.length - 1):
					correcto = Number(mesa[index].year) < Number(cardSelected.year) && true
					break;

				default:
					if (Number(mesa[index].year) < Number(cardSelected.year) && Number(cardSelected.year) < Number(mesa[index + 1].year)) {
						correcto = true
					}
					break;
			}
			if (correcto) {
				addCardMesa(cardSelected)
				setMsn("¡¡ CORRECT !!", 1)
			} else {
				setMsn("ERROR :(", 0)
				/*
				veces que se roba del mazo. Tengo que mejorarlo
				 */			
				console.log(cardsSteals);	
				for ( let i = 1; i <= cardsSteals; i++){
					stealCard(turnoPlayer, getCard())
				}
				
				//stealCard(turnoPlayer, getCard())
				backCard(cardSelected)
			}
			pushCardPlayer(turnoPlayer, cardSelected.id);
			cambiarTurno(players);
			//setMsn(`TURNO DE ${players[turnoPlayer].nick}`,0)
		}
	}

	return (
		<div >
			<div className="flex place-content-center pb-4 ">
				<p className="font-lilita text-amber-400 text-4xl">BOARD CARDS</p>
			</div>
			<div className="flex flex-col border-4 mx-10 px-10 py-5 rounded-lg border-white">
				<div className="flex flex-auto  overflow-x-auto ">
					{
						mesa?.map((carta, index) => (
							<div key={index} className='flex'>
								{index === 0 && <div onClick={() => { handleClickPosition(index - 1) }} className="transition-all border-dashed border-2 border-gray-400 delay-350 hover:transition-all delay-250 w-5 h-full rounded-2xl cursor-pointer hover:w-32 hover:rounded-lg hover:p-2"></div>}
								<Card {...carta} showDescription anio />
								<div onClick={() => { handleClickPosition(index) }} className="transition-all border-dashed border-2 border-gray-400 delay-350 hover:transition-all delay-350 w-5 h-full rounded-2xl hover:w-32 hover:rounded-lg hover:p-2 cursor-pointer"></div>
							</div>
						))
					}
				</div>
			</div>
		</div>

	)
}

export default CartasMesa
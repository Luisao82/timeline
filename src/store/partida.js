import axios from "axios";
import { create } from "zustand";
import cartas from "../assets/cartas.json";


const usePartidaStore = create((set, get) => ({
	
	mazo: [], /* 	Array con todos las cartas barajadas.	*/	
	mesa: [], /*	Array que tendrá las cartas que estan en la mesa	*/	
	cardSelected: {}, /*	Carta seleccionada por el jugador 	*/	
	turnoPlayer: 0, /* Variable que contiene el index del jugador que tiene su turno */	
	nCartas: 5, /* Numero de cartas con las que comienza un jugador*/	
	cardsSteals:2, /* Numero de cartas a robar */
	msn: {}, /* Variable que contiene el mensaje a mostrar */


	/*
	Metodo en configuración para asignar el numero de cartas a comenzar
	*/
	setNCards: (nCards) => set({nCartas: nCards}),
	
	/*
	Metodo en configuracion para cambiar el numero de cartas a robar
	 */
	setCardsSteal: (nCards) => set({cardsSteals: nCards}),

	/*
	Metodo para recoger todas las cartas
	*/
	getCards: async () => {
		// server-json
		/*
		const resultado = await axios.get("http://localhost:3001/cartas/")				
		set({ mazo: resultado.data.sort(function () { return Math.random() - 0.5 }) })
		*/
		// directamente al json 
		const resultado = cartas		
		set({ mazo: resultado.cartas.sort(function () { return Math.random() - 0.5 }) })
	},

	/*
	Barajar las cartas para guardarlas en el Mazo ( array con todas las cartas ordenadas )
	*/
	shuffleCards: () => set({ mazo: get().mazo.sort(function () { return Math.random() - 0.5 }) }),


	getCard: () => {
		if (get().mazo.length === 0) {
			return null
		} else {
			const card = get().mazo.shift();
			set({ mazo: get().mazo })
			return card
		}
	},

	initMesa: () => {
		let card = get().mazo.shift();
		set({ mesa: get().mesa.concat(card) })
		get().orderMesa();
	},

	/*
	Metodo que ordena las cartas que están en mesa de más antiguo a más actual
	 */
	orderMesa: () => set({ mesa: get().mesa.sort((a, b) => Number(a.year) - Number(b.year)) }),

	addCardMesa: (objCard) => {
		set({ mesa: get().mesa.concat(objCard) })
		get().orderMesa();
	},

	/*
	Funcion para recoger la carta seleccionada por el usuario
	 */
	selectionCard: (Obj) => set({ cardSelected: Obj }),


	cambiarTurno: (players) => {
		const lastplayer = players.length - 1;

		const actualPlayer = get().turnoPlayer;
		if ((actualPlayer + 1) > lastplayer) {
			set({ turnoPlayer: 0 })
		} else {
			set({ turnoPlayer: get().turnoPlayer + 1 })
		}

		!players[get().turnoPlayer].cards.length && get().cambiarTurno(players)
		get().selectionCard({})
	},

	
	backCard: (card) => set({ mazo: get().mazo.concat(card) }),

	
	setMsn: (texto, tipo) => {
		const objMsn = {
			text: texto,
			type: tipo,
		}
		set({ msn: objMsn })
	},

	/**
	 * Metodo que devuelve, sin eliminar, la siguiente carta del mazo
	 * Se usa para mostrar la proxima carta que se robará
	 */
	nextCardMazo: () => get().mazo[0]

}))

export default usePartidaStore;
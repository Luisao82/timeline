const  BtnNJugadores = ({ index, onHandleClickNPlayer }) => {
  return (
    <button
      type="button"
      onClick={() => onHandleClickNPlayer(index)}
      className='w-32 h-16 border-4 border-white rounded-3xl text-3xl text-white font-lilita place-content-center hover:bg-yellow-400 transition-all hover:scale-110 hover:shadow-2xl shadow-black hover:text-white m-5'>
      {index}
    </button>
  )
}

export default BtnNJugadores
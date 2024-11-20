import logo from "../../assets/Logo.png"
import BtnNJugadores from "./BtnNJugadores";
import {  useNavigate } from "react-router-dom";
import imgSetting from "../../assets/setting.png"

const NJugadores = ({ onHandleClickNJugardor }) => {

  const navigate = useNavigate();
  const handleClickConfigurations = () => navigate('/Configuration')
  

  return (    
    <div className="flex flex-col h-screen justify-center items-center">        
      <img src={logo} alt ='Logo' className="h-64 top-10 absolute" />
      <label className="flex place-content-center text-6xl font-lilita text-white">Number of players</label>
      <div className="flex flex-row">
        <BtnNJugadores index='1' onHandleClickNPlayer={onHandleClickNJugardor} />
        <BtnNJugadores index='2' onHandleClickNPlayer={onHandleClickNJugardor} />
        <BtnNJugadores index='3' onHandleClickNPlayer={onHandleClickNJugardor} />
        <BtnNJugadores index='4' onHandleClickNPlayer={onHandleClickNJugardor} />
      </div>
      <div className="">
        <img src={imgSetting} className="absolute top-0 left-0 m-3 w-16 h-16 cursor-pointer" alt='configurations' onClick={handleClickConfigurations}/>
      </div>  
    </div>
  )
}

export default NJugadores
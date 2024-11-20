import React, { useState, useEffect } from "react";
import usePartidaStore from "../../store/partida"

const Msn = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [decorationText, setDecorationText] = useState("");
  const { msn } = usePartidaStore(state => ({ msn: state.msn }))

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 1500);

    switch (msn.type) {
      case 0:// en el caso de ser incorrecta
        setDecorationText(" text-red-500")
        break;
      case 1:// En el caso de ser correcta
        setDecorationText(" text-yellow-300")
        break;
      case 2:// Cuando cambia de jugador. Aun no esta programado
        setDecorationText(" text-white")
        break;
      default:
        break;
    }

    return () => {
      clearTimeout(timer);
      setShowMessage(true)
    };
  }, [msn]);

  return (
    <div className="flex py-12 h-40 place-content-center text-center w-full align-middle">
      {showMessage && (
        <div className={`text-7xl font-lilita scale-150 ${decorationText} `}>
          {msn.text}
        </div>
      )}
    </div>
  );
}

export default Msn;

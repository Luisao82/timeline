import { useEffect } from "react";

import usePartidaStore from "./store/partida";
import Router from "./router";

const App = () => {

  const { getCards } = usePartidaStore(state => ({
    getCards: state.getCards    
    
   }));

  useEffect(() => {
    getCards().catch(null);
      
  },[getCards])

  return (
    <div >
      <Router />
    </div>
  );
}

export default App;

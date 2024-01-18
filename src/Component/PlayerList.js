import Player from "./Player";
import { player } from "../players";

const PlayerList = () => {
  return ( 
    <>
      {player.map((player, index) => 
       <Player key={index} {...player} />
      )}
    </>
   );
}
 
export default PlayerList;
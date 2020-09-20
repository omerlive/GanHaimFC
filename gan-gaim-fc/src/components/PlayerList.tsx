import React ,{Component} from 'react';
import Player from './Player';
import PlayersService from '../playersService';
import ReactDOM from "react-dom"
import { observer } from "mobx-react";
import {computed} from "mobx";

@observer
class PlayerList extends Component<any> {

    render() {  
        const  {title , players} =  this.props;

        return (
            <div>
                <h3>{title} {players.length} </h3> 
                {players.map((player, index) => {
                    return <Player key={player.id} player={player} index={index+1}/>
                })}
            </div>
        )
    }
}


// @observer
// class PlayerList extends Component<any> {
      
//     @computed get numberOfPlayers() {
//         return this.props.store.playerCount
//     }

//     @computed get getApprovedPlayers() {   
//       return  this.props.store.playersList.filter((player:any)=>{
//             return player.isComing 
//         })
//     }

//     @computed get getUnApprovedPlayers() {   
//         return  this.props.store.playersList.filter((player:any)=>{
//               return !player.isComing 
//           })
//       }
 

//     render() {  
//         return (
//         <div className="container">
//             <div>
//                 <h4>All Players</h4>
//                 <h5>
//                     Total Number Of players: {this.numberOfPlayers}
//                 </h5>
            
//                 {this.getUnApprovedPlayers.map((player: { id: any; }) => <Player key={player.id} playerData={player}/>)}
            
//             </div>
//             <div>
//                 <h4>Match Players</h4>
//                 <h5>
//                     Total Number Of Match players: {this.numberOfPlayers}
//                 </h5>
            
//                 {this.getApprovedPlayers.map((player: { id: any; }) => <Player key={player.id} playerData={player}/>)}            
//             </div>         
//         </div>
        
//         )
//     }
// }


export default PlayerList;
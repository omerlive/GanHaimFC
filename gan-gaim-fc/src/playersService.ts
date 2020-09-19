import playersJson from './playersJson';
import { observable, computed, autorun, action } from "mobx";

class PlayersStore { 
    playersJson =  playersJson;
    @observable playersList = this.playersJson;     
    @observable matchPlayer = [];
    @computed get playerCount() {
        return this.playersList.length;
    }


    @action
    addPlayer(playerId: number){ 
        // @ts-ignore
        let player = this.playersList.map((player)=>{
            if(player.id === playerId){
                return player;
            }
           
        })

        Object.assign(this.playersList,player);
    
    }

    @action
    removePlayer(playerId: number){
        // @ts-ignore
        this.matchPlayer = this.matchPlayer.filter((player)=>{
                // @ts-ignore
                return player.id !== playerId;
        });
    }

    @action
    onToggleComing(playerId: number){
        this.playersList = this.playersList.map((player)=>{

            return player;
        })
       
    }
};


// @ts-ignore
var store =  window.store = new PlayersStore;

export default store;
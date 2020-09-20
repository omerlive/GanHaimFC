import {observable, computed, action, autorun, values, reaction} from 'mobx'
import {IPlayer} from './playerModel'
import Player from './playerModel';



export default class PlayerList{
    @observable players: Array<IPlayer> = [];
    @observable unMatchPlayersFilter = ''
    @observable macthPlayrsFilter = '';
    firstRun = true
    //todo understand the unMatchPlayers and  filterUnMatchList and updateUnMacthPlayrsFilter

    constructor(playerList=[]){
        debugger;
        let playerFromLocalstorage = localStorage.getItem('matchPlayerList');
        if(playerFromLocalstorage?.length > 0){
            this.updateFromLocalStorage();
        }else{
            this._initPlayerJson(playerList);
        }
        this.firstRun = false;
    }

    private _initPlayerJson(playerList){
        playerList.map(player =>{
            const {value} = player;
             this.addPlayer(value)});
    }

     disposer = autorun(() => {
        debugger;
        //todo make auto run on every changae length and inMatchPlater
        //toto save the player list in localSortage
        //todo add reset game button
        //upload to server?

     
        console.log('omer',this.players.length);

    })
 

    @action.bound
    updateFromLocalStorage(){
        //@ts-ignore
        //this.players = JSON.parse(localStorage.getItem('matchPlayerList'));
    }

    @computed get matchPlayers(){
        //@ts-ignore
       return this.players.filter(player => player.attendMatch);
    }

    @computed get unMatchPlayers(){
        //@ts-ignore
        return this.players.filter(player => !player.attendMatch);
     }

     //todo why
    @computed get filterMatchList(){
          //@ts-ignore
         return this.matchPlayers.filter(player => player.value.includes(this.macthPlayrsFilter));
    }

    //todo why
    @computed get filterUnMatchList(){
        //@ts-ignore
          return this.unMatchPlayers.filter(player => player.value.includes(this.unMatchPlayersFilter));
    }
    
     @action.bound
     //@ts-ignore
     addPlayer(player:IPlayer){
        //@ts-ignore 
        this.players.push(new Player(player, this))
     }
     
     @action.bound
     remove(playerToRemove:IPlayer){
         //@ts-ignore
         this.players.filter(player => player === playerToRemove)
     }

    @action.bound
    updateMacthPlayrsFilter(value:string){
        this.macthPlayrsFilter = value;
    }

    @action.bound
    updateUnMacthPlayrsFilter(value:string){
        this.unMatchPlayersFilter = value;
     }
}   
import {observable, computed, action, values} from 'mobx'
import { Interface } from 'readline';



export interface IPlayer {
    id: number;
    value: string;
    attendMatch: boolean,
    level: number
}

export default class Player{
    private id = Math.random() *  Math.random();
    //@ts-ignore
    private list;
    @observable value = ''
    @observable attendMatch = false;

    //@ts-ignore
    constructor(value:string, list){
        //@ts-ignore
        this.value = value;
        this.list = list;
    }

    @computed
    get unMatchPlayer(){
        return !this.attendMatch;
    }

    @action.bound
    toggle(){
        return (this.attendMatch = !this.attendMatch);
    }

    @action.bound
    remove(){
        this.list.removePlayer(this)
    }

}
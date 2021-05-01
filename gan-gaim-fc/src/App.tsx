import React, {useState} from 'react';
import './todo.css';
import playersJson from './playersJson';
import Player from './components/Player';
import PlayerList from './components/PlayerList';
import  store from './playersService'
import { inject, observer } from 'mobx-react';
import NewPlayer from './NewPlayer';

// inbar+omer=blff

const UnMatchPlayers = inject('playerList')(
   //@ts-ignore
  observer(({playerList})=>{
    return <PlayerList title ="All Players" players={playerList.unMatchPlayers}/> 
  }),
);  
//omer and inbar test
const MatchPlayers = inject('playerList')(
  //@ts-ignore
 observer(({playerList})=>{
   return <PlayerList title ="Match Players" players={playerList.matchPlayers}/> 
 }),
);  

const App = ()=>{  

  return (
    <div className="container">
      <NewPlayer/>
      
      <UnMatchPlayers/>
      <MatchPlayers/>      
    </div>
  )

}
//toto add to localstorage

export default App;


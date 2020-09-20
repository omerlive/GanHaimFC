import React  from 'react';
import { constants } from 'buffer';
import  playersService from './../playersService'


const Player =  ({player , index}) => {

    return(
        
        <article className="single-player">
            {index}.
            <label htmlFor={player.id}>
                <input type="checkbox"
                checked={player.attendMatch}
                onChange={player.toggle}
                id={player.id}
                />
                {player.value}
            </label>
        </article>
    )

         
};

export default Player;  


// const Player =  (props:any) => {
//     const {first_name, last_name, grade, phone ,id, isComing} = props.playerData;    

//     const addPlayer = (id:number) => {
//         playersService.addPlayer(id);
//     }

//     const removePlayer = (id:number) => {
//         playersService.removePlayer(id);
//     }
    

//     const onToggleComing = (id:number) => {
//         playersService.onToggleComing(id);
//     }
    
//     //3 lists with the same data sorce - one will show undefiend one for true one for false
//     //show mobx video
//     //updatge store data   inject store like it should be
//     //update to funcitonal compontnt
//     //read bad side of hooks

//     return <ul>
//         <li>first name: {first_name}</li>

//         <input
//           type='checkbox'
//           checked={ isComing }
//           // @ts-ignore
//           onChange={()=>{onToggleComing(id)}}
//         />
//         <input type="button"  value="Add Player To Match" onClick={()=>{addPlayer(id)}} />
       
//         <input type="button"  value="Remove Player Match"  onClick={()=>{removePlayer(id)}} />
          

//        </ul>

         
// };
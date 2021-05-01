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


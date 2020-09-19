import React, {Component} from 'react';
import { inject } from 'mobx-react';
import PlayerList from './components/PlayerList';


@inject('playerList')
export default class NewPlayer extends Component{
    state  = { value: ''}

     //@ts-ignore
    handleChange = event =>{
        const { value } = event.target;
        this.setState({value})
    }

     //@ts-ignore
    handleSubmit = event => {
        const  { value } = this.state;
         //@ts-ignore
        const { playerList } =  this.props;
        event.preventDefault();
        playerList.addPlayer(value);

        this.setState({value: ''});
    }



    render(){
        const {value} =this.state
        return(
            <div>
                <form className="create-player" onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    placeholder="New Player"
                    value={value}
                    />
                    <input type="submit" />
                </form>           
            </div>
        )
    }
}


import React from 'react';


export default class Formulaire extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            first: '',
            second: '',
            result: ''
        };
    }
    render(){
        return(
            <form>
                <input type="text" name="first" value={this.state.first} onChange={(event) => this.setState({first: event.target.value})}></input>
                <input type="text" name="second" value={this.state.second} onChange={(event) => this.setState({second: event.target.value})}></input>
                <input type="button" value="Submit" onClick={(event) =>{ event.preventDefault(); this.setState({result: this.state.first + " " +this.state.second})} }></input>
                <span>{this.state.result}</span>
            </form>
        )
    }
}
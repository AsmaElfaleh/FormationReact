import React from 'react';

export default class Panier extends React.Component {
    render(){
        return(
            <div className="cadreJaune">
                <h2>Panier</h2>
                <span>{this.props.items}</span>
            </div>
        )
    }
}
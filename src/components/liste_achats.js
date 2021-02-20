import React from 'react';

export default class ListeAchats extends React.Component {
    render(){
        return(
            <div className="cadreJaune">
                <h2>Liste des achats</h2>
                <span>{this.props.items}</span>
            </div> 
        );
    }
}
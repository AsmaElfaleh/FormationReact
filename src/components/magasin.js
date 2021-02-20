import React from 'react';
import ListeAchats from './liste_achats';
import Panier from './panier';
import Total from './total';

import '../styles/ex3.css'

export default class Magasin extends React.Component {
    render() {
        return(
            <div className="magasin">
                <h2>Magasin</h2>
                <ListeAchats items={this.props.liste_achats} />
                <Panier items={this.props.panier} />
                <Total total={this.props.total} />
            </div> 
     );
    }
}
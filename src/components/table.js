import React from 'react';
import Ligne from './ligne';
import Colonne from './colonne';

export default class Table extends React.Component {
    
    render(){
        return(<table border="1">
            <thead></thead>
            <tbody>
                <tr>
                    <td></td>
                    <td><Colonne text={this.props.colonne} /></td>
                </tr>
                <tr>
                    <td><Ligne text={this.props.ligne} /></td>
                    <td></td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>)
    };
    
}
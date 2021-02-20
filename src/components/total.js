import React from 'react';

export default class Total extends React.Component {
    render() {
        return(
            <div className="cadreJaune">
                <h2>Total</h2>
                {this.props.total}
            </div>
        )
    }
}
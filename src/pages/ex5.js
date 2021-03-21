import React from 'react';
import EventTest from '../components/eventTest';

export default class Ex5 extends React.Component {

    constructor(props){
        super(props);
        this.state={
            event: ''
        }
    }

    render() {
      return( 
        <div>
            <h2>HTML Event Attributes</h2>
            <select name="events" onChange={(event) => this.setState({event: event.target.value})}>
                <option value="">Select an Event</option>
                <option value="onblur">Form Events - OnBlur</option>
                <option value="onfocus">Form events - OnFocus</option>
                <option value="oninput">Form Events - OnInput</option>
                <option value="oninvalid">Form events - OnInvalid</option>
                <option value="onsubmit">Form Events - OnSubmit</option>
                <option value="onreset">Form Events - OnReset</option>
                <option value="onsearch">Form Events - OnSearch</option>
                <option value="onselect">Form Events - OnSelect</option>
                <option value="onkeydown">Keyboard Events - OnKeyDown</option>
                <option value="onkeyup">Keyboard Events - OnKeyUp</option>
                <option value="onclick">Mouse Events - OnClick</option>
                <option value="ondbclick">Mouse Events - OnDblClick</option>
                <option value="onmousedown">Mouse Events - OnMouseDown and OnMouseUp</option>
                <option value="onmouseover">Mouse Events - OnMouseOver and OnMouseOut</option>
            </select>
            <EventTest event={this.state.event} />
        </div>
    
    )  
    }
}
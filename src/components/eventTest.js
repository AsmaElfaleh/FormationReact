import React from 'react';

export default class EventTest extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            value: ""
        }
    }

    render() {
        var jsx=''
        if (this.props.event === "onblur") {
            
            jsx=<div>
                <h3>{this.props.event}</h3>
                <span>The onblur attribute fires the moment that the element loses focus.</span>
                <input type="text" name="onBlurInput" onBlur={ () => alert("on blur fired")} />
            </div>
        }
        else if(this.props.event === "onfocus"){
            jsx=<div>
                <h3>{this.props.event}</h3>
                <span>The onfocus attribute fires the moment that the element gets focus.</span>
                <input type="text" name="onFocusInput" onFocus={() => alert('on focus is fired')} />
            </div>
        }else if(this.props.event === "oninput"){
            jsx=<div>
                <h3>{this.props.event}</h3>
                <span>The oninput attribute fires when an element gets user input.</span>
                <input type="text" name="onInputInput" onInput={(event) => this.setState({ value: event.target.value})} />
                <span>You wrote: {this.state.value}</span>
            </div>
        } else if(this.props.event === "oninvalid") {
            jsx=<div>
                <h3>{this.props.event}</h3>
                <span>The oninvalid event occurs when a submittable input element is invalid.</span>
                <form>
                    <input type="text" name="onInvalidInput" onInvalid={() => alert('This form is not valid')} required={true} />
                    <input type="submit" value="Submit this form" />
                </form>
            </div>
        } else if(this.props.event === "onsubmit") {
            jsx=<div>
                <h3>{this.props.event}</h3>
                <span>The onsubmit attribute fires when a form is submitted.</span>
                <form onSubmit={(event) => { console.log(event)} } method="get">
                    <label for="textInput">My Text</label>
                    <input type="text" name="textInput" id="textInput"/>
                    <label for="checkboxInput">My checkbox</label>
                    <input type="checkbox" name="checkboxInput" id="checkboxInput" />
                    <select name="selectInput">
                        <option value="oui">Yes</option>
                        <option value="non">No</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        }
        else if(this.props.event === "onreset") {
        jsx=<div>
            <h3>{this.props.event}</h3>
            <span>The onsubmit attribute fires when a form is submitted.</span>
            <form onReset={() => alert('this form was reset')}>
                <label for="textInput">My Text</label>
                <input type="text" name="textInput" id="textInput"/>
                <label for="checkboxInput">My checkbox</label>
                <input type="checkbox" name="checkboxInput" id="checkboxInput" />
                <select name="selectInput">
                    <option value="oui">Yes</option>
                    <option value="non">No</option>
                </select>
                <input type="reset" />
            </form>
        </div>
    }
        return(
            <div>
                {jsx}
            </div>
        )
    }
}

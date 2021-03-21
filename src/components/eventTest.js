import React from 'react';

export default class EventTest extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            value: "",
            color: "",
            text: "Click me !!",
            color2:'black',
            class:'out'
        }
    }
    onSearchFunction(event){
        alert(`you search this value ${event.target.value}`);
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
        }else if(this.props.event === "onsearch") {
           jsx=<div>
                <h3>{this.props.event}</h3>
                <span>The onsearch attribute fires when a user presses the "ENTER" key or clicks the "x" button in an input element with type="search".</span> 
                <input type="search" name="onSearchInput"  ref={element=>(element||{}).onsearch=this.onSearchFunction} />
            </div>
           
        }else if(this.props.event === "onselect") {
            jsx=<div>
                 <h3>{this.props.event}</h3>
                 <span>The onselect attribute fires after some text has been selected in an element.</span> 
                 <input type="text" name="onSelectInput" value="some text to be selected" onSelect={(event) => alert('this texte was selected:'+event.target.value)} />
             </div>
            
         
        }else if(this.props.event === "onkeydown") {
            jsx=<div>
                 <h3>{this.props.event}</h3>
                 <span>The onkeydown attribute fires when the user is pressing a key (on the keyboard).</span> 
                 <input type="text" name="onSelectInput"  onKeyDown={() => alert('you pressed a key..')} />
             </div>
            
         }else if(this.props.event === "onkeyup") {
            jsx=<div>
                 <h3>{this.props.event}</h3>
                 <span>The onkeyup attribute fires when the user releases a key (on the keyboard).</span> 
                 <input type="text" name="onSelectInput"  onKeyUp={() => alert('you released a key..')} />
             </div>
         }else if(this.props.event === "onclick"){
             jsx=<div>
                 <h3>{this.props.event}</h3>
                 <span>The onclick attribute fires on a mouse click on the element.</span>
                 <div style={{background: this.state.color}} className="rectangle" onClick={() => this.setState({color: "red", text: "Wow, you clicked me !!"})}>
                     {this.state.text}
                 </div>
             </div>
         }else if(this.props.event === "ondbclick"){
            jsx=<div>
                <h3>{this.props.event}</h3>
                <span>The ondblclick attribute fires on a mouse double-click on the element.</span>
                <p style={{background: this.state.color2, color: 'white'}}  onDoubleClick={() => this.setState({color2: "red" })}>
                    This text : double click me to change to color
                </p>
            </div>
        }else if(this.props.event === "onmousedown"){
            jsx=<div>
                <h3>{this.props.event}</h3>
                <span>The onmousedown attribute fires when a mouse button is pressed down on the element.</span>
                <p style={{color: this.state.color3}}  onMouseDown={() => this.setState({color3: "red" })} onMouseUp={() => this.setState({color3: "green" })}>
                    This text : Click this text !!
                </p>
            </div>
        }else if(this.props.event === "onmouseover"){
            jsx=<div>
                <h3>{this.props.event}</h3>
                <span>The onmouseover attribute fires when the mouse pointer moves over an element.</span>
                <span>The onmouseout attribute fires when the mouse pointer moves out of an element.</span>
                <p className={this.state.class}  onMouseOut={() => this.setState({class: "out" })} onMouseOver={() => this.setState({class: "over" })}>
                    This text : Check this text !!
                </p>
            </div>
        }
        return(
            <div>
                {jsx}
            </div>
        )
    }
}

import React, { Component } from "react";

export default class Form extends Component { 
    constructor (props) { 
        super(props);
    }

    render () { 
        const { clForm, clInput, clButton, onAddInfo, showAllButtons } = this.props;
        return( 
            <form className= { clForm }>
                <input type="text" className= { clInput } id = { clInput } />
                <button 
                    onClick = { () => onAddInfo(document.getElementById(`${clInput}`).value) } 
                    type="reset" 
                    className={ clButton }> ✓</button>
            </form>
        )
    }
}
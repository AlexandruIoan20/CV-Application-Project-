import React, { Component } from "react";

export default class Editor extends Component { 
    constructor (props) { 
        super(props);
    }

    render () { 
        const { clForm, clInput, clButton, onEditInfo, info } = this.props;
        return ( 
            <form className= { clForm }>
            <input type="text" className= { clInput } id = { clInput } />
            <button 
                onClick = { () =>  onEditInfo(info, document.getElementById('info-field-input').value)} 
                type="reset" 
                className={ clButton }> Edit </button>
        </form>
        )
    }
}
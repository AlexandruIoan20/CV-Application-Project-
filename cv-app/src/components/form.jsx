import React, { Component } from "react";

export default class Form extends Component { 
    constructor (props) { 
        super(props);
    }

    render () { 
        const { onEditInfo, clForm, clInput, clButton } = this.props;
        return( 
            <form className= { clForm }>
                <input type="text" className= { clInput } id = { clInput } />
                <button 
                    onClick = { () =>  onEditInfo(document.getElementById('info-field-input').value) } 
                    type="reset" 
                    className={ clButton }> Submit </button>
            </form>
        )
    }
}
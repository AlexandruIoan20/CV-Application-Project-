import React, { Component } from "react";

export default class Form extends Component { 
    constructor (props) { 
        super(props);
    }

    render () { 
        const { onEditInfo, clForm, clInput, clButton, onAddInfo } = this.props;
        return( 
            <form className= { clForm }>
                <input type="text" className= { clInput } id = { clInput } />
                <button 
                    onClick = { () =>  onAddInfo(document.getElementById('info-field-input').value) } 
                    type="reset" 
                    className={ clButton }> Submit </button>

                <button
                    type="reset"
                    className= {clButton} ></button>
            </form>
        )
    }
}
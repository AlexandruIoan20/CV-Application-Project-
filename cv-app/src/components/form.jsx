import React, { Component } from "react";

export default class Form extends Component { 
    constructor (props) { 
        super(props);
    }

    render () { 
        const { onAddInfo, clForm, forForm, clInput, clLabel, clButton } = this.props;
        return( 
            <form className= { clForm }>
                <label htmlFor= { forForm } className = { clLabel } > forForm </label>
                <input type="text" className= { clInput } id = { clInput } />
                <button onClick = { onAddInfo } type="reset" className={ clButton }> Submit </button>
            </form>
        )
    }
}
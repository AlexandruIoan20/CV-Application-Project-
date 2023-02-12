import React, { Component } from 'react';

export default class DoubleCheck extends Component { 
    constructor(props) { 
        super(props);
    }

    render () { 
        const { name, description, onMainFunction, onCancel } = this.props;
        return ( 
            <section className='double-check-section'>
                <p>{ name }</p>
                <p> { description } </p>

                <button
                    type = 'reset'
                    className='double-check-first'
                    onClick = { () => { onMainFunction ()} }> Yes </button> 

                <button
                    type = 'reset'
                    className='double-check-second'
                    onClick = {onCancel}> No </button>
            </section>
        )
    }
}
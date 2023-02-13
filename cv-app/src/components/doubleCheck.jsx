import React, { Component } from 'react';

export default class DoubleCheck extends Component { 
    constructor(props) { 
        super(props);
    }

    render () { 
        const { description, onMainFunction, onCancel, firstButton, firstButtonName, secondButton, secondButtonName } = this.props;
        return ( 
            <section className='double-check-section'>
                <p> { description } </p>

                { (firstButton || undefined) && <button
                    type = 'reset'
                    className='double-check-first'
                    onClick = { () => { onMainFunction ()} }>  {firstButtonName} </button> }

                { (secondButton || undefined) && 
                <button
                    type = 'reset'
                    className='double-check-second'
                    onClick = {onCancel}> { secondButtonName } </button> } 
            </section>
        )
    }
}
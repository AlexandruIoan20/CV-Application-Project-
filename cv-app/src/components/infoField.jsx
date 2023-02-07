import React, { Component } from "react";
import NameBar from "./nameBar.jsx";
import Form from "./form.jsx";

export default class InfoField extends Component { 
    constructor (props) { 
        super(props);

        this.state =  {
            info: <p>...</p>,
            showEdit: false,
        }
    }

    addInfoHandler = () => { 
        const input = document.getElementById('info-field-input').value;
        
        this.setState( { 
            info: <p> { input }</p>,
            showEdit: false,
        })
    }

    render () { 
        return( 
            <section>
               <NameBar name='Field'/> 
                <span> { this.state.info  }</span>
                <Form clForm = 'info-field-form'
                    forForm = 'From props(still working)'
                    clInput = 'info-field-input'
                    clLabel = 'info-field-label'
                    clButton = 'info-field-button'
                    onAddInfo =  { this.addInfoHandler } /> 
            </section>
        )
    }
}
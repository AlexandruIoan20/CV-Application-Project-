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

    editInfoHandler = (text) => { 
        this.setState( { 
            info: <p> { text }</p>,
            showEdit: false,
        })
    }

    showEditHandler = () =>  {  
        const showEdit = !this.state.showEdit
        this.setState( { 
            ...this.state, showEdit
        })
    }

    render () { 
        return( 
            <section>
               <NameBar name='Field'/> 
                <span> { this.state.info  }</span>
                <button onClick= {this.showEditHandler}>Edit</button>
                {this.state.showEdit && <Form clForm = 'info-field-form'
                    clInput = 'info-field-input'
                    clButton = 'info-field-button'
                    onEditInfo =  { this.editInfoHandler } /> } 
            </section>
        )
    }
}
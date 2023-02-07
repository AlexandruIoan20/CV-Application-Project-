import React, { Component } from "react";
import Form from "./form.jsx";

export default class ImageGenerator extends Component { 
    constructor (props) { 
        super(props);

        this.state =  {
            image: "",
            showEdit: false,
        }
    }

    addInfoHandler = (text) => { 
        this.setState( { 
            image: text,
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
                <img src= {this.state.image } />
                <button onClick= {this.showEditHandler}>Edit</button>
                {this.state.showEdit && <Form clForm = 'info-field-form'
                    clInput = 'info-field-input'
                    clButton = 'info-field-button'
                    onAddInfo =  { this.addInfoHandler } /> } 
            </section>
        )
    }
}
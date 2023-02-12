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
        const { showAllButtons } = this.props;
        return( 
            <section>
                <article className="image-holder"><img src= {this.state.image } /></article>
                 {showAllButtons && <button 
                    className="info-field-button change-photo"
                    onClick= {this.showEditHandler}>Edit</button> }
                {this.state.showEdit && <Form clForm = 'info-field-form'
                    clInput = 'info-field-input'
                    clButton = 'info-field-button'
                    onAddInfo =  { this.addInfoHandler } /> } 
            </section>
        )
    }
}
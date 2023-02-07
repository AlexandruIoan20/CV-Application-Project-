import React, { Component } from "react";
import Form from "./form.jsx";
import Editor from "./editor.jsx";

export class Overview extends Component { 
    constructor (props) { 
        super(props);

        this.state = { 
            informations: this.props.informations,
        }
    }    

    render () { 
        const { informations, onDelete, onEditInfo, onShowEdit } = this.props;
        return ( 
            <section>
                { informations.map(info =>    
                    <article key = {info.id} > 
                    <p> <span> {info.id}. </span> { info.text }</p>
                    <button onClick={ () => onDelete (info.id) }>Delete</button>
                    <button onClick={ () => onShowEdit(info)}>Edit</button>

                    { info.showEdit && 
                        <Editor clForm = 'info-field-form'
                        clInput = 'info-field-input'
                        clButton = 'info-field-button'
                        onEditInfo = { onEditInfo }
                        info = {info}/>
                    }
                    </article>
                )}
            </section>
        )
    }
}
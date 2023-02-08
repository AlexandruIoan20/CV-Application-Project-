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
            <section className="over-view">
                { informations.map(info =>    
                    <article key = {info.id} > 
                    <p> <span> {info.id}. </span> { info.text }</p>
                    <button className="delete-button" onClick={ () => onDelete (info.id) }>D</button>
                    <button className="show-edit-button" onClick={ () => onShowEdit(info)}>✎</button>

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
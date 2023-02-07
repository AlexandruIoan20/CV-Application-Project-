import React, { Component } from "react";
import Form from "./form.jsx";

export class Overview extends Component { 
    constructor (props) { 
        super(props);

        this.state = { 
            informations: this.props.informations,
        }
    }    

    render () { 
        const { informations, onDelete, onEditInfo, onAddInfo, onShowEdit } = this.props;
        console.log(informations);
        return ( 
            <section>
                { informations.map(info =>    
                    <article key = {info.id} > 
                    <p> <span> {info.id}. </span> { info.text }</p>
                    <button onClick={ () => onDelete (info.id) }>Delete</button>
                    <button onClick={ () => onShowEdit(info)}>Edit</button>

{/*                     <button onClick={ () => onEdit(info, document.getElementById("info-field-input"))}>Edit</button> */}
                    </article>
                )}
            </section>
        )
    }
}
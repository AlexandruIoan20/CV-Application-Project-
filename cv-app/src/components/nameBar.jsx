import React, { Component } from "react";
import Editor from "./editor.jsx";

export default class NameBar extends Component { 
    constructor (props) { 
        super(props);

        this.state = { 
            name: this.props.name,
            showEdit: false,
        }
    }

    showEditor = () => { 
        const showEdit = !this.state.showEdit;

        this.setState ( {...this.state, showEdit});
    }

    editName = (undefined, text) => { 
        const name = text; 
        const showEdit = false;

        this.setState ( {name, showEdit})
    }

    render () { 
        return ( 
            <article>
                <p> { this.state.name } </p>
                <button
                    onClick={ this.showEditor}>Edit</button>

                { this.state.showEdit && <Editor clForm = 'info-field-form'
                        clInput = 'info-field-input'
                        clButton = 'info-field-button'
                        onEditInfo = {this.editName} /> }
            </article>
        )
    }
}

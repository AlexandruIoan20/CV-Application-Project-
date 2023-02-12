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
        const { showAllButtons, stopFunctionality } = this.props;
        console.log(stopFunctionality);
        return ( 
            <article className={this.props.cl}>
                <p> { this.state.name } </p>
                { showAllButtons && <button
                    className= 'show-edit-button'
                    onClick={ ()  => { 
                        if(!stopFunctionality) { 
                            this.showEditor();
                        }
                    }}>✎</button>
                }

                { this.state.showEdit && <Editor clForm =  { this.props.Fcl || 'info-field-form' }
                        clInput = { this.props.Icl || 'info-field-input' }
                        clButton = { this.props.Bcl || 'info-field-button' }
                        onEditInfo = {this.editName} 
                        showAllButtons = {showAllButtons}
                      /> }
            </article>
        )
    }
}

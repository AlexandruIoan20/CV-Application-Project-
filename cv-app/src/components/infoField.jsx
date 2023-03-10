import React, { Component } from "react";
import NameBar from "./nameBar.jsx";
import Form from "./form.jsx";
import { Overview } from "./Overview.jsx";

export default class InfoField extends Component { 
    constructor (props) { 
        super(props);

        this.state =  {
            info: <p>...</p>,
            showEdit: false,
        }
    }

    addInfoHandler = (text) => { 
        this.setState( { 
            info: text,
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
        const { showAllButtons, stopFunctionality } = this.props;
        return( 
            <article>
               <NameBar name= {this.props.name}  showAllButtons = {showAllButtons} stopFunctionality = {stopFunctionality}/> 
                <span> { this.state.info  }</span>
                { showAllButtons && <button 
                    className= 'show-edit-button' 
                    onClick= { () =>  { 
                        if(stopFunctionality) { 
                            this.showEditHandler();
                        }
                    } }>✎</button> }

                {this.state.showEdit && <Form clForm = 'info-field-form'
                    clInput = 'info-field-input'
                    clButton = 'info-field-button'
                    onAddInfo =  { this.addInfoHandler }
                    onEditInfo =  { this.editInfoHandler }
                    showAllButtons = {showAllButtons} 
                    stopFunctionality = { stopFunctionality }  /> } 
            </article>
        )
    }
}

export class InfoFieldMultiple extends Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            mainShowEdit: false,
            informations: [  
                { id: 1, text: this.props.description, showEdit: false } ,
            ]
        }
    }

    showEditHandler = (info) => { 
        const informations = [...this.state.informations]; 
        const index = informations.indexOf(info);

        informations[index].showEdit = true; 
        this.setState( { 
            ...this.state, informations
        });
    }

    showMainEditHandler = () => { 
        const mainShowEdit = !this.state.mainShowEdit;

        this.setState ( { 
            ...this.state, mainShowEdit
        })
    }
    addMainInfoHandler = () => { 
        const informations = this.state.informations;
        const input = document.getElementById("info-field-input").value;
        const mainShowEdit = !this.state.mainShowEdit;

        informations.push( {id: informations.length + 1, text: input, showEdit: false});
        this.setState( { ...this.state, informations, mainShowEdit});
    }

    handleDelete = (counterID) => { 
        const infoFilter = this.state.informations.filter(info => info.id !== counterID);

        const informations = infoFilter.map(info => { 
            info.id = infoFilter.indexOf(info) + 1; 
            return info;
        })

        this.setState( {...this.state, informations});
    }

    handleEdit = (info, text) => { 
        const informations = [...this.state.informations];
        const index = informations.indexOf(info);

        informations[index].text = text; 
        informations[index].showEdit = false;
        this.setState({informations});
    }

    render() { 
        const { informations, mainShowEdit } = this.state;
        const { showAllButtons, stopFunctionality } = this.props;
        return (  
            <section className="multiple-display">
                <NameBar name = {this.props.name}
                         Fcl = 'namebar-field-form'
                         Icl = 'namebar-field-input'
                         Bcl = 'namebar-field-button'
                         showAllButtons = {showAllButtons}
                         stopFunctionality = { stopFunctionality }  />

                <article>
                <Overview informations = { informations }
                    onDelete = { this.handleDelete }
                    onShowEdit = { this.showEditHandler }
                    onEditInfo = { this.handleEdit }
                    showAllButtons = {showAllButtons}
                    stopFunctionality = { stopFunctionality }  
                     /> 
                </article>

                {showAllButtons && <button 
                    className="add-info-multiple" 
                    onClick={ () => { if (!stopFunctionality)
                         {  this.showMainEditHandler () }
                    }}>Add informations for this section</button> }

                {mainShowEdit && <Form clForm = 'info-field-form'
                    clInput = 'info-field-input'
                    clButton = 'info-field-button'
                    onAddInfo = { this.addMainInfoHandler }
                    showAllButtons = {showAllButtons}
                    stopFunctionality = { stopFunctionality }  
                     />  }   
            </section>
        )
    }
}
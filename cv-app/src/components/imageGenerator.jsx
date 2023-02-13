import React, { Component } from "react";
import Form from "./form.jsx";
import DoubleCheck from "./doubleCheck.jsx";

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
        const { showAllButtons, stopFunctionality, onShowPhotoInfo, onCancel, showPhotoInfoSection } = this.props;
        console.log( { stopFunctionality, showPhotoInfoSection });
        return( 
            <section>
                <article className="image-holder"><img src= {this.state.image } /></article>
                 {showAllButtons && 
                 <section>
                    <button 
                        className="info-field-button change-photo"
                        onClick= { () => { 
                            if(stopFunctionality) { 
                                this.showEditHandler();
                            }
                        } }>Edit</button> 

                         <button 
                            onClick = { onShowPhotoInfo }
                            className = 'info-field-button bonus-info-button'> i </button> 

                         {!stopFunctionality && showPhotoInfoSection &&  
                            <DoubleCheck onMainFunction = { onCancel }
                                onCancel = { onCancel }
                                firstButton = {false}
                                secondButton = {true}
                                secondButtonName = "Close"
                                description = "In order to insert an image, you have to type in it's URL!" />}
                    </section> }
                {this.state.showEdit && <Form clForm = 'info-field-form'
                    clInput = 'info-field-input'
                    clButton = 'info-field-button'
                    onAddInfo =  { this.addInfoHandler } /> } 
            </section>
        )
    }
}
import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import { InfoFieldMultiple } from "../components/infoField.jsx";
import NameBar from "../components/nameBar";

export class EducationSection extends Component { 
    constructor (props) { 
        super(props);
    }

    render () { 
        const { showAllButtons, stopFunctionality } = this.props;
        return ( 
            <section className="composed-section">
                <NameBar name = 'Education' cl = "section-namebar"
                    Fcl = "namebar-field-form"
                    Icl = "namebar-field-input" 
                    Bcl = "namebar-field-button"
                    showAllButtons = {showAllButtons}
                    stopFunctionality = { stopFunctionality } /> 

                <InfoField name = 'School'
                    showAllButtons = {showAllButtons}
                    stopFunctionality = { stopFunctionality } />
                <hr />

                <InfoField name = 'High school'
                    showAllButtons = {showAllButtons}
                    stopFunctionality = { stopFunctionality } /> 
                <hr /> 

                <InfoField name = 'University'
                showAllButtons = {showAllButtons}
                stopFunctionality = { stopFunctionality }  />
                <hr />
                <InfoFieldMultiple  
                    showAllButtons = {showAllButtons}
                    stopFunctionality = { stopFunctionality }  
                    name = "Others" 
                    description = "*Other official courses*"/> 
            </section>
        )
    }
}
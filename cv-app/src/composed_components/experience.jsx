import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import { InfoFieldMultiple } from "../components/infoField.jsx";
import NameBar from "../components/nameBar";

export default class ExperienceSection extends Component { 
    constructor(props) { 
        super (props);
    }

    render () { 
        const { showAllButtons, stopFunctionality } = this.props;
        return ( 
            <section className="composed-section">
                <NameBar name = "Personal Experience"
                    cl = "section-namebar"
                    Fcl = "namebar-field-form"
                    Icl = "namebar-field-input" 
                    Bcl = "namebar-field-button"
                    showAllButtons = {showAllButtons}
                    stopFunctionality = { stopFunctionality } /> 
                <InfoFieldMultiple 
                    name = "Jobs" 
                    description = "model: job - description" 
                    showAllButtons = {showAllButtons}
                    stopFunctionality = { stopFunctionality }  /> 
                    
                <hr />
                <InfoFieldMultiple 
                    showAllButtons = {showAllButtons} 
                    name = "Others" 
                    stopFunctionality = { stopFunctionality }  
                    description = "model: extracurricular activities during highschool / courses"/>
                <hr />
            </section>
        )
    }
}
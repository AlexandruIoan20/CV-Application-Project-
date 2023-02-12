import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import { InfoFieldMultiple } from "../components/infoField.jsx";
import NameBar from "../components/nameBar";

export default class ExperienceSection extends Component { 
    constructor(props) { 
        super (props);
    }

    render () { 
        const { showAllButtons } = this.props;
        return ( 
            <section className="composed-section">
                <NameBar name = "Personal Experience"
                    cl = "section-namebar"
                    Fcl = "namebar-field-form"
                    Icl = "namebar-field-input" 
                    Bcl = "namebar-field-button"showAllButtons = {showAllButtons} /> 
                <InfoFieldMultiple name = "Jobs" description = "model: job - description" showAllButtons = {showAllButtons}/> 
                <hr />
                <InfoFieldMultiple showAllButtons = {showAllButtons} name = "Others" description = "model: extracurricular activities during highschool / courses"/>
                <hr />
            </section>
        )
    }
}
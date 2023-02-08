import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import { InfoFieldMultiple } from "../components/infoField.jsx";
import NameBar from "../components/nameBar";

export default class AboutSection extends Component { 
    constructor (props) { 
        super (props);
    }

    render () { 
        return ( 
            <section className="composed-section">
            <NameBar name = 'About Me' cl = "section-namebar"
                    Fcl = "namebar-field-form"
                    Icl = "namebar-field-input" 
                    Bcl = "namebar-field-button" /> 
            <InfoField name = '...cuvant de introducere: '/> 
            </section>
        )
    }
}
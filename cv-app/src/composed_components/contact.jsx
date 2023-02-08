import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import { InfoFieldMultiple } from "../components/infoField.jsx";
import NameBar from "../components/nameBar";

export default class ContactSection extends Component { 
    constructor(props) { 
        super(props);
    }

    render () { 
        const { showAllButtons } = this.props;
        return ( 
            <section className="composed-section">
                <NameBar name = "Contact Details" 
                    cl = "section-namebar"
                    Fcl = "namebar-field-form"
                    Icl = "namebar-field-input" 
                    Bcl = "namebar-field-button"
                    showAllButtons = {showAllButtons}/>
                <InfoField name = "Email: "
                    showAllButtons = {showAllButtons}/>
                <hr />
                <InfoField 
                    name = "Phone: "
                    showAllButtons = {showAllButtons}/>
                <hr />
                <InfoField name = "Adress: "
                    showAllButtons = {showAllButtons}/>
                <hr />
            </section>
        )
    }
}
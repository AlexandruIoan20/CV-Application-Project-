import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import { InfoFieldMultiple } from "../components/infoField.jsx";
import NameBar from "../components/nameBar";

export default class ContactSection extends Component { 
    constructor(props) { 
        super(props);
    }

    render () { 
        return ( 
            <section className="composed-section">
                <NameBar name = "Contact Details" 
                cl = "section-namebar"
                Fcl = "namebar-field-form"
                Icl = "namebar-field-input" 
                Bcl = "namebar-field-button"/>
                <InfoField name = "Email: "/>
                <hr />
                <InfoField name = "Phone: "/>
                <hr />
                <InfoField name = "Adress: "/>
                <hr />
            </section>
        )
    }
}
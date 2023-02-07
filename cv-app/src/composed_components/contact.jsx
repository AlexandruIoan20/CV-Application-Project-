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
            <section>
                <NameBar name = "Contact Details" />
                <InfoField name = "Email"/>
                <InfoField name = "Phone"/>
                <InfoField name = "Adress"/>
            </section>
        )
    }
}
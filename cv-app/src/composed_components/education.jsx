import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import { InfoFieldMultiple } from "../components/infoField.jsx";
import NameBar from "../components/nameBar";

export class EducationSection extends Component { 
    constructor (props) { 
        super(props);
    }

    render () { 
        return ( 
            <section>
                <NameBar name = 'Education'/> 
                <InfoField name = 'School'/>
                <InfoField name = 'High school'/>  
                <InfoField name = 'University' />
                <InfoFieldMultiple name = "Others" description = "*Other official courses*"/> 
            </section>
        )
    }
}
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
                <InfoField name = 'School'/>
                <InfoField name = 'High school'/>  
                <InfoFieldMultiple name = "Others"/> 
            </section>
        )
    }
}
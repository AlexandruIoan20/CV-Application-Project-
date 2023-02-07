import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import { InfoFieldMultiple } from "../components/infoField.jsx";
import NameBar from "../components/nameBar";

export default class ExperienceSection extends Component { 
    constructor(props) { 
        super (props);
    }

    render () { 
        return ( 
            <section>
                <NameBar name = "Personal Experience"/>
                <InfoFieldMultiple name = "Jobs" description = "model: job - description"/> 
                <InfoFieldMultiple name = "Others" description = "model: extracurricular activities during highschool / courses"/>
            </section>
        )
    }
}
import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import { InfoFieldMultiple } from "../components/infoField.jsx";
import NameBar from "../components/nameBar";


export default class IntroSection extends Component { 
    constructor(props) { 
        super (props);
    }

    render () { 
        return ( 
            <section>
                <InfoField name = "Name"/> 
                <InfoField name = "Surname"/> 
                <InfoField name = "Specialization" /> 
            </section>
        )
    }
}


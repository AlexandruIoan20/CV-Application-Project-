import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import ImageGenerator from "../components/imageGenerator.jsx";


export default class IntroSection extends Component { 
    constructor(props) { 
        super (props);
    }

    render () { 
        return ( 
            <section>
                <ImageGenerator /> 
                <InfoField name = "Name"/> 
                <InfoField name = "Surname"/> 
                <InfoField name = "Specialization" /> 
            </section>
        )
    }
}


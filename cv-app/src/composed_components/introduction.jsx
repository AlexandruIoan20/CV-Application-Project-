import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import ImageGenerator from "../components/imageGenerator.jsx";


export default class IntroSection extends Component { 
    constructor(props) { 
        super (props);
    }

    render () { 
        return ( 
            <section className="composed-section">
                <ImageGenerator /> 
                <InfoField name = "Name: "/> 
                <hr />
                <InfoField name = "Surname: "/> 
                <hr />
                <InfoField name = "Specialization: " /> 
                <hr />
            </section>
        )
    }
}


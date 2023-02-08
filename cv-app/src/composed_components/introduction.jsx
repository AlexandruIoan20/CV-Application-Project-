import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import ImageGenerator from "../components/imageGenerator.jsx";


export default class IntroSection extends Component { 
    constructor(props) { 
        super (props);
    }

    render () { 
        const { showAllButtons } = this.props;
        return ( 
            <section className="composed-section">
                <ImageGenerator /> 
                <InfoField name = "Name: "
                showAllButtons = {showAllButtons}/> 
                <hr />
                <InfoField name = "Surname: "
                showAllButtons = {showAllButtons}/> 
                <hr />
                <InfoField name = "Specialization: "
                showAllButtons = {showAllButtons} /> 
                <hr />
            </section>
        )
    }
}


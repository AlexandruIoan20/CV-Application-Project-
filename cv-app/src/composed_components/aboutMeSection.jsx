import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import { InfoFieldMultiple } from "../components/infoField.jsx";
import NameBar from "../components/nameBar";

export default class AboutSection extends Component { 
    constructor (props) { 
        super (props);
    }

    render () { 
        return ( 
            <InfoField name = "About Me"/> 
        )
    }
}
import React, { Component } from "react";
import InfoField from "../components/infoField.jsx";
import ImageGenerator from "../components/imageGenerator.jsx";


export default class IntroSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showAllButtons, stopFunctionality, onShowPhotoInfo, onCancel, showPhotoInfoSection } = this.props;

        return (
            <section className="composed-section intro-section">
                <section className="intro-image-section">
                    <ImageGenerator showAllButtons={showAllButtons}
                        stopFunctionality={ stopFunctionality }
                        onShowPhotoInfo = { onShowPhotoInfo } 
                        showPhotoInfoSection = { showPhotoInfoSection } 
                        onCancel = { onCancel }/>
                </section>

                <section className="intro-data-section">
                    <InfoField name="Name: "
                        showAllButtons={showAllButtons}
                        stopFunctionality={stopFunctionality} />
                    <hr />
                    <InfoField name="Surname: "
                        showAllButtons={showAllButtons}
                        stopFunctionality={stopFunctionality} />
                    <hr />
                    <InfoField name="Specialization: "
                        showAllButtons={showAllButtons}
                        stopFunctionality={stopFunctionality} />
                    <hr />
                </section>
            </section>
        )
    }
}


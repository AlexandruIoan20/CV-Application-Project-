import React, { Component } from 'react';
import './styles/main.css';
import './styles/form.css'
import InfoField from './components/infoField.jsx';
import { InfoFieldMultiple } from './components/infoField.jsx';
import ContactSection from './composed_components/contact.jsx';
import AboutSection from './composed_components/aboutMeSection.jsx';
import { EducationSection } from './composed_components/education.jsx';
import ExperienceSection from './composed_components/experience.jsx';
import IntroSection from './composed_components/introduction.jsx';
import ImageGenerator from './components/imageGenerator.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAllButtons: true,
    }
  }

  hideButtons = () => {
    const showAllButtons = !this.state.showAllButtons;

    this.setState({ ...this.state, showAllButtons });
  }

  render() {
    const { showAllButtons } = this.state;
    return (
      <section className='container'>
        <IntroSection showAllButtons={showAllButtons} />
        <ContactSection showAllButtons={showAllButtons} />
        <AboutSection showAllButtons={showAllButtons} />
        <EducationSection showAllButtons={showAllButtons} />
        <ExperienceSection showAllButtons={showAllButtons} />

        {showAllButtons && <button
          type='reset'
          onClick={this.hideButtons}
          className='submit-cv-button'>Submit CV</button>}

          {!showAllButtons && 
          <section className='after-submit-buttons'>
            <button
              className='submit-cv-button'
              onClick={this.hideButtons}>Resume</button> 
            
            <p className='bonus-info'>Reset the page for a new CV model!</p>
            </section>
            }
      </section>
    )
  }
};

import React, { Component } from 'react';
import './styles/main.css';
import './styles/form.css'
import './styles/buttons.css';
import './styles/intro.css';
import './styles/double_check.css';
import ContactSection from './composed_components/contact.jsx';
import AboutSection from './composed_components/aboutMeSection.jsx';
import { EducationSection } from './composed_components/education.jsx';
import ExperienceSection from './composed_components/experience.jsx';
import IntroSection from './composed_components/introduction.jsx';
import DoubleCheck from './components/doubleCheck.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAllButtons: true,
      showConfirmCVSection: false,
    }
  }

  hideButtons = () => {
    const showAllButtons = !this.state.showAllButtons;
    const showConfirmCVSection = false;

    this.setState({ ...this.state, showAllButtons, showConfirmCVSection });
    console.log(this.state.showConfirmCVSection);
  }

  confirmCV = () => { 
    const showConfirmCVSection = !this.state.showConfirmCVSection;
    this.setState({ ...this.state, showConfirmCVSection });

    console.log(this.state.showConfirmCVSection);
  }

  handlerStopFunctionality = () => { 
    return this.state.showConfirmCVSection;
  }

  render() {
    const { showAllButtons, showConfirmCVSection } = this.state;
    return (
      <section className='app-container'>
         {showAllButtons &&  <header>
          <h1>CV Creator</h1>
        </header> } 

        <main className='container'>
        <IntroSection showAllButtons={showAllButtons}  stopFunctionality =  {showConfirmCVSection}/>
        <ContactSection showAllButtons={showAllButtons} stopFunctionality =  {showConfirmCVSection}/>
        <AboutSection showAllButtons={showAllButtons} stopFunctionality =  {showConfirmCVSection} />
        <EducationSection showAllButtons={showAllButtons} stopFunctionality =  {showConfirmCVSection}/>
        <ExperienceSection showAllButtons={showAllButtons} stopFunctionality = {showConfirmCVSection} />

        {showAllButtons && 
        <button
          type='reset'
          onClick={ () => { this.confirmCV(); console.log(this.state.showConfirmCVSection) }}
          className='submit-cv-button'>Submit CV</button>}

        {showConfirmCVSection && <DoubleCheck onMainFunction = {  this.hideButtons }
          onCancel = {this.confirmCV}
          description = "Are you sure you want to submit the CV?"
            /> }

          {!showAllButtons && 
          <section className='after-submit-buttons'>
            <button
              className='submit-cv-button'
              onClick={this.hideButtons}>Resume</button> 
            
            <p className='bonus-info'>Reset the page for a new CV model!</p>
            </section>
            }
            </main>

          {showAllButtons && 
              <footer>
              <p>©Alexandru Ioan 2023 - AlexandruIoan20 Github</p>
            </footer>
          }
      </section>
    )
  }
};

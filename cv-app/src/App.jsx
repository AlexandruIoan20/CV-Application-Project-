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

      notifications: { 
        showConfirmCVSection: false,
      },

      programFunctional: true,
    }
  }

  hideButtons = () => {
    const showAllButtons = !this.state.showAllButtons;
    const programFunctional = true;

    const notifications = this.state.notifications; 
    notifications.showConfirmCVSection = false;

    this.setState({ ...this.state, showAllButtons, notifications, programFunctional });
  }

  confirmCV = () => { 
    const notifications = this.state.notifications; 
    notifications.showConfirmCVSection = !this.state.notifications.showConfirmCVSection;

    const programFunctional = false;

    this.setState( {...this.state, notifications, programFunctional });
  }

  programIsFunctional = () => { 
    let calculateProgramFunctional;
    const notifications = Object.values(this.state.notifications);
    notifications.forEach(n => { 
      if(n === true) calculateProgramFunctional = false;
    })

    calculateProgramFunctional = true;
    const programFunctional = calculateProgramFunctional;
    this.setState( { ...this.state, programFunctional});
  }

  cancelEverything = () =>  {
    const notifications = this.state.notifications;

    for(const property in notifications) {
      notifications[property] = false;
    }

    const programFunctional = true; 

    this.setState( {...this.state, notifications, programFunctional});
  }

  render() {
    const { showAllButtons, notifications, programFunctional } = this.state;
    console.log( { programFunctional });
    return (
      <section className='app-container'>
         {showAllButtons &&  <header>
          <h1>CV Creator</h1>
        </header> } 

        <main className='container'>
        <IntroSection showAllButtons={showAllButtons}  stopFunctionality =  {programFunctional}/>
        <ContactSection showAllButtons={showAllButtons} stopFunctionality =  {programFunctional}/>
        <AboutSection showAllButtons={showAllButtons} stopFunctionality =  {programFunctional} />
        <EducationSection showAllButtons={showAllButtons} stopFunctionality =  {programFunctional}/>
        <ExperienceSection showAllButtons={showAllButtons} stopFunctionality = {programFunctional} />

        {showAllButtons && 
        <button
          type='reset'
          onClick={ async () => {
             this.confirmCV(); 
            console.log(this.state);
            }}
          className='submit-cv-button'>Submit CV</button>}

        { !programFunctional && notifications.showConfirmCVSection
           && <DoubleCheck onMainFunction = { () => {  this.hideButtons(); } }
          onCancel = {this.cancelEverything}
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

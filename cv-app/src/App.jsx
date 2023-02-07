import React, { Component } from 'react';
import InfoField from './components/infoField.jsx';
import { InfoFieldMultiple } from './components/infoField.jsx';
import ContactSection from './composed_components/contact.jsx';
import AboutSection from './composed_components/aboutMeSection.jsx';
import { EducationSection } from './composed_components/education.jsx';

export default class App extends Component { 
  constructor (props) { 
    super(props);
  }

  render () {  
    return ( 
      <section className='container'>
        <EducationSection/> 
      </section>  
    )
  }
};

import React, { Component } from 'react';
import ImageGenerator from './components/imageGenerator.jsx';

export default class App extends Component { 
  constructor (props) { 
    super(props);
  }

  render () {  
    return ( 
      <section className='container'>
        <ImageGenerator/>
      </section>  
    )
  }
};

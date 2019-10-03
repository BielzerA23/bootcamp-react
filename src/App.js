import React, { Component } from "react";
import Home from './pages/home/Home';
import Step1 from './pages/signup/step1/Step1';
import Signup from './pages/signup/Signup';
import './template/assets/css/normalize.css';
import './template/assets/css/template.css';
import './template/assets/css/style.css';

export default class App extends Component {
  

  handleChange = (event) => {

  }
      render() 
      {
        <>
        return <Step1 />
        return<Signup />
        </>
      }

}
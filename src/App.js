import React, { Component } from "react";
import './App.css'
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';


class App extends Component {
  constructor(){
    super();

    this.changeMode = this.changeMode.bind(this);

    this.state = {
      mode: 'edit',
      otherMode: 'preview',
    };
  }

  changeMode = (e) =>{
    console.log(this);
    console.log(this.state.mode);
    if (this.state.mode === 'edit'){
      console.log(this.state.mode);
      this.setState({mode: 'preview', otherMode: 'edit'}, ()=>{
        // after mode is set to preview
        console.log(this.state.mode);

      });
    } else if (this.state.mode === 'preview') {
      console.log(this.state.mode);
      this.setState({mode: 'edit', otherMode: 'preview'}, ()=>{
        // after mode is set to edit
        console.log(this.state.mode);
        
      });
    }
  }



  render() {
    return (
      <div id='entireContainer'>
        <div id='header'>
          <button id='btnMode' onClick={this.changeMode}>{this.state.otherMode}</button>
        </div>
        <div id='cvContainer'>
          <GeneralInfo />
          <Education />
          <Experience />
          {/* <Skills /> */}
        </div>
      </div>
    )
  }
}

export default App;
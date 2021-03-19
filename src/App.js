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
      // mode: 'edit',
      // otherMode: 'preview',
      isEdit: true,
    };
  }

  changeMode = (e) =>{
    console.log(this);
    console.log(this.state.isEdit);
    // if (this.state.mode === 'edit'){
    //   console.log(this.state.mode);
    //   this.setState({mode: 'preview', otherMode: 'edit'}, ()=>{
    //     // after mode is set to preview
    //     console.log(this.state.mode);

    //   });
    // } else if (this.state.mode === 'preview') {
    //   console.log(this.state.mode);
    //   this.setState({mode: 'edit', otherMode: 'preview'}, ()=>{
    //     // after mode is set to edit
    //     console.log(this.state.mode);
    //   });
    // }
    this.setState({
      isEdit: !this.state.isEdit
    })
  }



  render() {
    const {isEdit} = this.state;

    return (
      <div id='entireContainer'>
        <div id='headerContainer'>
          <div id='header'>
          <span className="material-icons">assignment</span>
            C.V. Builder</div>
          <button id='btnMode' onClick={this.changeMode}>{this.state.isEdit ? 'preview':'edit'}</button>
        </div>
        <div id='cvContainer'>
          <GeneralInfo />
          <Education isEdit={isEdit}/>
          <Experience isEdit={isEdit}/>
          <Skills isEdit={isEdit}/>
        </div>
      </div>
    )
  }
}

export default App;
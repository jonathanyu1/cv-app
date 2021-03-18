import React, {Component} from 'react';
import uniqid from 'uniqid';

class Education extends Component{
    constructor(){
        super();
    
        this.newEducation = this.newEducation.bind(this);

        this.state = {
        };
      }

    newEducation = (e) =>{
        console.log(e);
        console.log(this);
    }  
    
    render() {
        return (
        <div id='educationContainer'>
            <div id='educationHeader'>Education</div>
            <form id='educationForm'>

            </form>
            <button id='btnNewEducation' onClick={this.newEducation}>
                <span class='material-icons'>add_circle_outline</span>
            New</button>
        </div>
        )
    }
}

export default Education

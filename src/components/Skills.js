import React, {Component} from 'react';
import uniqid from 'uniqid';
import NewSectionSkill from './NewSectionSkill';

class Skills extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.deleteSection = this.deleteSection.bind(this);

        this.state = {
            skill: {
                name: '',
                id: uniqid(),
            },
            skillList: [],
            formIsHidden: true,
            btnIsHidden: false,
        };
      }

    toggleForm = () =>{
        // https://www.dev-tips-and-tricks.com/toggle-visibility-with-react
        this.setState({
            formIsHidden: !this.state.formIsHidden,
            btnIsHidden: !this.state.btnIsHidden
        })
    }
    
    handleChange = (e) =>{
        this.setState(prevState =>({
            skill: {...prevState.skill, [e.target.name]:e.target.value}
          }));
    }

    clearForm = () => {
        console.log(this.state.skill.id);
        this.setState(prevState =>({
            skill: {...prevState.skill,
                name: '',
                id: uniqid(),
            }
          }));
    }

    cancelForm = () => {
        // reset form inputs, hide form, unhide new button
        this.clearForm();
        this.toggleForm();
    }

    onSubmitForm = (e) =>{
        e.preventDefault();
        this.setState({
            skillList: this.state.skillList.concat(this.state.skill)
        });
        this.clearForm();
        this.toggleForm();
    }

    deleteSection = (id) => {
        console.log(id);
        // https://stackoverflow.com/a/48598110
        this.setState((prevState)=>({
            skillList: prevState.skillList.filter(skill=>skill.id!==id),
        }))
    }

    
    
    render () {
        const { skillList } = this.state;
        const { isEdit } = this.props;

        return (
        <div id='skillsContainer'>
            <div id='skillsHeader'>Skills</div>
            <NewSectionSkill isEdit={isEdit} skillList={skillList} deleteSection={this.deleteSection}/>
            <form id='skillForm' onSubmit={this.onSubmitForm} className={this.state.formIsHidden ? 'hide':'skillForm'}>
                {/* skill name */}
                <div className='skillFormDetail'>
                    <label htmlFor='skillNameInput'>Skill Name: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.skill.name}
                        type='text'
                        id='skillNameInput'
                        name='name'
                    />
                </div>
                <div className='formBtnContainer'>
                    <button
                        id='btnAddSkill'
                        type='submit'
                        className='btnForm'
                    >
                        <span className='material-icons'>add_circle_outline</span>
                    Add</button>

                    <button
                        id='btnCancelSkill'
                        type='button'
                        onClick={this.cancelForm}
                        className='btnForm'
                    > 
                        <span className="material-icons">clear</span>
                    Cancel</button>
                </div>
            </form>
            <button 
                id='btnNewSkill' 
                onClick={this.toggleForm}
                className={this.state.btnIsHidden ? 'hide':'btnNewSection'}
                > 
                <span className='material-icons'>add_circle_outline</span>
            New</button>
        </div>
        )
    }
}

export default Skills
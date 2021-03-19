import React, {Component} from 'react';
import uniqid from 'uniqid';
import NewSection from './NewSection';

class Education extends Component{
    constructor(props){
        super(props);

        // this.newEducation = this.newEducation.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteSection = this.deleteSection.bind(this);

        this.state = {
            section: {
                school: '',
                fromDate: '',
                toDate: '',
                degree: '',
                id: uniqid(),
            },
            sectionList: [],
            formIsHidden: true,
            btnIsHidden: false,
        };
      }

    handleChange = (e) =>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        console.log(e.target.name);
        this.setState(prevState =>({
            section: {...prevState.section, [e.target.name]:e.target.value}
          }));
    }

    toggleForm = () =>{
        // https://www.dev-tips-and-tricks.com/toggle-visibility-with-react
        this.setState({
            formIsHidden: !this.state.formIsHidden,
            btnIsHidden: !this.state.btnIsHidden
        })
    }

    clearForm = () => {
        console.log(this.state.section.id);
        this.setState(prevState =>({
            section: {...prevState.section,
                school: '',
                fromDate: '',
                toDate: '',
                degree: '',
                id: uniqid(),
            }
          }));
    }

    cancelForm = () => {
        // reset form inputs, hide form, unhide new button
        this.clearForm();
        this.toggleForm();
    }

    // newEducation = (e) =>{
    //     console.log(e);
    //     console.log(this);
    //     // give form visible, hide btnNewEducation
    //     this.toggleForm();
    // }  

    onSubmitForm = (e) =>{
        e.preventDefault();
        this.setState({
            sectionList: this.state.sectionList.concat(this.state.section)
            // sectionList: [...prevState.sectionList, this.state.section]
        });
        this.clearForm();
        this.toggleForm();
    }

    deleteSection = (id) => {
        console.log(id);
        // https://stackoverflow.com/a/48598110
        this.setState((prevState)=>({
            sectionList: prevState.sectionList.filter(section=>section.id!==id),
        }))
    }
    
    render() {
        const { sectionList } = this.state;
        const { isEdit } = this.props;

        return (
        <div id='educationContainer'>
            <div id='educationHeader'>Education</div>
            <NewSection sectionList={sectionList} deleteSection={this.deleteSection} isEdit={isEdit}/>
            <form id='educationForm' onSubmit={this.onSubmitForm} className={this.state.formIsHidden ? 'hide':'educationForm'}>
                {/* school */}
                <div className='eduFormDetail'>
                    <label htmlFor='schoolInput'>Name of University/College: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.section.school}
                        type='text'
                        id='schoolInput'
                        name='school'
                    />
                </div>
                {/* date from */}
                <div className='eduFormDetail'>
                    <label htmlFor='fromDateInput'>From: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.section.fromDate}
                        type='date'
                        id='fromDateInput'
                        name='fromDate'
                    />
                </div>
                {/* date to */}
                <div className='eduFormDetail'>
                    <label htmlFor='toDateInput'>To: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.section.toDate}
                        type='date'
                        id='toDateInput'
                        name='toDate'
                    />
                </div>
                {/* degree */}
                <div className='eduFormDetail'>
                    <label htmlFor='degreeInput'>Degree: </label>
                    <input
                        onChange={this.handleChange}
                        value={this.state.section.degree}
                        type='text'
                        id='degreeInput'
                        name='degree'
                    />
                </div>
                <div className='formBtnContainer'>
                    <button
                        id='btnAddEducation'
                        type='submit'
                        className='btnForm'
                    >
                        <span className='material-icons'>add_circle_outline</span>
                    Add</button>

                    <button
                        id='btnCancelEducation'
                        type='button'
                        onClick={this.cancelForm}
                        className='btnForm'
                    > 
                        <span className="material-icons">clear</span>
                    Cancel</button>
                </div>
            </form>
            <button 
                id='btnNewEducation' 
                onClick={this.toggleForm}
                className={this.state.btnIsHidden ? 'hide':'btnNewSection'}
                > 
                <span className='material-icons'>add_circle_outline</span>
            New</button>

        </div>
        )
    }
}

export default Education

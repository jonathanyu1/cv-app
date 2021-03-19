import React, {Component} from 'react';
import uniqid from 'uniqid';
import NewSectionExp from './NewSectionExp';

class Experience extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.deleteSection = this.deleteSection.bind(this);

        this.state = {
            section: {
                job: '',
                fromDate: '',
                toDate: '',
                company: '',
                description: '',
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
                job: '',
                fromDate: '',
                toDate: '',
                company: '',
                description: '',
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
            sectionList: this.state.sectionList.concat(this.state.section)
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
        <div id='expContainer'>
            <div id='expHeader'>Experience</div>
            <NewSectionExp isEdit={isEdit} sectionList={sectionList} deleteSection={this.deleteSection}/>
            <form id='expForm' onSubmit={this.onSubmitForm} className={(this.state.formIsHidden || !isEdit) ? 'hide':'form'}>
                {/* job */}
                <div className='formDetail'>
                    <label htmlFor='schoolInput'>Job Title: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.section.job}
                        type='text'
                        id='jobInput'
                        name='job'
                    />
                </div>
                {/* date from */}
                <div className='formDetail'>
                    <label htmlFor='expFromDateInput'>From: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.section.fromDate}
                        type='date'
                        id='expFromDateInput'
                        name='fromDate'
                    />
                </div>
                {/* date to */}
                <div className='formDetail'>
                    <label htmlFor='expToDateInput'>To: </label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.section.toDate}
                        type='date'
                        id='expToDateInput'
                        name='toDate'
                    />
                </div>
                {/* company */}
                <div className='formDetail'>
                    <label htmlFor='companyInput'>Company: </label>
                    <input
                        onChange={this.handleChange}
                        value={this.state.section.company}
                        type='text'
                        id='companyInput'
                        name='company'
                    />
                </div>
                {/* description */}
                <div className='formDetail'>
                    <label htmlFor='expDescription'>Description: </label>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.section.description}
                        type='text'
                        id='descriptionInput'
                        name='description'
                    >
                    </textarea>
                </div>

                <div className='formBtnContainer'>
                    <button
                        id='btnAddExp'
                        type='submit'
                        className='btnForm'
                    >
                        <span className='material-icons'>add_circle_outline</span>
                    Add</button>

                    <button
                        id='btnCancelExp'
                        type='button'
                        onClick={this.cancelForm}
                        className='btnForm'
                    > 
                        <span className="material-icons">clear</span>
                    Cancel</button>
                </div>
            </form>
            <button 
                id='btnNewExp' 
                onClick={this.toggleForm}
                className={(this.state.btnIsHidden || !isEdit) ? 'hide':'btnNewSection'}
                > 
                <span className='material-icons'>add_circle_outline</span>
            New</button>

        </div>
        )
    }
}



export default Experience
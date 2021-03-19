import React from "react";
import EditableLabel from 'react-inline-editing';

const GeneralInfo = () =>{

    return (
        <div id='generalInfoContainer'>
            <div id='generalInfoLeft'>
                <EditableLabel text='First Name' 
                    labelClassName = 'labelFirstName'
                    inputClassName = 'inputFirstName'
                    inputPlaceHolder = 'First Name'
                />
                <EditableLabel text='Last Name'
                    labelClassName = 'labelLastName'
                    inputClassName = 'inputLastName'
                />

            </div>
            <div id='generalInfoRight'>
                <div className='generalInfoRightDetails'>
                    <span className="material-icons">call</span>
                    <EditableLabel text='Phone'
                        labelClassName = 'labelPhone'
                        inputClassName = 'inputPhone'
                    />
                </div>
                <div className='generalInfoRightDetails'>
                    <span className="material-icons">mail</span>
                    <EditableLabel text='Email'
                        labelClassName = 'labelEmail'
                        inputClassName = 'inputEmail'
                    />
                </div>
                <div className='generalInfoRightDetails'>
                    <span className="material-icons">location_on</span>
                    <EditableLabel text='Location'
                        labelClassName = 'labelLocation'
                        inputClassName = 'inputLocation'
                    />
                </div>
                
            </div>

        </div>
    )
};

export default GeneralInfo
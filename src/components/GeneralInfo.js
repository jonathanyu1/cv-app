import React, { Component } from "react";
import EditableLabel from 'react-inline-editing';

const GeneralInfo = () =>{
    return (
        <div id='generalInfoContainer'>
            <div id='generalInfoLeft'>
                <EditableLabel text='First Name' 
                    labelClassName = 'labelFirstName'
                    inputClassName = 'inputFirstName'
                />
                <EditableLabel text='Last Name'
                    labelClassName = 'labelLastName'
                    inputClassName = 'inputLastName'
                />

            </div>
            <div id='generalInfoRight'>
                <EditableLabel text='Phone'
                    labelClassName = 'labelPhone'
                    inputClassName = 'inputPhone'
                />
                <EditableLabel text='Email'
                    labelClassName = 'labelEmail'
                    inputClassName = 'inputEmail'
                />
                <EditableLabel text='Location'
                    labelClassName = 'labelLocation'
                    inputClassName = 'inputLocation'
                />
            </div>

        </div>
    )
};

export default GeneralInfo
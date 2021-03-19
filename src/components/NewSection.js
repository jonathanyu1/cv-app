import React from 'react'

const NewSection = (props) =>{
    const {sectionList, isEdit} = props;

    console.log(isEdit);

    return (
        <div id='sectionListContainer'>
            {sectionList.map((section)=>{
                return (
                    <div className='sectionContainer' key={section.id}>
                        <div className='sectionLeft'>
                            <div className='sectionSchool'>{section.school}</div>
                            <div className='sectionDegree'>{section.degree}</div>
                        </div>
                        <div className='sectionRight'>
                            <div className='sectionDate'>{section.fromDate} - {section.toDate}</div>
                            {/* <div className='sectionFromDate'>{section.fromDate}</div>
                            <div className='sectionToDate'>{section.toDate}</div> */}
                            {/* <button className='btnDeleteSection' onClick={()=> props.deleteSection(section.id)}>
                                <span className="material-icons">clear</span>
                            </button> */}
                            <button className={isEdit ? 'btnDeleteSection' : 'hideVisibility'} onClick={()=> props.deleteSection(section.id)}>
                                <span className="material-icons">clear</span>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NewSection
import React from 'react'

const NewSectionExp = (props) =>{
    const {sectionList} = props;

    return (
        <div id='sectionListContainer'>
            {sectionList.map((section)=>{
                return (
                    <div className='sectionContainer' key={section.id}>
                        <div className='sectionLeft'>
                            <div className='sectionJob'>{section.job}</div>
                            <div className='sectionCompany'>{section.company}</div>
                            <div className='sectionDescription'>{section.description}</div>
                        </div>
                        <div className='sectionRight'>
                            <div className='sectionDate'>{section.fromDate} - {section.toDate}</div>
                            <button className='btnDeleteSection' onClick={()=> props.deleteSection(section.id)}>
                                <span className="material-icons">clear</span>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NewSectionExp
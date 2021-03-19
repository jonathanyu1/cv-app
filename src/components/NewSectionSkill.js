import React from 'react'

const NewSectionSkill = (props) =>{
    const {skillList, isEdit} = props;

    return (
        <div id='skillListContainer'>
            {skillList.map((skill)=>{
                return (
                    <div className='skillContainer' key={skill.id}>
                        <div className='skillName'>{skill.name}</div>
                        {/* <button className='btnDeleteSkill' onClick={()=> props.deleteSection(skill.id)}>
                            <span className="material-icons">clear</span>
                        </button> */}
                        <button className={isEdit ? 'btnDeleteSkill':'hideVisibility'} onClick={()=> props.deleteSection(skill.id)}>
                            <span className="material-icons">clear</span>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default NewSectionSkill
import React from 'react'

const NewSectionSkill = (props) =>{
    const {skillList} = props;

    return (
        <div id='skillListContainer'>
            {skillList.map((skill)=>{
                return (
                    <div className='skillContainer' key={skill.id}>
                        <div className='skillName'>{skill.name}</div>
                        <button className='btnDeleteSkill' onClick={()=> props.deleteSection(skill.id)}>
                            <span className="material-icons">clear</span>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default NewSectionSkill
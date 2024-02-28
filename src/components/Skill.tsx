import '../css/Skill.css'
import React from 'react';
import skills from "../jsonFiles/Skill.json";
const Skill:React.FC = () => {
  const skillElement=(skills.skills.map((skill,index)=>{
        return <div key={index} className='technology-div'>
        <img src={`skills/${skill.logo}`} alt=''></img>
        <h4>{skill.technologyName}</h4>
        </div>
  }))
  
  return <div id="skill">
      <div className='all-technology-div'>
      {skillElement}
      </div>
  </div>
}

export default Skill
import'../css/Education.css'
import {education  } from "../jsonFiles/Education.json";
const Education:React.FC= () => {
  function capitalize(str: string): string {
    if (!str) {
      return str;
    }
    const words=str.split(' ');
    let newStr=""
    words.forEach((word)=>{
        newStr=newStr+" "+word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    })
    return newStr;
  }
const educationsTemplates=(education.map((courestion,index)=>{
  const {CourseTitle,instituteName,instituteAddress,instituteImage,Duration,Status}=courestion;
  return <div className='courses-div' key={index}>
  <section className='institute-image'>
    <img src={`education/${instituteImage}`} alt=''></img>
    </section>
  <section className='courses-details'>
    <h1 className='courses-title'>{CourseTitle}</h1>
    <p className='institute'>
      <span className='institute-name'>{capitalize(instituteName)}</span>
    <span className='institute-address'> {instituteAddress}</span>
    </p>
    <p className='courses-status'> {Duration}|{Status}</p>
  </section>
</div>
}))
  return <div id="education">
    {educationsTemplates}
  </div>
}

export default Education
import '../css/About.css'
import colorPhoto from "../assets/myColorPhotoForAbout.jpg";
import balackWhitePhoto from "../assets/myBalack&WhitePhotoForAbout.jpg";
import { MdDownloadForOffline } from "react-icons/md";
import resumeUrl from '../assets/MyResume.pdf'; 
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';
const About: React.FC = () => {
  const handleDownloadResume = ():void => {
   saveAs(resumeUrl,"Sobhan_resume.pdf") 
  };
  const email="sobhandepp2021@gmail.com"
  return <div id='about'>
    <section>
      <div className='img-div' >
        <img src={colorPhoto} alt="" className='color-img'  />
        <img src={balackWhitePhoto} alt="" className='black-white-img' />
      </div>
    </section>
    <section>
      <h2>I'm Sobhandev</h2>
      <h3>Full Stack Developer</h3>
      <p> I am Sobhandev Pramanik, a full-stack developer from Arambag, West Bengal, India. I'm currently studying Computer Science and Engineering at Abacus Institute of Engineering and Management. I really enjoy coding and solving problems. My expertise lies in MERN stack development, where I create web solutions from the front to the back end. I love the excitement of making cool and user-friendly applications that matter.</p>
      <p><span className='color-02aabd'>Email </span>: <Link  to={`mailto:${email}`} >{email}</Link></p>
      <p><><span className='color-02aabd'>Address</span>: <span >West Bengal , India </span></></p>
      <button className='resume-download-btn' onClick={handleDownloadResume}> Resume <MdDownloadForOffline className='icon' /></button>

    </section>
  </div>
}

export default About
import '../css/About.css'
import colorPhoto from "../assets/myColorPhotoForAbout.jpg";
import balackWhitePhoto from "../assets/myBalack&WhitePhotoForAbout.jpg";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import MagicCardGradient from './MagicCardGradient';
import { useEffect, useRef, useState } from 'react';
const resumeUrl = "https://drive.google.com/file/d/1k79fEM_XMoxTspPY8zp6swZB5pECeXSS/view?usp=drive_link";
export const email = "sobhandevp2021@gmail.com"
const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement| null>(null)
  const [imageurl,setImageUrl]=useState<string>(balackWhitePhoto);
    useEffect(()=>{
        const imageContainer=imageRef.current;
        if (imageContainer) {
          imageContainer.addEventListener("mouseenter",()=>{
              setImageUrl(colorPhoto)
              
          })
          imageContainer.addEventListener("mouseleave",()=>{
            setImageUrl(balackWhitePhoto)
          })
        }
    },[])
  return <div id='about'>
    <section>
      <div ref={imageRef} className='img-div relative' >
        {/* <img src={colorPhoto} alt="" className='color-img' />
        <img src={balackWhitePhoto} alt="" className='black-white-img' /> */}
        <img src={imageurl} alt="" className='absolute object-center w-11/12 z-10 h-full' />
        <MagicCardGradient  />
      </div>
    </section>
    <section>
      <h2 >I'm Sobhandev</h2>
      <h3>Full Stack Developer</h3>
      <p> I am Sobhandev Pramanik, a full-stack developer from Arambag, West Bengal, India. I'm currently studying Computer Science and Engineering at Abacus Institute of Engineering and Management. I really enjoy coding and solving problems. My expertise lies in MERN stack development, where I create web solutions from the front to the back end. I love the excitement of making cool and user-friendly applications that matter.</p>
      <p><span className='color-02aabd'>Email </span>: <Link to={`mailto:${email}`} >{email}</Link></p>
      <p><><span className='color-02aabd'>Address</span>: <span >West Bengal , India </span></></p>
      <Link to={resumeUrl} target='_blank' className='resume-download-btn' > Resume <MdArrowForwardIos className='icon' /></Link>

    </section>
  </div>
}

export default About
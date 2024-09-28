import '../css/About.css'
import colorPhoto from "../assets/myColorPhotoForAbout.jpg";
import balackWhitePhoto from "../assets/myBalack&WhitePhotoForAbout.jpg";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { useEffect, useRef, useState } from 'react';
import { email, resumeViewUrl } from '../assets/data';

const About: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [imageurl, setImageUrl] = useState<string>(balackWhitePhoto);
  useEffect(() => {
    const imageContainer = imageRef.current;
    if (imageContainer) {
      imageContainer.addEventListener("mouseenter", () => {
        setImageUrl(colorPhoto)

      })
      imageContainer.addEventListener("mouseleave", () => {
        setImageUrl(balackWhitePhoto)
      })
    }
  }, [])
  return <div id='about'>
    <section>

      <CardContainer className="inter-var">
        <CardBody className="group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-fit h-fit rounded-xl  border p-2">
          <CardItem translateZ="100" className="w-full " >
              <img src={imageurl} alt="" height={"300px"} width={"300px"} ref={imageRef} className=' rounded-md'/>
              
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
    <section>
      <h2 >I'm Sobhandev</h2>
      <h3>Full Stack Developer</h3>
      <p> I am currently pursuing a degree in Computer Science and Engineering at the Abacus Institute of Engineering and Management, affiliated with MAKAUT. I will be graduating in 2025. I possess a solid foundation in front-end technologies, including HTML, CSS, JavaScript, TypeScript, React JS, and ReduxToolkit. My academic projects and personal endeavors have equipped me with hands-on experience in web development. For instance, I have successfully developed several websites and web applications, which have helped me improve my skills in creating responsive and user-friendly interfaces. Additionally, I have a strong understanding of back-end technologies including Node JS, Express JS, and MongoDB, MySQL as a database. I am proficient in Java, DSA, and Python.</p>
      <p><span className='color-02aabd'>Email </span>: <Link to={`mailto:${email}`} >{email}</Link></p>
      <p><><span className='color-02aabd'>Address</span>: <span >West Bengal , India </span></></p>
      <Link to={resumeViewUrl} target='_blank' className='resume-download-btn' > Resume <MdArrowForwardIos className='icon' /></Link>

    </section>
  </div>
}

export default About


import '../css/Home.css'
import { Typewriter } from 'react-simple-typewriter';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import myPhot from '../assets/myPhoto.png'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import javaLogo from "../assets/java.svg";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import homeBackgrounVideo from "../assets/homebackgrounVideo.mp4";
import { FaArrowCircleDown } from "react-icons/fa";

const Home: React.FC = () => {
    const typeWords = ["Web Development", "Frontend Development", "Backend Development"];
    const scrollToAbout=():void=>{
        const aboutSection=document.getElementById("about") as HTMLDivElement;
        if (aboutSection) {
            aboutSection.scrollIntoView({behavior:"smooth"})
        }
    }
    return <div id="home">
        <section>
            <h1 >Hi There , <br /> I'm  <span className='name'>Sobhandev Pramanik</span></h1>
            <div className='type-div'>
                <p>I Am Into</p>
                <p className='type-text'>
                    <Typewriter
                        words={typeWords}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={50}
                        deleteSpeed={30}
                        delaySpeed={1500}
                        cursorBlinking={false}
                    />
                    {/* Frontend Development */}
                </p>
                
            </div>
            <button className='about-scroll-btn' onClick={scrollToAbout}><span>About Me</span><FaArrowCircleDown /></button>
            <div className='website-link'>
                <ul >
                    <li className="linkedin"><Link to={'https://www.linkedin.com/in/sobhandev-pramanik-818464226/'} target='_blank'><IoLogoLinkedin className='icon' /></Link></li>
                    <li className="github"><Link to={'https://github.com/sobhandev2003'} target='_blank'><FaGithub className='icon' /></Link></li>
                    <li className="leetCode"><Link to={'https://leetcode.com/sobhandevp2021/'} target='_blank'><TbBrandLeetcode className='icon' /></Link></li>
                    <li className="leetCode"><Link to={'https://www.geeksforgeeks.org/user/sobhandev2003/'} target='_blank'><SiGeeksforgeeks  className='icon' /></Link></li>
                </ul>
            </div>
        </section>
        <section>
            <div className="outer-div" >
                <div className='inner-div'>
                    <img src={myPhot} alt=''/>
                    <ul>
                  <li><FaHtml5 /></li>
                  <li><FaCss3Alt /></li>
                  <li><FaNodeJs /></li>
                  <li><BiLogoMongodb /></li>
                  <li><img src={javaLogo} alt=''/></li>
                  <li><FaReact /></li>
                  <li><SiTypescript /></li>
                  <li><TbBrandJavascript /></li>
           
                </ul>
                </div>
               
            </div>


        </section>
        <video className='home-background'  autoPlay muted loop >
        <source src={homeBackgrounVideo} type="video/mp4" />
        </video>

    </div>
}

export default Home
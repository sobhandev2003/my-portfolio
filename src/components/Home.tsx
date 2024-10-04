

import '../css/Home.css'
import { Typewriter } from 'react-simple-typewriter';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

import homeBackgrounVideo from "../assets/homebackgrounVideo.mp4";
import { FaFileDownload } from "react-icons/fa";
import { OrbitingCirclesHome } from './OrbitingCirclesHome';
import { CgMail } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
import { CardContainer } from './ui/3d-card';
import { email, resumeDownloadUrl } from '../assets/data';
export const WebsiteLink: React.FC = () => {

    return (
        <div className='website-link'>
            <ul >
                <li className="linkedin"><Link to={`mailto:${email}`} target='_blank'><CgMail className='icon' /></Link></li>
                <li className="linkedin"><Link to={`https://wa.me/918649863002`} target='_blank'><IoLogoWhatsapp className='icon' /></Link></li>
                <li className="linkedin"><Link to={'https://www.linkedin.com/in/sobhandev-pramanik-818464226/'} target='_blank'><IoLogoLinkedin className='icon' /></Link></li>
                <li className="github"><Link to={'https://github.com/sobhandev2003'} target='_blank'><FaGithub className='icon' /></Link></li>
                <li className="leetCode"><Link to={'https://leetcode.com/sobhandevp2021/'} target='_blank'><TbBrandLeetcode className='icon' /></Link></li>
                <li className="leetCode"><Link to={'https://www.geeksforgeeks.org/user/sobhandev2003/'} target='_blank'><SiGeeksforgeeks className='icon' /></Link></li>
            </ul>
        </div>
    )
}
const Home: React.FC = () => {
    const typeWords = ["Web Development", "Frontend Development", "Backend Development"];
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
                </p>

            </div>
            <Link to={resumeDownloadUrl} download className='download-resume' > Resume <FaFileDownload /></Link>
            <WebsiteLink />
        </section>
        <section>
            <CardContainer containerClassName='py-[0rem] mt-[-13rem]'>
                <OrbitingCirclesHome />
            </CardContainer>
        </section>
        <video className='absolute home-background' autoPlay muted loop >
            <source src={homeBackgrounVideo} type="video/mp4" />
        </video>

    </div>
}

export default Home
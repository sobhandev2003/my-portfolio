

import '../css/Home.css'
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import homeBackgrounVideo from "../assets/homebackgrounVideo.mp4";
import { FaFileDownload } from "react-icons/fa";
import { OrbitingCirclesHome } from './OrbitingCirclesHome';
import { CardContainer } from './ui/3d-card';
import { resumeDownloadUrl } from '../assets/data';
import leetCodeLogo from '../assets/leetcode.png';
import gfgLogo from '../assets/gfg.png';
import githubLogo from '../assets/github.png';

export const WebsiteLink: React.FC = () => {

    return (
        <div className='website-link'>

            <ul>
                <li className="github"><Link to={'https://github.com/sobhandev2003'} target='_blank'><img src={githubLogo} alt="Github" className='w-8 bg-white rounded-full'/></Link></li>
                <li className="leetCode"><Link to={'https://leetcode.com/sobhandevp2021/'} target='_blank'><img src={leetCodeLogo} alt="LeetCode" className='w-14'/></Link></li>
                <li className="leetCode"><Link to={'https://www.geeksforgeeks.org/user/sobhandev2003/'} target='_blank'><img src={gfgLogo} alt="GFG" className='w-8'/></Link></li>
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
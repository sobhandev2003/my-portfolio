import { Link } from 'react-scroll';
import {Link as navigateLink } from 'react-router-dom'
import '../css/Footer.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { TbBrandLeetcode } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
const quickLinkItems = ["Home", "About", "Skill", "Projects", "Education"];
const Footer = () => {

  const quickLinks = (
    quickLinkItems.map((items, index) => {
      return <Link
        key={index}
        className='quick-link'

        to={`${items.toLowerCase()}`}
        spy={true}
        smooth={true}
        offset={-73}
        duration={300}

      >
        <IoIosArrowDroprightCircle />
        {items}
      </Link>
    })
  )
  return <footer className="footer">

    <section>
      <h1>Sobhandev | Portfolio</h1>
      <p>Thank you for visiting my personal portfolio.</p>
    </section>
    <section>
      <h1>Quick Links</h1>
      <div className='quick-links-div'>
        {quickLinks}
      </div>
    </section>
    <section>
      <h1>  Contact Info  </h1>
      <ul className='contact-list'>
        <li>
          <span><MdOutlineMailOutline className='icon' /></span>
          <span>sobhandevp2021@gmail.com</span>
        </li>
        <li>
          <span><FaMobileScreenButton className='icon' /> </span>
          <p><span>+91</span><span>8649863002</span> </p>
        </li>
        <li>
          <span> <GrMapLocation className='icon' /></span>
          <span>West Bengal , India 712417</span>
        </li>
      </ul>
      <div>
        <ul className='website-link'>
          <li className="linkedin"><a href={'https://www.linkedin.com/in/sobhandev-pramanik-818464226/'} target='_blank'><IoLogoLinkedin className='icon' /></a></li>
          <li className="github"><a href={'https://github.com/sobhandev2003'} target='_blank'><FaGithub className='icon' /></a></li>
          <li className="leetCode"><a href={'https://leetcode.com/sobhandevp2021/'} target='_blank'><TbBrandLeetcode className='icon' /></a></li>
        </ul>
      </div>
    </section>
  </footer>
}

export default Footer
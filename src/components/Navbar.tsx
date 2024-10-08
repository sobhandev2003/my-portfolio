import '../css/Navbar.css'
import { useEffect, useState } from "react";
import navLogo from '../assets/_Sobhan__.png'
import { Link } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';

const NavItems = ["Home", "About", "Skill", "Projects", "Education"];
const Navbar: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isShowDialog, setIsShowDialog] = useState(false)
    const handleLinkClick = () => {
        isMobile && setIsShowDialog(false); // Set isShowDialog to false when any link is clicked
    };

    const navLinks = (
        NavItems.map((items, index) => {
            return <Link
                key={index}
                activeClass="active"
                to={`${items.toLowerCase()}`}
                spy={true}
                smooth={true}
                // offset={-73}
                offset={-200}
                duration={300}
                onClick={handleLinkClick}
            >
                {items}
            </Link>
        })
    )
    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mobileQuery.matches)
        const handleResize = (): void => {
            setIsMobile(mobileQuery.matches);
        };

        mobileQuery.addEventListener('change', handleResize)
        return () => {
            // Remove event listener
            mobileQuery.removeEventListener('change', handleResize);
        };
    }, [])

    return (
        <nav className="nav">
            <section>
                <img src={navLogo} alt="" className="nav-logo" />
            </section>
            <section>
                {!isMobile && navLinks}
                {isMobile && <MenuIcon className='toggle-btn text-white' onClick={(): void => setIsShowDialog(!isShowDialog)} />}
            </section>
            {
                isMobile && isShowDialog && <div className='mobile-nav-items-dialog'>
                    {navLinks}
                </div>
            }

        </nav>

    )
}

export default Navbar
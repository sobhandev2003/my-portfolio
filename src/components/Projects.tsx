import '../css/Projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectsCard } from './Cards'
import projects from '../jsonFiles/Projects.json'
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",

  };
  return <div id="projects" className=''>
    <div className=' project-container '>
      {
        projects &&
        // <Slider {...settings} >{
          
          projects.projects.map((project, index) => {
            return <ProjectsCard key={index}
              title={project.title}
              description={project.description}
              snapshot={project.snapshot}
              githubRepoLink={project.githubRepoLink}
              websiteLink={project.websiteLink}
              tools={project.tools}
            />
          })

        // }</Slider>
      }
    </div>
  </div>
}

export default Projects
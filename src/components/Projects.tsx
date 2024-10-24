import '../css/Projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectsCard } from './Cards'
import projects from '../jsonFiles/Projects.json'

const Projects = () => {
  
  return <div id="projects" className=''>
    <div className=' project-container '>
      {
        projects &&
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
      }
    </div>
  </div>
}

export default Projects
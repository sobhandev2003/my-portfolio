import '../css/Projects.css'
import { ProjectsCard } from './Cards'
import projects from '../jsonFiles/Projects.json'
const Projects = () => {
  return <div id="projects">
    {
      projects && projects.projects.map((project,index)=>{
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
}

export default Projects
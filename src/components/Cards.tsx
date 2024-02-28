import { Link } from 'react-router-dom';
import'../css/Cards.css'
import { BsGithub } from "react-icons/bs";
import { BsBrowserChrome } from "react-icons/bs";

type Project = {
  title: string;
  description: string;
  snapshot: string;
  githubRepoLink: string;
  websiteLink: string;
};

export const ProjectsCard = (props:Project ) => {
  const  {title,description,snapshot,githubRepoLink,websiteLink}=props;  
  return <div className="project-container">
  <div className="wrapper">
    <img src={`projects/${snapshot}`} className="project-image"/> 
    <h2>{title}</h2>
    <p>{description}</p>
   </div>
   <div className="button-wrapper"> 
   <Link to={githubRepoLink} target='_blank' className="btn "><BsGithub /></Link>
     <Link to={websiteLink} target='_blank' className="btn "><BsBrowserChrome /></Link>
   </div>
     </div>

}


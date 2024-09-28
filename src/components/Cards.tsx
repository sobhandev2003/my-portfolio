import { Link } from 'react-router-dom';
import '../css/Cards.css'
import { BsGithub } from "react-icons/bs";
import { BsBrowserChrome } from "react-icons/bs";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
type Project = {
  title: string;
  description: string;
  snapshot: string;
  githubRepoLink: string;
  websiteLink: string;
  tools: string[]

};

export const ProjectsCard = (props: Project) => {
  const { title, description, snapshot, githubRepoLink, websiteLink, tools } = props;
  return (
    <div className='p-16'>
      <CardContainer className='inter-var bg-[#02AABD] text-white rounded-xl' >
        <CardBody className=" relative group/card  w-full p-3 h-max flex flex-col gap-4 ">
          <CardItem translateZ="100" className="w-full flex flex-col items-center text-3xl font-bold ">
    
            <img src={`projects/${snapshot}`} className=" rounded-lg h-[200px] w-full" />
            <h2>{title}</h2>
            {/* </div> */}
          </CardItem>
          <CardItem translateZ="0" className="w-full">
            <p>{description}</p>
          </CardItem>
          <CardItem className=" w-full   flex flex-col gap-2 ">
            <div className='tools-container'>
              {
                tools.map((tool, index) => (
                  <p key={index} className='tool-name'>{tool}</p>
                ))
              }
            </div>
            <div className="w-full flex justify-around">
              <Link to={githubRepoLink} target='_blank' className="btn "><BsGithub /></Link>
              <Link to={websiteLink} target='_blank' className="btn "><BsBrowserChrome /></Link>
            </div>
          </CardItem>


        </CardBody>
        {/* <div className="wrapper">
      <img src={`projects/${snapshot}`} className="project-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div className='tools-container'>
      {
        tools.map((tool,index)=>(
          <p key={index} className='tool-name'>{tool}</p>
        ))
      }
    </div>
    <div className="button-wrapper">
      <Link to={githubRepoLink} target='_blank' className="btn right"><BsGithub /></Link>
      <Link to={websiteLink} target='_blank' className="btn left"><BsBrowserChrome /></Link>
    </div> */}
      </CardContainer>
    </div>
  )

}


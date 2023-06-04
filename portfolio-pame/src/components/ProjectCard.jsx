import "./Projects.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export const ProjectCard = ({ title, githubUrl, img, deployUrl }) => {
  return (

    <div className="proj-imgbx">
      <img alt="img" src={img} />
      
      <div className="btns">
        <h4>{title}</h4>
        <a href={deployUrl}target="_blank" rel="noopener noreferrer">
         <p>🔗</p>          
        </a>
        
        <a href={githubUrl}target="_blank" rel="noopener noreferrer" >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        
      </div>


    </div>

  )
}
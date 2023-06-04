import { Banner } from "./Banner"
import { NavBar } from "./NavBar"
import { Projects } from "./Projects"
import Skills from "./Skills"


import "./Skills.css"
import "./Projects.css"
import { Contact } from "./Contact"
import { Footer } from "./Footer"



const Home = () => {
	return (
		<>
			<NavBar />
			<Banner />
			<br/>
			<div className="skills-p">
				<p className="p">Skills</p>
			</div>
			<div className="skills">	
				<Skills />
			</div>
			<br/>
			<div className="projects-conteiner">
				<div className="projects-parrafo">
				 <p className="p">Projects</p>
				</div>
				<Projects/>
			</div>
			<br/>
			<Contact/>
			<br/>
			<Footer/>
			 
			  
			
			
			
			




		</>
	)
}

export default Home

import { useContext } from "react";
import { dataContext } from "./Context/DataContext";

import "./Skills.css"

const Skills = () => {
	
	const { data } = useContext(dataContext);
	return data.map((skill) => {
		return (
			
				
					<div className="target" key={skill.id}>
						<img src={skill.img} alt="skill"  />
					</div>
	)
	})

}

export default Skills


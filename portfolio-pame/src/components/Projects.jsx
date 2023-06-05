import React from 'react'
import { ProjectCard } from './ProjectCard';






export const Projects = () => {
	const projects = [
		{
			title: "eCommerce Cart",
			description: "Development",
			img : ('../assets/img/cart.png'),
			githubUrl: "https://github.com/PameSegovia/cart-Ecommerce-React/tree/master",
			deployUrl: "https://cart-ecommerce-7n1p.vercel.app/"
		},
		{
			title: "Memory Game",
			description: "Design & Development",
			img : ('../assets/img/memory.png'),
			githubUrl: "https://github.com/PameSegovia/memory-game-React",
			deployUrl: "https://memory-game-coral-alpha.vercel.app/"
		},
		{
			title: "Funko Gallery",
			description: "Design & Development",
			img : ('../assets/img/funko.png'),
			githubUrl: "https://github.com/PameSegovia/funko-gallery",
			deployUrl: "https://funko-gallery.vercel.app/"
			
		},
		{
			title: "Notes",
			description: "Design & Development",
			img : ('../assets/img/notes.png'),
			githubUrl:"https://github.com/PameSegovia/block-de-notas-React",
			deployUrl: "https://notes-three-blush.vercel.app/"
		},
		{
			title: "Pokemón",
			description: "Design & Development",
			img : ('../assets/img/pokemon.png'),
			githubUrl:"https://github.com/PameSegovia/DEV001-data-lovers",
			deployUrl: "https://pamesegovia.github.io/DEV001-data-lovers/"
			
		},
		
		{
			title: "Credit Card Validation",
			description: "Design & Development",
			img : ('../assets/img/CreditCard.png'),
			githubUrl:"https://github.com/PameSegovia/DEV001-card-validation",
			deployUrl: "https://pamesegovia.github.io/DEV001-card-validation/"
			
		},
	
	];

	return (

		<section className="projects" >	
			{
				projects.map((project, index) => {
					return (
						<ProjectCard
							key={index}
							{...project}
						/>
					)
				})
			}


		</section>
	)
}

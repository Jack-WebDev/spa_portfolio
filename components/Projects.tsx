import ProjectCard from "./ProjectCard";

export default function Projects() {
	return (
		<div className="grid justify-items-center items-center gap-y-16 relative md:grid-cols-2 md:top-[8rem] lg:top-[12rem]">
			<ProjectCard
				mobile_img="/thumbnail-project-1-small.webp"
				desktop_img="/thumbnail-project-1-large.webp"
				title="DESIGN PORTFOLIO"
				tools={["HTML", "CSS"]}
			/>
			<ProjectCard
				mobile_img="/thumbnail-project-2-small.webp"
				desktop_img="/thumbnail-project-2-large.webp"
				title="E-LEARNING LANDING PAGE"
				tools={["HTML", "CSS"]}
			/>
			<ProjectCard
				mobile_img="/thumbnail-project-3-small.webp"
				desktop_img="/thumbnail-project-3-large.webp"
				title="TODO WEB APP"
				tools={["HTML", "CSS", "Javascript"]}
			/>
			<ProjectCard
				mobile_img="/thumbnail-project-4-small.webp"
				desktop_img="/thumbnail-project-4-large.webp"
				title="ENTERTAINMENT WEB APP"
				tools={["HTML", "CSS", "Javascript"]}
			/>
			<ProjectCard
				mobile_img="/thumbnail-project-5-small.webp"
				desktop_img="/thumbnail-project-5-large.webp"
				title="MEMORY GAME"
				tools={["HTML", "CSS", "Javascript"]}
			/>
			<ProjectCard
				mobile_img="/thumbnail-project-6-small.webp"
				desktop_img="/thumbnail-project-6-large.webp"
				title="ART GALLERY SHOWCASE"
				tools={["HTML", "CSS", "Javascript"]}
			/>
		</div>
	);
}

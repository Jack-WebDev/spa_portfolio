type ExperienceProps = {
	skill: string;
	years: string;
};

export default function Experience({ skill, years }: ExperienceProps) {
	return (
		<div className="grid justify-items-center items-center md:justify-items-start md:ml-[2rem] lg:ml-[13rem] ">
			<h2 className="text-3xl">{skill}</h2>
			<h3>{years} years Experience</h3>
		</div>
	);
}

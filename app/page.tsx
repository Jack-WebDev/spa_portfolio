import Experience from "@/components/Experience";
import { ContactForm } from "@/components/Form";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<div>
			<Hero />
			<hr className="my-12 mx-8 relative md:top-[6rem] lg:top-[10rem] lg:mx-[13rem]" />

			<div className="experience grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 relative md:top-[6rem] lg:top-[10rem] lg:py-8 lg:mr-[20rem]">
				<Experience skill="HTML" years="4" />
				<Experience skill="CSS" years="4" />
				<Experience skill="Javascript" years="4" />
				<Experience skill="Accessibility" years="4" />
				<Experience skill="React" years="3" />
				<Experience skill="Sass" years="3" />
			</div>

			<hr className="my-12 mx-8 relative md:top-[6rem] lg:top-[10rem] lg:mx-[13rem]" />

			<Projects />

			<ContactForm />
		</div>
	);
}

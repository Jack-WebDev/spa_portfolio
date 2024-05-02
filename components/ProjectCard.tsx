import Image from "next/image";
import Link from "next/link";

type CardProps = {
	mobile_img:string;
    desktop_img: string,
	title: string;
	tools: string[];
};

export default function ProjectCard({ mobile_img,desktop_img, title, tools }: CardProps) {
	return (
		<div className="grid gap-y-4">
			<Image src={mobile_img} alt="" width={250} height={250} className="inline-block md:hidden " />
			<Image src={desktop_img} alt="" width={370} height={370} className="hidden md:inline-block" />
			<h2>{title}</h2>
			<div className="tools flex items-center gap-x-8">
				{tools.map((tool,index) => (
					<span key={index}>{tool}</span>
				))}
			</div>

            <div className="btns flex items-center gap-x-4">
                <Link href={"#"} className="underline decoration-primary underline-offset-8">VIEW PROJECT</Link>
                <Link href={"#"} className="underline decoration-primary underline-offset-8">VIEW CODE</Link>
            </div>
		</div>
	);
}

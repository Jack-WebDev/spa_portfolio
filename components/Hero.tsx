import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<>
			<header className="md:flex justify-between items-center pt-8 relative mx-[2rem] z-10 hidden lg:mx-[15rem]">
				<p className="text-3xl">adamkeyes</p>

				<div className="socials flex items-center gap-x-8">
					<Image src={"/icon-github.svg"} alt="" width={25} height={25} />
					<Image src={"/icon-linkedin.svg"} alt="" width={25} height={25} />
					<Image src={"/icon-twitter.svg"} alt="" width={25} height={25} />
					<Image
						src={"/icon-frontend-mentor.svg"}
						alt=""
						width={25}
						height={25}
					/>
				</div>
			</header>
			<div className="mobile_view grid justify-items-center content-center text-center gap-y-4 py-8 px-4 md:hidden">
				<h1 className="text-white">adamkeyes</h1>

				<>
					<div className="socials flex items-center gap-x-8 relative">
						<Image src={"/icon-github.svg"} alt="" width={25} height={25} />
						<Image src={"/icon-linkedin.svg"} alt="" width={25} height={25} />
						<Image src={"/icon-twitter.svg"} alt="" width={25} height={25} />
						<Image
							src={"/icon-frontend-mentor.svg"}
							alt=""
							width={25}
							height={25}
						/>
					</div>

					<Image
						src={"/image-profile-desktop.webp"}
						alt=""
						height={200}
						width={200}
					/>
					{/* <Image src={"pattern-circle.svg"} className="absolute right-[-3rem] bottom-[10rem]" alt="" height={100} width={100}/> */}
				</>
				<h2 className="text-2xl leading-10 font-semibold">
					Nice to meet you!
					<br />{" "}
					<span className="underline decoration-primary underline-offset-[6px]">
						I&apos;m Adam Keyes.
					</span>
				</h2>
				<p className="text-[#ffffff94] font-medium">
					Based in the UK, I&apos;m a front-end developer passionate about building
					accessible web apps that users love.
				</p>
				<Link
					href={"#"}
					className="underline decoration-primary underline-offset-8"
				>
					Contact Me
				</Link>
			</div>

			<div className="tablet_view hidden md:inline-block lg:hidden">
				<Image
					src={"/image-profile-tablet.webp"}
					className="absolute right-0 top-0 object-cover h-[80%] w-1/2"
					alt=""
					height={200}
					width={200}
				/>

				<div className="content relative z-10 ml-8 top-[5rem]">
					<h2 className="text-6xl leading-[3.5rem] font-semibold">
						Nice to <br /> meet you! I&apos;m
						<br />{" "}
						<span className="underline decoration-primary underline-offset-[6px]">
							{" "}
							Adam Keyes.
						</span>
					</h2>
					<p className="text-[#ffffff94] font-medium my-8 w-[40ch]">
						Based in the UK, I&apos;m a front-end developer passionate about building
						accessible web apps that users love.
					</p>
					<Link
						href={"#form"}
						className="underline decoration-primary underline-offset-8 text-2xl"
					>
						Contact Me
					</Link>
				</div>
			</div>

			<div className="desktop_view hidden lg:inline-block mx-8">
				<Image
					src={"/pattern-rings.svg"}
					alt=""
					width={500}
					height={500}
					className="relative top-[8rem]"
				/>
				<Image
					src={"/image-profile-desktop.webp"}
					className="absolute right-0 top-0 object-contain h-full w-1/2"
					alt=""
					height={200}
					width={200}
				/>

				<div className="content relative z-10 ml-[12rem] top-[5rem]">
					<h2 className="text-8xl leading-[5.5rem] font-semibold">
						Nice to meet you! <br />
						I&apos;m{" "}
						<span className="underline decoration-primary underline-offset-[1.5rem]">
							{" "}
							Adam Keyes.
						</span>
					</h2>
					<p className="text-[#ffffff94] font-medium mt-12 mb-8 text-xl w-[50ch]">
						Based in the UK, I&apos;m a front-end developer passionate about building
						accessible web apps that users love.
					</p>
					<Link
						href={"#"}
						className="underline decoration-primary underline-offset-8 text-2xl"
					>
						Contact Me
					</Link>
				</div>
			</div>
		</>
	);
}

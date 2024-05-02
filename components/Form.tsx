"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	email: z
		.string()
		.min(1, { message: "An email is required" })
		.email({ message: "Email not valid" }),
	message: z.string().optional(),
});

export function ContactForm() {
  const router = useRouter()
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
		router.push("/submission")
	}

	return (
		<div id="form" className="bg-secondary p-8 mt-[10rem] text-end md:px-[10rem] lg:mt-[20rem]">
			<div className="lg:flex lg:justify-between lg:items-center">
				<div className="lg:grid lg:justify-items-start">
					<h2 className="text-3xl mb-8 text-center lg:text-5xl">Contact</h2>
					<p className="mb-12 text-center lg:text-start lg:w-[50ch]">
						I would love to hear about your project and how I could help. Please
						fill in the form, and I&apos;ll get back to you as soon as possible.
					</p>
				</div>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 lg:w-1/2"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="Name" {...field} />
									</FormControl>

									<FormMessage className="text-red-600"/>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="Email" {...field} />
									</FormControl>

									<FormMessage className="text-red-600"/>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Textarea
											placeholder="Message"
											className="resize-none"
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" variant={"link"}>
							SEND MESSAGE
						</Button>
					</form>
				</Form>
			</div>

			<hr className="my-12 relative top-[2rem] md:top-[2rem] lg:top-[2rem] lg:mx-[0rem]" />

			<div className="grid justify-items-center items-center text-center gap-y-8 lg:flex lg:justify-around lg:items-center lg:pt-8">
				<h2>adamkeyes</h2>

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
			</div>
		</div>
	);
}

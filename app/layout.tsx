import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Frontend Mentor | Single-page developer portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-[#151414] text-white">{children}</body>
		</html>
	);
}

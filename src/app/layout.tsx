import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Roboto_Slab } from "next/font/google";
import "./globals.css";
import NavWrapper from "@/components/navbar/NavWrapper";
import NavContact from "@/components/navbar/NavContact";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const raleway = Raleway({
	variable: "--font-raleway",
	subsets: ["latin"],
	display: "swap",
});

const robotoSlab = Roboto_Slab({
	variable: "--font-roboto-slab",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Max Robles | Software Developer",
	description: "Max's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} ${robotoSlab.variable} antialiased`}
			>
				<NavWrapper />
				<NavContact />
				{children}
			</body>
		</html>
	);
}

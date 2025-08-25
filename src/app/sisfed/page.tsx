import Link from "next/link";
import React from "react";

export default function SisFedVideoPage() {
	return (
		<div className="flex flex-col items-center min-h-screen w-full gap-6 p-6">
			<div className="flex items-center justify-between w-full mx-10 my-5">
				<Link
					href="/#profile"
					className="text-2xl hidden md:block roboto-slab"
				>
					Home
				</Link>
			</div>
			<h1 className="text-2xl font-bold">SisFed Demo</h1>
			<div className="flex flex-col items-center justify-center w-full">
				<video
					src="/sisFed2.mp4"
					controls
					playsInline
					preload="metadata"
					className="w-full max-w-4xl rounded-md border"
				/>
			</div>
		</div>
	);
}

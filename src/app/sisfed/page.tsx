import React from "react";

export default function SisFedVideoPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen w-full gap-6 p-4">
			<h1 className="text-2xl font-bold">SisFed Demo</h1>
			<div className="flex flex-col items-center justify-center w-2/3 h-2/3">
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

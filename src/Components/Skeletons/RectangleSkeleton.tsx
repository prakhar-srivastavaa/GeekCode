import React from "react";

const RectangleSkeleton: React.FC = () => {
	return (
		<div className='space-y-2.5 animate-pulse max-w-lg'>
			<div className='flex items-center w-full space-x-2'>
				<div className='h-6 w-6 bg-dark-layer-1 rounded-full'></div>
				<div className='h-4 w-32 bg-dark-layer-1 rounded-full'></div>
				<div className='h-4 w-4 bg-dark-layer-1 rounded-full'></div>
				<div className='h-4 w-4 bg-dark-layer-1 rounded-full'></div>
				<div className='h-4 w-4 bg-dark-layer-1 rounded-full'></div>
				<span className='sr-only'>Loading...</span>
			</div>
		</div>
	);
};
export default RectangleSkeleton;

'use client';

import { motion } from 'framer-motion';
import useScrollProgress from '@/hooks/useScrollProgress';

const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
	const completion = useScrollProgress();

	return (
		<>
			<motion.main
				variants={variants}
				initial='hidden'
				animate='enter'
				transition={{
					type: 'linear',
					delay: 0.2,
					duration: 0.4,
				}}>
				{children}
			</motion.main>
			<span
				className='fixed top-0 bottom-0 right-0 z-50 w-1 transition-all duration-700 bg-primary'
				style={{ transform: `translateY(${completion - 100}%)` }}></span>
			<div className='h-[3500px]'></div>
		</>
	);
}
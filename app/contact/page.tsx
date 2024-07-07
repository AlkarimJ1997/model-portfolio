'use client';

import { Fade } from 'react-awesome-reveal';
import Form from '@/components/Form';

const Contact = () => {
	return (
		<section className='min-h-screen'>
			<div className='container mx-auto'>
				<div className='grid pt-12 mb-6 xl:grid-cols-2 xl:mb-24'>
					{/* Left Content */}
					<div className='flex flex-col justify-center'>
						<Fade
							direction='left'
							delay={400}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<div className='flex items-center mb-4 text-lg gap-x-4 text-primary'>
								<span className='w-[30px] h-[2px] bg-primary'></span>
								Hello
							</div>
						</Fade>

						<Fade
							direction='left'
							delay={600}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<h1 className='max-w-md mb-8 h1'>Let&apos;s work together.</h1>
						</Fade>

						<Fade
							direction='left'
							delay={800}
							cascade
							damping={1e-1}
							triggerOnce={true}>
							<p className='subtitle max-w-[400px]'>
								Thanks so much for considering us to photograph you, it really
								is such an honour. Interested in learning more or just want to
								say hello? Kindly fill out the contact form below and we will
								contact you as soon as possible! We can&apos;t wait to hear from
								you and capture your beautiful story.
							</p>
						</Fade>
					</div>

					<div className='lg:mt-24'>
						<Form />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

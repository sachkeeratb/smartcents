'use client';
import Image from 'next/image';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { useDeviceType } from '@/hooks/useDeviceType';

import mission1 from '@/components/images/article1-2.png';
import mission2 from '@/components/images/article1-1.png';
import mission3 from '@/components/images/article1-3.png';

export default function Mission() {
	const deviceType = useDeviceType();
	return (
		<TracingBeam
			className={`max-w-4xl p-10 ${
				deviceType === 'mobile' ? 'min-h-screen' : 'max-h-screen'
			}`}
		>
			<div className='max-w-full mx-auto antialiased pt-4 relative'>
				<p className='text-xl mb-4'>
					<b>Our Mission</b>
				</p>
				{content.map((item, index) => (
					<div key={`content-${index}`} className='mb-10'>
						<div className='text-md prose prose-sm dark:prose-invert'>
							{item?.image && (
								<Image
									src={item.image}
									alt='blog thumbnail'
									height='720'
									width='1280'
									className='rounded-lg mb-10 object-cover h-1/2'
								/>
							)}
							{item.paragraph}
						</div>
					</div>
				))}
			</div>
		</TracingBeam>
	);
}

const content = [
	{
		paragraph: (
			<p>
				In the Peel District School Board, the SmartCents project seeks to
				inform and stimulate discussion around future financial planning and
				personal financial literacy. The program has the potential to give
				students the right financial tools and highlight how they may use money
				in their everyday lives, something that the existing educational system
				has not been able to accomplish.
			</p>
		),
		image: mission1.src
	},
	{
		paragraph: (
			<p>
				Our target audience of students enrolled in the Peel District School
				Board can be divided into two groups: middle schoolers in grade 8 and
				high school students in years 9 to 12. Each group needs workshops that
				are specific to their level of financial exposure. Through accounting
				classes and contests like DECA, high school students are exposed to more
				Few middle schools offer these chances, and the curriculum&apos;s
				coverage of finance is even more constrained. With that in mind, we will
				further divide middle schools into those who need our help and those
				that already have the financial means to supply such materials. However,
				as high school pupils are getting closer to graduation, they will
				receive greater attention.
			</p>
		),
		image: mission2.src
	},
	{
		paragraph: (
			<p>
				Recognizing that students desire to be actively involved in their
				education, our workshops and activities will help participants navigate
				the intricacies of finance by demythologizing topics with the assistance
				of lecturers and guest speakers. In order to promote independent study,
				we will also hold additional activities, like a financial literacy
				contest in collaboration with the University of Waterloo. We created the
				acronym SENSE which stands for support, engage, navigate, stimulate, and
				empower. Our organization&apos;s guiding ideas to help students develop
				better financial literacy are encapsulated in our acronym. Since we also
				have a limit to our knowledge, we don&apos;t just want to impart it.
				Instead, our goal is to spark interest in financial literacy and
				encourage more study and conversation on the subject both at home and in
				the community.
			</p>
		),
		image: mission3.src
	}
];

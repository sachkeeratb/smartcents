'use client';
import Image from 'next/image';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { isMobile } from '@/hooks/isMobile';

export default function Mission() {
	return (
		<TracingBeam
			className={`max-w-4xl p-10 ${
				isMobile() ? 'min-h-screen' : 'max-h-screen'
			}`}
		>
			<div className='max-w-full mx-auto antialiased pt-4 relative'>
				{content.map((item, index) => (
					<div key={`content-${index}`} className='mb-10'>
						<p className={'text-xl mb-4'}>{item.title}</p>

						<div className='text-md prose prose-sm dark:prose-invert'>
							{item?.image && (
								<Image
									src={item.image}
									alt='blog thumbnail'
									height='1000'
									width='1000'
									className='rounded-lg mb-10 object-cover h-1/2'
								/>
							)}
							{item.description}
						</div>
					</div>
				))}
			</div>
		</TracingBeam>
	);
}

const content = [
	{
		title: 'An Introduction',
		description: (
			<p>
				Financial literacy is crucial for young adults as they transition from
				high school to college and beyond. The financial decisions made during
				this time can significantly impact their future financial health.
				Unfortunately, many high school students enter adulthood with
				insufficient financial knowledge. This section delves deeper into the
				importance of financial literacy, provides statistics highlighting the
				need for improved education, and offers further strategies for high
				school clubs to help their peers develop financial literacy skills.
			</p>
		),
		image:
			'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		title: 'Importance of Financial Literacy for High School Students',
		description: (
			<p>
				High school is often the first time students manage their own money
				through part-time jobs, allowances, or other means. They also start to
				learn how to navigate financial systems like bank accounts and credit.
				However, many students face challenges because they lack proper
				financial education, which can result in poor financial decisions.
				Financial literacy equips students with the tools to manage their money
				effectively, make informed decisions, and set financial goals.
			</p>
		),
		image:
			'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		title: 'Why Financial Literacy is Critical',
		description: (
			<div>
				<p>
					<b>Financial Independence</b>: Students who understand how to manage
					their finances are more likely to achieve financial independence after
					high school. Without these skills, they may face difficulties when
					they leave home for college or enter the workforce.
				</p>
				<br />
				<p>
					<b>Avoiding Debt</b>: Proper financial education helps students avoid
					common debt traps, such as overspending on credit cards or failing to
					understand the implications of student loans.
				</p>
				<br />
				<p>
					<b>Building Wealth</b>: Understanding basic financial concepts like
					saving, investing, and budgeting allows students to build wealth over
					time rather than living paycheck to paycheck.
				</p>
			</div>
		),
		image:
			'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		title: 'Key Areas of Financial Literacy to Focus On with Statistics',
		description: (
			<div>
				<h3>
					<b>1. Saving and Budgeting</b>
				</h3>
				<p>
					<b>Statistics on Saving Habits</b>: A study by Jump$tart Coalition
					found that only 24% of high school seniors demonstrated proficient
					financial literacy in areas such as budgeting and saving. This
					highlights the need for early education on managing money.
				</p>
				<br />
				<p>
					<b>The Importance of Emergency Savings</b>: According to a 2022 report
					from Bankrate, 56% of Americans do not have enough savings to cover a
					$1,000 emergency expense. High school students who learn about the
					importance of building an emergency fund early are less likely to face
					this problem later in life.
				</p>
				<br /> <br />
				<h3>
					<b>2. Paychecks and Understanding Earnings</b>
				</h3>
				<p>
					<b>Understanding Paychecks</b>: According to a survey by National
					Endowment for Financial Education (NEFE), only 17% of students could
					accurately explain how to calculate net income from gross income,
					including understanding payroll deductions such as taxes and Social
					Security. Students must learn not only how to manage their paychecks
					but also how to navigate deductions and taxes that reduce their
					take-home pay.
				</p>
				<br />
				<p>
					<b>Wages and Work Ethic</b>: In 2023, the Bureau of Labor Statistics
					reported that 42.4% of teens aged 16 to 19 were employed. It&apos;s
					important that students understand the difference between their hourly
					wage and the net pay they will actually receive, which is often
					affected by deductions.
				</p>
				<br /> <br />
				<h3>
					<b>3. Bank Accounts and How They Work</b>
				</h3>
				<p>
					<b>Bank Account Ownership</b>: A 2022 American Bankers Association
					(ABA) report revealed that 15% of U.S. households were
					&quot;unbanked&quot; or lacked access to a bank account. Many high
					school students have limited knowledge of how bank accounts work, and
					they may be unaware of the fees associated with different types of
					accounts.
				</p>
				<br />
				<p>
					<b>Importance of Managing Bank Accounts</b>: According to the FDIC’s
					2020 National Survey of Unbanked and Underbanked Households, 13.8
					million U.S. households were unbanked. Financial literacy programs in
					high school can help prevent students from becoming part of this group
					by teaching them how to manage a bank account responsibly and avoid
					fees such as overdraft charges.
				</p>
				<br />
				<br />
				<h3>
					<b>4. Credit and Debt</b>
				</h3>
				<p>
					<b>Understanding Credit</b>: According to a 2020 survey by Credit
					Karma, 59% of Americans had never checked their credit score, and a
					similar percentage of young people (ages 18-24) lack basic knowledge
					about credit cards, interest rates, and how their credit score impacts
					loan approvals.
				</p>
				<br />
				<p>
					<b>Student Loan Debt</b>: A report from The Institute for College
					Access & Success found that 65% of college seniors graduated in 2021
					with student loan debt, averaging $28,400. High school students need
					to understand how borrowing for college can affect their long-term
					financial situation and how to manage that debt responsibly.
				</p>
			</div>
		),
		image:
			'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		title: 'Our Plan',
		description: (
			<div>
				<h3>
					<b>1. Host Financial Literacy Workshops and Seminars</b>
				</h3>
				<p>
					<b>Statistics-Backed Impact</b>: Research from National Financial
					Educators Council shows that students who participate in financial
					literacy workshops score 15% higher on financial knowledge tests than
					those who do not. Hosting guest speakers (e.g., financial advisors,
					accountants, or local bank representatives) and providing hands-on
					activities such as creating budgets or setting savings goals can
					increase students&apos; financial literacy.
				</p>
				<br />
				<p>
					<b>Actionable Strategy</b>: Organize workshops focusing on saving,
					budgeting, and understanding paychecks. These can include real-life
					scenarios, such as creating a budget based on a part-time job paycheck
					or calculating net income after deductions.
				</p>
				<br />
				<br />
				<h3>
					<b>2. Peer-Led Financial Education Programs</b>
				</h3>
				<p>
					<b>Peer Influence and Effectiveness</b>: Studies show that peer-led
					programs are particularly effective in educational settings. According
					to the Journal of Financial Education, students who learn from their
					peers tend to retain more information and apply it in their daily
					lives.
				</p>
				<br />
				<p>
					<b>Actionable Strategy</b>: Identify students who are knowledgeable
					about personal finance to lead workshops. These peer leaders can
					conduct seminars on topics like setting financial goals, understanding
					interest rates, and how credit works.
				</p>
				<br />
				<br />
				<h3>
					<b>3. Partner with Local Financial Institutions</b>
				</h3>
				<p>
					<b>Research on Banking Knowledge</b>: A survey by Junior Achievement
					USA revealed that only 23% of high school students felt confident
					about managing money, and many lacked the skills to make informed
					decisions about banking. Collaborating with local financial
					institutions can help address this gap by offering resources and
					guidance on topics like managing bank accounts, understanding credit,
					and avoiding fees.
				</p>
				<br />
				<p>
					<b>Actionable Strategy</b>: Establish partnerships with local banks or
					credit unions that can provide students with workshops on opening
					accounts, setting up direct deposits, and understanding savings versus
					checking accounts. Some banks also offer student accounts with low or
					no fees, which could be beneficial for club members.
				</p>
				<br />
				<br />
				<h3>
					<b>4. Create a School Financial Literacy Club</b>
				</h3>
				<p>
					<b>Need for Structured Learning</b>: A 2019 report from the Financial
					Industry Regulatory Authority (FINRA) revealed that only 17% of U.S.
					students received formal financial education in high school. Creating
					a club that focuses specifically on financial literacy can ensure that
					students receive consistent and structured lessons on important topics
					like credit, debt management, and investing.
				</p>
				<br />
				<p>
					<b>Actionable Strategy</b>: Start a Financial Literacy Club where
					members can participate in activities like budget simulations,
					financial challenges, or learning about the stock market. The club
					could also host &quot;Financial Fridays,&quot; where students get tips
					on different financial topics each week.
				</p>
				<br />
				<br />
				<h3>
					<b>5. Incorporate Technology and Interactive Learning</b>
				</h3>
				<p>
					<b>Technology for Financial Literacy</b>: According to Next Gen
					Personal Finance (NGPF), 79% of students say they would have preferred
					learning about personal finance through online platforms or apps
					rather than traditional textbook lessons. Incorporating financial
					education apps into club activities can make the learning process more
					engaging and accessible.
				</p>
				<br />
				<p>
					<b>Actionable Strategy</b>: Introduce students to budgeting apps like
					Mint or YNAB (You Need A Budget) or investment simulators such as
					Stock Market Game, where they can experience real-world financial
					decision-making without any risk.
				</p>
				<br />
				<br />
				<h3>
					<b>6. Promote Financial Challenges</b>
				</h3>
				<p>
					<b>Financial Behavior Change Through Challenges</b>: The National
					Endowment for Financial Education found that students who participate
					in financial challenges, such as saving competitions or budgeting
					contests, are more likely to continue practicing good financial
					habits.
				</p>
				<br />
				<p>
					<b>Actionable Strategy</b>: Organize a financial literacy challenge
					where students track their savings over the course of a semester.
					Include specific goals, such as saving for a particular event or
					milestone. Offer rewards for the students who show the greatest
					financial improvement.
				</p>
			</div>
		),
		image:
			'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		title: 'Conclusion',
		description: (
			<p>
				The lack of financial literacy among high school students is a serious
				issue, but it can be addressed effectively through targeted education
				and practical learning experiences. Statistics show that the majority of
				high school students are not adequately prepared to handle financial
				matters, yet the benefits of financial literacy are clear. High school
				clubs have a unique opportunity to fill this gap by hosting workshops,
				leading peer-to-peer education, partnering with financial institutions,
				and leveraging technology. By integrating these approaches into their
				activities, clubs can empower students to make informed financial
				decisions and set the stage for long-term financial success.
			</p>
		),
		image:
			'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	}
];

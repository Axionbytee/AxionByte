import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Monitor, Globe, Database, Shield, Smartphone } from 'lucide-react';

const services = [
	{
		icon: Code,
		title: 'Website Development',
		description:
			'Crafting fast, secure, and responsive websites tailored to your brand and business goals.',
	},
	{
		icon: Monitor,
		title: 'E-Commerce Solutions',
		description:
			'Fully functional online stores built to convert visitors into loyal customers.',
	},
	{
		icon: Globe,
		title: 'UI/UX Design',
		description:
			'Beautiful, Intuitive, and user-centered designs that bring your digital products and ideas to life.',
	},
	{
		icon: Database,
		title: 'Web Systems & Dashboards',
		description:
			'Custom systems designed to streamline your operations and eliminate manual processes.',
	},
	{
		icon: Shield,
		title: 'Hosting & Maintenance',
		description:
			'Reliable hosting and ongoing maintenance to ensure your website runs smoothly and securely.',
	},
	{
		icon: Smartphone,
		title: 'Bot Development',
		description:
			'Automate tasks, boost engagement, and enhance user experiences with intelligent bots.',
	},
];

const ServiceCard = ({ service, index, isInView }) => (
	<motion.div
		initial={{ opacity: 0, y: 30, scale: 0.9 }}
		animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
		transition={{
			duration: 0.7,
			delay: index * 0.1,
			type: 'spring',
			stiffness: 100,
		}}
		whileHover={{
			y: -8,
			scale: 1.02,
			transition: { duration: 0.3 },
		}}
		style={{
			background: 'rgba(255, 255, 255, 0.03)',
			backdropFilter: 'blur(10px)',
			border: '1px solid rgba(255, 255, 255, 0.1)',
			borderRadius: '1.5rem',
			padding: '2.5rem 2rem',
			transition: 'all 0.3s ease',
			boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
			cursor: 'pointer',
			position: 'relative',
			height: '320px', // Fixed height for consistency
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
		}}
		onMouseEnter={(e) => {
			e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
			e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.2)';
		}}
		onMouseLeave={(e) => {
			e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
			e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
		}}
	>
		<div>
			<div
				style={{
					width: '4rem',
					height: '4rem',
					borderRadius: '1.25rem',
					background:
						'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(59, 130, 246, 0.1))',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: '1.5rem',
					border: '1px solid rgba(168, 85, 247, 0.2)',
					transition: 'transform 0.3s ease',
				}}
			>
				<service.icon size={24} color="#a855f7" />
			</div>

			<h3
				style={{
					fontSize: '1.375rem',
					fontWeight: 600,
					marginBottom: '1rem',
					color: 'white',
					lineHeight: 1.3,
					minHeight: '2.75rem', // Consistent title height
				}}
			>
				{service.title}
			</h3>
		</div>

		<p
			style={{
				fontSize: '1rem',
				color: 'rgba(255, 255, 255, 0.7)',
				lineHeight: 1.6,
				flex: 1,
			}}
		>
			{service.description}
		</p>
	</motion.div>
);

export default function ServicesSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px' });

	return (
		<section id="services" style={{ padding: '6rem 0', position: 'relative' }}>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'linear-gradient(to bottom, transparent, rgba(168, 85, 247, 0.05), transparent)',
				}}
			/>

			<div
				className="container"
				style={{
					position: 'relative',
					zIndex: 10,
					maxWidth: '1200px',
					margin: '0 auto',
					padding: '0 1rem',
				}}
			>
				<div ref={ref}>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						style={{ textAlign: 'center', marginBottom: '4rem' }}
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={isInView ? { scale: 1, opacity: 1 } : {}}
							transition={{ duration: 0.6, delay: 0.2 }}
							style={{ marginBottom: '1rem' }}
						>
							<span
								style={{
									display: 'inline-block',
									padding: '0.5rem 1.5rem',
									background: 'rgba(168, 85, 247, 0.1)',
									border: '1px solid rgba(168, 85, 247, 0.3)',
									borderRadius: '2rem',
									fontSize: '0.875rem',
									fontWeight: 500,
									color: '#a855f7',
									marginBottom: '1.5rem',
								}}
							>
								What We Offer
							</span>
						</motion.div>

						<h2
							style={{
								fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
								fontWeight: 700,
								marginBottom: '1.5rem',
								background:
									'linear-gradient(135deg, #ffffff 0%, #a855f7 100%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								lineHeight: 1.2,
							}}
						>
							Our Services
						</h2>

						<p
							style={{
								fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
								maxWidth: '48rem',
								margin: '0 auto',
								lineHeight: 1.7,
								color: 'rgba(255, 255, 255, 0.7)',
								opacity: 0.9,
							}}
						>
							We offer a comprehensive range of technology services to help your
							business succeed in the digital landscape.
						</p>
					</motion.div>

					{/* Consistent 3x2 Grid Layout */}
					<div style={{ maxWidth: '1100px', margin: '0 auto' }}>
						{/* Top row - 3 cards */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(3, 1fr)',
								gap: '2rem',
								marginBottom: '2rem',
							}}
						>
							{services.slice(0, 3).map((service, index) => (
								<ServiceCard
									key={service.title}
									service={service}
									index={index}
									isInView={isInView}
								/>
							))}
						</div>

						{/* Bottom row - 3 cards */}
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(3, 1fr)',
								gap: '2rem',
							}}
						>
							{services.slice(3, 6).map((service, index) => (
								<ServiceCard
									key={service.title}
									service={service}
									index={index + 3}
									isInView={isInView}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Responsive styles for mobile */}
			<style jsx>{`
				@media (max-width: 768px) {
					.container > div > div:nth-child(2) > div:first-child,
					.container > div > div:nth-child(2) > div:last-child {
						grid-template-columns: 1fr !important;
					}
				}

				@media (max-width: 1024px) and (min-width: 769px) {
					.container > div > div:nth-child(2) > div:first-child,
					.container > div > div:nth-child(2) > div:last-child {
						grid-template-columns: repeat(2, 1fr) !important;
					}
				}
			`}</style>
		</section>
	);
}

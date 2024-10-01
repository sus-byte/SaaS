"use client";

import { testimonials } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
	testimonials: typeof testimonials;
	className?: string;
	duration?: number;
}) => (
	<div className={props.className}>
		<motion.div
			animate={{ translateY: "-50%" }}
			transition={{
				repeat: Infinity,
				repeatType: "loop",
				ease: "linear",
				duration: props.duration || 10,
			}}
			className="flex flex-col gap-6 pb-6"
		>
			{[...new Array(2)].fill(0).map((_, index) => (
				<React.Fragment key={index}>
					{props.testimonials.map(({ text, imageSrc, name, username }) => (
						<div className="card bg-white/80">
							<p>{text}</p>

							<div className="flex items-center gap-3 mt-5">
								<Image src={imageSrc} width={40} height={40} alt={username} />

								<div className="flex flex-col">
									<span className="font-medium leading-5 tracking-tight">
										{name}
									</span>
									<span className="leading-5 tracking-tight">{username}</span>
								</div>
							</div>
						</div>
					))}
				</React.Fragment>
			))}
		</motion.div>
	</div>
);

const Testimonials = () => {
	return (
		<section className="py-24">
			<div className="custom-container">
				<div className="section-heading">
					<h2 className="section-title">What our users say</h2>

					<p className="section-subtitle">
						From intuitive design to powerful features, our app has become an
						essential tool for users around the world.
					</p>
				</div>

				<div className="flex justify-center gap-6  mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
					<TestimonialsColumn testimonials={firstColumn} duration={12} />
					<TestimonialsColumn
						testimonials={secondColumn}
						className="hidden md:block"
						duration={19}
					/>
					<TestimonialsColumn
						testimonials={thirdColumn}
						className="hidden lg:block"
						duration={16}
					/>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

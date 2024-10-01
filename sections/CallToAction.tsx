"use client";

import Arrow from "@/assets/arrow-right.svg";
import Star from "@/assets/star.png";
import Spring from "@/assets/spring.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

	return (
		<section
			ref={sectionRef}
			className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip"
		>
			<div className="custom-container">
				<div className="section-heading relative">
					<h2 className="section-title">Sign up for free today</h2>

					<p className="section-subtitle mt-5">
						Celebrate the joy of accomplishment with an app designed to track
						your progress and motivate your efforts.
					</p>

					<motion.img
						src={Star.src}
						width={360}
						height={360}
						alt="star"
						className="absolute -left-[350px] -top-[137px]"
						style={{translateY: translateY}}
					/>
					<motion.img
						src={Spring.src}
						width={360}
						height={360}
						alt="star"
						className="absolute -right-[331px] -top-[19px]"
						style={{translateY: translateY}}
					/>
				</div>

				<div className="flex justify-center gap-2 mt-10">
					<button className="btn btn-primary">Get for free</button>
					<button className="btn btn-text gap-1">
						<span>Learn more</span>
						<Arrow className="w-5 h-5" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;

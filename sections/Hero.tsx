"use client"

import Cog from "@/assets/cog.png";
import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import Cylinder from "@/assets/cylinder.png";
import Noodle from "@/assets/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {

	const heroRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start end", "end start"]
	});
	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

	return (
		<section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_80%)] overflow-x-clip">
			<div className="custom-container">
				<div className="md:flex justify-between items-center">
					<div className="md:w-[478px]">
						<span className="tag">
							Version 2.0 is here
						</span>
						<h1 className="text-5xl md:text-7xl font-bold tracking-tighter my-6 bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text">
							Pathway to productivity
						</h1>
						<p className="text-[#010D3E] text-xl">
							Celebrate the joy of accomplishment with an app designed to track
							your progress, motivate your efforts, and celebrate your
							successes.
						</p>

						<div className="flex gap-1 items-center mt-[30px]">
							<button className="btn btn-primary">Get for free</button>
							<button className="btn btn-text gap-1">
								<span>Learn more</span>
								<ArrowRight className="w-5 h-5" />
							</button>
						</div>
					</div>

					<div className="mt-20 md:mt-0 relative lg:mr-10">
						<motion.img src={Cog.src} alt="cog" width={550} height={550} animate={{translateY: [-20, 20]}} transition={{repeat: Infinity, repeatType: 'mirror', duration: 2, ease: 'easeInOut'}} />
						<motion.img src={Cylinder.src} alt="cylinder" width={200} height={200} className="hidden lg:block absolute -top-8 -left-32" style={{translateY: translateY}} />
						<motion.img src={Noodle.src} alt="noodle" width={200} height={200} className="hidden lg:block absolute top-[450px] left-[420px] rotate-[30deg]" style={{translateY: translateY, rotate: 30}} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

"use client";

import Image from "next/image";
import React, { useRef } from "react";
import productImage from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";

import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowcase = () => {

	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['start end', 'end start']
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

	return (
		<section ref={sectionRef} className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
			<div className="custom-container">
				<div className="section-heading">
					<div className="flex justify-center">
						<span className="tag">Boost your productivity</span>
					</div>

					<h2 className=" mt-6 section-title">
						A more effective way to track progress
					</h2>

					<p className="section-subtitle">
						Celebrate the joy of accomplishment with an app designed to track
						your progress and motivate your efforts.
					</p>
				</div>

				<div className="relative">
					<Image src={productImage} alt="product" className="mt-10" />
					<motion.img src={pyramid.src} alt="pyramid" width={262} height={262} className="hidden md:block absolute -top-32 -right-36" style={{translateY: translateY}}/>
					<motion.img src={tube.src} alt="tube" width={248} height={248} className="hidden md:block absolute bottom-24 -left-36" style={{translateY: translateY}}/>
				</div>
			</div>
		</section>
	);
};

export default ProductShowcase;

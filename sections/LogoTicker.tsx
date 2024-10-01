"use client";

import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
	return (
		<section className="py-8 lg:py-14 bg-white overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
			<motion.div
        className="flex gap-14 flex-none pr-14"
				animate={{ translateX: "-50%" }}
				transition={{ duration: 20, repeat: Infinity, repeatType: "loop", ease: "linear" }}
			>
				<Image src={apexLogo} alt="apex" className="logoticker-img" />
				<Image src={acmeLogo} alt="acme" className="logoticker-img" />
				<Image src={celestialLogo} alt="celestial" className="logoticker-img" />
				<Image src={echoLogo} alt="echo" className="logoticker-img" />
				<Image src={pulseLogo} alt="pulse" className="logoticker-img" />
				<Image src={quantumLogo} alt="quantum" className="logoticker-img" />

				 {/* Repeated logos for smooth infinite scroll */}
				<Image src={apexLogo} alt="apex" className="logoticker-img" />
				<Image src={acmeLogo} alt="acme" className="logoticker-img" />
				<Image src={celestialLogo} alt="celestial" className="logoticker-img" />
				<Image src={echoLogo} alt="echo" className="logoticker-img" />
				<Image src={pulseLogo} alt="pulse" className="logoticker-img" />
				<Image src={quantumLogo} alt="quantum" className="logoticker-img" />
			</motion.div>
		</section>
	);
};

export default LogoTicker;

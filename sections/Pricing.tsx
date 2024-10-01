"use client";

import { pricingTiers } from "@/constants";
import CheckIcon from "@/assets/check.svg";

import { motion } from "framer-motion";

const Pricing = () => {
	return (
		<section className="py-24">
			<div className="custom-container">
				<div className="section-heading">
					<h2 className="section-title">Pricing</h2>

					<p className="section-subtitle">
						Free forever. Upgrade for unlimited tasks, better security, and
						exclusive features.
					</p>
				</div>

				<div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end">
					{pricingTiers.map(
						({
							title,
							monthlyPrice,
							buttonText,
							popular,
							inverse,
							features,
						}) => (
              <div className={`${inverse ? "bg-black text-white" : "bg-white"} card`}>
								<div className="flex justify-between">
                  <h3 className={`text-lg font-bold ${inverse ? "text-white/60" : "text-black/50"}`}>{title}</h3>
									{popular && (
										<div className="inline-flex text-sm border border-white/20 px-4 py-1.5  rounded-xl">
											<motion.span animate={{backgroundPositionX: '-100%'}} transition={{repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 1}} className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium">
												Popular
											</motion.span>
										</div>
									)}
								</div>

								<div className="flex items-baseline gap-1 my-[30px]">
									<span className="text-4xl font-bold tracking-tighter leading-none">
										${monthlyPrice}
									</span>
                  <span className={`text-bold tracking-tight ${inverse ? "text-white/50" : "text-black/50"}`}>
										/month
									</span>
								</div>

								<button className={`btn btn-primary w-full ${inverse && "bg-white text-black"}`}>{buttonText}</button>

								<ul className="flex flex-col gap-5 mt-8">
									{features.map((feature) => (
										<li className="flex items-center text-sm gap-4">
											<CheckIcon className="w-6 h-6" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Pricing;

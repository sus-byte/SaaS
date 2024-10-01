import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

const Footer = () => {
	return (
		<footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
			<div className="custom-container">
				<div className="flex flex-col justify-center items-center">
          <Image src={Logo} width={40} height={40} alt="logo" />
          
          <nav className="flex flex-col md:flex-row gap-6 my-6">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#customers">Customers</a>
            <a href="#pricing">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Careers</a>
          </nav>

          <div className="flex justify-center gap-6">
            <SocialX />
            <SocialInsta />
            <SocialLinkedIn />
            <SocialPin />
            <SocialYoutube />
          </div>

          <p className="mt-6">&copy; 2024 Your Company, Inc. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

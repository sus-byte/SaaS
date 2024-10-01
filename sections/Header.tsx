
import ArrowRight from "@/assets/arrow-right.svg";
import Menu from "@/assets/menu.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";


const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="bg-black py-3 flex justify-center items-center gap-2">
        <p className="text-white/80 md:block hidden">Streamline your workflow and boost your productivity.</p>
        
        <div className="inline-flex items-center gap-1">
          <p className="text-white">Get started for free</p>
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="py-5">
        <div className="custom-container">
        <div className="flex justify-between items-center">
          <Image src={Logo} width={40} height={40} alt="logo" />
          <Menu className="w-5 h-5 md:hidden" />

          <nav className="hidden md:flex gap-6 text-black/80 items-center">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="bg-black text-white py-2 px-4 rounded-md tracking-tight">Get for free</button>
          </nav>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Header
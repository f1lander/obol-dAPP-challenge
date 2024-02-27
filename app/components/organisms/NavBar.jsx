import logo from "@/public/logo.svg";
import Image from "next/image";
import ConnectWallet from "../utils/ConnectWallet";

export const NavBar = () => {
  return (
    <nav className="relative w-full flex justify-center px-24 py-10 border-b-2 border-gray-800">
      <Image placeholder="blur" blurDataURL={"logo"} src={logo} alt="logo" />
      <div className="absolute flex items-center inset-y-0 right-0 mr-5"><ConnectWallet /></div>
      
    </nav>
  );
};

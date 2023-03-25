import NavCate from "../atoms/NavCate";
import Image from "next/image";
import Logo from "../../assets/images/Logo.png";
import NavUser from "../atoms/NavUser";
export default function Navbar() {
	return (
		<nav className="px-4 py-4 flex items-center justify-between bg-white rounded-xl">
			{/* <div> */}
			<NavCate />
			{/* </div> */}
			<div className="relative">
				<Image
					className="w-20"
					src={Logo}
					alt="logo image"
				/>
			</div>
			<NavUser />
		</nav>
	);
}

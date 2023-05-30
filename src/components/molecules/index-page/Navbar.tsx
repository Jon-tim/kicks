import NavCate from "../../atoms/NavCate";
import Image from "next/image";
import Logo from "../../../assets/images/Logo.png";
import NavUser from "../../atoms/NavUser";
import Link from "next/link";
export default function Navbar() {
	return (
		<nav className="px-4 py-4 flex items-center justify-between bg-white rounded-xl">
			<NavCate />
			<Link
				href="/"
				className="relative block"
			>
				<Image
					className="w-20"
					src={Logo}
					alt="logo image"
				/>
			</Link>
			<NavUser />
		</nav>
	);
}

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import logo from "../../../assets/images/Logo-white.png";
import Image from "next/image";
export default function Footers() {
	return (
		<section className="bg-darkGray mt-[360px] rounded-3xl overflow-hidden p-4 pt-8 flex flex-col gap-6 relative lg:p-10 lg:flex-row lg:mt-[290px] lg:justify-between">
			<div className="lg:w-[30%]">
				<h3 className="text-mainYellow font-semibold text-lg">
					About Us
				</h3>
				<p className="text-lightGray">
					We are the biggest hyperstore in the universe. We got you
					all covered with our exclusive collections and latest drops.
				</p>
			</div>
			<div>
				<h3 className="text-mainYellow font-semibold text-lg mb-2">
					Categories
				</h3>
				<ul className="flex flex-col gap-1">
					<li className="text-lightGray">Runners</li>
					<li className="text-lightGray">Sneakers</li>
					<li className="text-lightGray">Basketball</li>
					<li className="text-lightGray">Outdoor</li>
					<li className="text-lightGray">Golf</li>
					<li className="text-lightGray">Hiking</li>
				</ul>
			</div>
			<div>
				<h3 className="text-mainYellow font-semibold text-lg mb-2">
					Company
				</h3>
				<ul className="flex flex-col gap-1">
					<li className="text-lightGray">About</li>
					<li className="text-lightGray">Contact</li>
					<li className="text-lightGray">Blogs</li>
				</ul>
			</div>
			<div className="mb-28 lg:mb-[28rem]">
				<h3 className="text-mainYellow font-semibold text-lg mb-2">
					Follow Us
				</h3>
				<div></div>
			</div>
			<div className="absolute bottom-0 left-0 right-0">
				<Image
					src={logo}
					alt="logo"
					className="w-full"
				/>
			</div>
		</section>
	);
}

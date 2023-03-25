import { HiBars3, HiUser } from "react-icons/hi2";
export default function NavCate() {
	return (
		<>
			<div className="lg:hidden">
				<HiBars3 className="text-2xl" />
			</div>
			<ul className="lg:flex gap-8 hidden">
				<li>New Drops</li>
				<li>Men</li>
				<li>Women</li>
			</ul>
		</>
	);
}

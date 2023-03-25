import { BiSearch, BiUser } from "react-icons/bi";
import { HiUser } from "react-icons/hi2";

export default function NavUser() {
	return (
		<div className="flex items-center gap-3">
			<BiSearch className="hidden lg:block" />
			<HiUser />
			<div className="bg-mainYellow w-5 h-5 rounded-full flex items-center justify-center">
				<p className="font-semibold">0</p>
			</div>
		</div>
	);
}

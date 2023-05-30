import { HiBars3, HiUser } from "react-icons/hi2";
import Link from "next/link";
export default function NavCate() {
	return (
		<>
			<Link
				href="/products"
				className="font-medium"
			>
				Products
			</Link>
		</>
	);
}

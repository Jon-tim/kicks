import products from "@/app/products/page";
import Link from "next/link";
export default function ViewProductBtn({
	price,
	id,
}: {
	price: string;
	id: number;
}) {
	return (
		<Link
			href={`/products/${id}`}
			className="uppercase font-rubikFont text-xs font-bold bg-darkGray w-full px-3 py-2 text-white rounded-lg lg:text-center lg:py-4 lg:text-lg"
		>
			View Product - $<span className="text-mainYellow">{price}</span>
		</Link>
	);
}

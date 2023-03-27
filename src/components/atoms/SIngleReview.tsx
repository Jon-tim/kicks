import { BiStar } from "react-icons/bi";
import Image from "next/image";

import test from "../../assets/images/Rectangle-5.png";
export default function SIngleReview() {
	return (
		<section className="overflow-hidden rounded-3xl flex flex-col">
			<div className="bg-white p-4 flex items-center justify-between">
				<div className="w-1/2">
					<h4 className="capitalize font-medium text-base">
						good quality
					</h4>
					<p className="mb-2 text-sm">
						I highly recommend this product
					</p>
					<div className="flex items-center gap-2">
						<BiStar />
						<BiStar />
						<BiStar />
					</div>
				</div>
				<div className="relative w-20 h-20 rounded-xl overflow-hidden">
					<Image
						className="object-cover"
						src={test}
						alt="test"
						fill
					/>
				</div>
			</div>
			<div className="relative w-full h-60">
				<Image
					src={test}
					alt="test"
					fill
					className="object-cover"
				/>
			</div>
		</section>
	);
}

import Image from "next/image";
import ViewProductBtn from "./ViewProductBtn";
type prop = {
	discount: string;
	price: string;
	title: string;
	img: string;
};

export default function Drops({ discount, price, title, img }: prop) {
	return (
		<div className="">
			<div className="relative w-full h-[170px] border-4 border-white rounded-xl overflow-hidden">
				<Image
					src={img}
					fill
					alt="shoe image"
					className="object-cover"
				/>
				<div
					className={`absolute text-white font-semibold capitalize text-xs py-1 px-2 rounded-br-lg ${
						discount != "new" ? "bg-mainYellow" : "bg-mainBlue"
					}`}
				>
					<p className="">{discount}</p>
				</div>
			</div>
			<h3 className="font-semibold my-2 text-center">{title}</h3>
			<ViewProductBtn price={price} />
		</div>
	);
}

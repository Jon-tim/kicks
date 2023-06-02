import Image from "next/image";
import ViewProductBtn from "./ViewProductBtn";
type prop = {
	id: number;
	discount: string;
	price: string;
	title: string;
	img: string;
};

export default function Drops({ id, discount, price, title, img }: prop) {
	return (
		<div className="flex flex-col items-center`">
			<div className="relative w-full h-[170px] border-4 border-white rounded-xl overflow-hidden lg:h-[320px]">
				<Image
					src={img}
					fill
					alt="shoe image"
					className="object-cover"
				/>
				<div
					className={`absolute text-white font-semibold capitalize text-xs py-1 px-2 rounded-br-lg ${
						discount != "new" ? "bg-mainYellow" : "bg-mainBlue"
					} lg:px-4 lg:py-2`}
				>
					<p className="text-white">{discount}</p>
				</div>
			</div>
			<h3 className="font-semibold my-2 text-center lg:text-3xl">
				{title}
			</h3>
			<ViewProductBtn
				price={price}
				id={id}
			/>
		</div>
	);
}

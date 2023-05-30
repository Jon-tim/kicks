type cate = {
	imgSrc: string;
	title: string;
	color: string;
};
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
export default function ShoeCat({ title, imgSrc, color }: cate) {
	return (
		<>
			<div
				className={`w-[100%] h-[330px] relative flex items-end p-4 bg-${color} lg:h-[440px]`}
			>
				<Image
					src={imgSrc}
					fill
					alt={title}
					className="object-cover lg:object-contain"
				/>
				<div className="relative flex items-end justify-between w-full">
					<h2 className="w-1/2 capitalize font-semibold text-2xl lg:uppercase lg:w-1/3">
						{title}
					</h2>
					<span className="bg-darkGray w-8 h-8 rounded-md flex items-center justify-center">
						<FiArrowUpRight className="text-white" />
					</span>
				</div>
			</div>
		</>
	);
}

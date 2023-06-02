"use client";
import { useRouter } from "next/router";
import { getProductId } from "@/lib/getProduct";
import Image from "next/image";
import { ProductType } from "@/types/product";
import { sizeChart } from "@/data/newdrops";
import { BiHeart } from "react-icons/bi";
import Link from "next/link";
import Recommendation from "@/components/molecules/Recommendation";

type Params = {
	params: {
		slug: number;
	};
};

export default function Product({ params }: Params) {
	const product: ProductType | undefined = getProductId(Number(params.slug));

	return (
		<main className="px-4 py-6 flex flex-col gap-8">
			<section className="flex flex-col gap-4">
				<div className="relative overflow-hidden w-full h-[300px] rounded-xl">
					<Image
						src={product?.src}
						alt="shoe image"
						fill
						className="object-cover"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<div
						className={`text-white ${
							product?.discount === "new"
								? "bg-mainBlue"
								: "bg-mainYellow"
						} px-3 py-1 capitalize font-rubikFont font-medium rounded-lg max-w-max`}
					>
						{product?.discount}
					</div>
					<h1 className="font-semibold text-2xl">{product?.title}</h1>
					<h1 className="font-semibold text-mainBlue text-xl">
						${product?.price}.00
					</h1>
					<div>
						<h3 className="uppercase font-medium mb-2 text-sm">
							about the product
						</h3>
						<p className="text-sm text-midGray text-justify">
							{product?.description}
						</p>
					</div>
					<div className="my-4">
						<p className="capitalize font-semibold text-xs mb-2">
							size chart
						</p>
						<div className="flex items-center justify-between gap-4 flex-wrap">
							{sizeChart.map((size) => (
								<div
									key={size.id}
									className={`w-12 h-12 flex items-center justify-center font-semibold rounded-lg cursor-pointer ${
										size.status
											? "bg-white"
											: "opacity-50 bg-midGray/20"
									}`}
								>
									{size.size}
								</div>
							))}
						</div>
					</div>
					<div className="w-full mb-2">
						<div className="flex items-center w-full gap-2">
							<button className="bg-darkGray uppercase text-white text-center font-rubikFont rounded-lg text-xs font-medium w-[85%] py-4 cursor-pointer">
								add to cart
							</button>
							<div className="flex items-center justify-center w-[15%] bg-darkGray py-4 rounded-lg cursor-pointer">
								<BiHeart className="text-white text-sm" />
							</div>
						</div>
						<Link href="/checkout" className="block w-full py-4 bg-mainBlue text-white uppercase text-center font-rubikFont rounded-lg text-xs font-medium mt-2 cursor-pointer">
							buy it now
						</Link>
					</div>
				</div>
			</section>
			<Recommendation />
		</main>
	);
}

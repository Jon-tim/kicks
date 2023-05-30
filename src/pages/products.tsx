import Drops from "@/components/atoms/Drops";
import Navbar from "@/components/molecules/index-page/Navbar";
import Image from "next/image";
import { BiFilter } from "react-icons/bi";
import { lifestyle } from "@/data/newdrops";
function products() {
	const item = lifestyle.length > 1 ? "items" : "item";
	return (
		<section className="px-4 py-6 lg:px-10 lg:py-8 bg-lightGray">
			{/* <Navbar /> */}
			<section className="w-full h-48 relative bg-pro-hero bg-no-repeat bg-cover bg-center flex rounded-xl overflow-hidden my-6">
				<div className="relative z-10 p-4 self-end">
					<p className="text-FA-White text-sm">Limited time only</p>
					<h1 className="text-white text-xl font-bold uppercase my-1">
						get 30% off
					</h1>
					<p className="text-FA-White text-sm">
						Sneakers made with your comfort in mind so you can put
						all of your focus into your next session.
					</p>
				</div>
				<Image
					src="/../public/images/product-hero.png"
					fill={true}
					alt="product-hero"
					className="object-fill"
				/>
			</section>
			<section>
				<div className="my-8 flex items-center justify-between gap-4">
					<div className="w-1/2">
						<h2 className="text-lg font-semibold capitalize">
							life style shoes
						</h2>
						<p className=" text-sm">
							{lifestyle.length} {item}
						</p>
					</div>
					<div className="w-1/2 flex justify-between items-end gap-3 rounded-lg bg-white px-4 py-2 cursor-pointer">
						<p className="text-sm capitalize font-semibold">
							filter
						</p>
						<BiFilter className="text-lg" />
					</div>
				</div>
				<section>
					<section className="grid grid-cols-autofits gap-4">
						{lifestyle.map((element) => (
							<Drops
								key={element.id}
								title={element.title}
								img={element.src}
								price={element.price}
								discount={element.discount}
							/>
						))}
					</section>
				</section>
			</section>
		</section>
	);
}

export default products;

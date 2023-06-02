import Buttons from "../../atoms/Buttons";
import Drops from "../../atoms/Drops";
import Link from "next/link";
import data from "../../../data/data.json";

export default function NewDrops() {
	return (
		<>
			<section className="mt-6 lg:mt-10">
				<div className="flex items-center justify-between mb-6 lg:items-end lg:mb-10">
					<h1 className="w-1/2 font-semibold text-2xl lg:uppercase lg:text-5xl lg:w-1/3">
						Don&apos;t miss out
						<span className="text-mainBlue"> new drops</span>
					</h1>
					<Buttons>new drops</Buttons>
				</div>
				<section className="grid grid-cols-autofits gap-4">
					{data
						.map((element) => (
							<Drops
								key={element.id}
								id={element.id}
								title={element.title}
								img={element.src}
								price={element.price}
								discount={element.discount}
							/>
						))
						.slice(0, 6)}
				</section>
				<Link
					href={`/products`}
					className="uppercase font-rubikFont text-center text-xs font-bold bg-darkGray mt-8 block px-3 py-4 text-mainYellow rounded-lg lg:text-center lg:py-4 lg:text-lg"
				>
					see more products
				</Link>
			</section>
		</>
	);
}

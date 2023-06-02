import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//COMPONENTS
import ShoeCat from "@/components/atoms/ShoeCat";
import { catShoe } from "@/data/newdrops";

export default function Category() {
	

	return (
		<>
			<section className="bg-darkGray px-4 pt-6 pb-4 lg:px-10 lg:pt-10 lg:pb-0">
				<div className="flex mb-6 items-center justify-between lg:items-end lg:pb-4">
					<h2 className="text-white text-xl font-semibold lg:uppercase lg:text-4xl">
						Categories
					</h2>
					<div className="flex items-center gap-2">
						<span className="bg-white w-7 h-7 rounded-md flex items-center justify-center">
							<BiChevronLeft className="text-2xl text-darkGray" />
						</span>
						<span className="bg-white w-7 h-7 rounded-md flex items-center justify-center">
							<BiChevronRight className="text-2xl text-darkGray" />
						</span>
					</div>
				</div>
				<section className="overflow-hidden rounded-tl-3xl flex flex-col lg:flex-row lg:rounded-tl-[3rem]">
					{catShoe.map((element) => (
						<ShoeCat
							key={element.id}
							imgSrc={element.src}
							title={element.title}
							color={element.color}
						/>
					))}
				</section>
			</section>
		</>
	);
}

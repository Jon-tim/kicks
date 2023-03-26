import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//COMPONENTS
import ShoeCat from "@/components/atoms/ShoeCat";

export default function Category() {
	const catShoe = [
		{
			id: 1,
			title: "lifestyle shoes",
			// src: "/../public/images/image-31.png",
			src: "/../public/images/images-34.jpeg",
			// src: "/../public/images/image-33.jpg",
		},
		{
			id: 2,
			title: "basketball shoes",
			src: "/../public/images/image-32.png",
			// src: "/../public/images/images-34.jpeg",
		},
	];

	return (
		<>
			<section className="bg-darkGray px-4 pt-6 pb-4">
				<div className="flex mb-6 items-center justify-between">
					<h2 className="text-white text-xl font-semibold">
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
				<section className="overflow-hidden rounded-tl-3xl flex flex-col">
					{catShoe.map((element) => (
						<ShoeCat
							key={element.id}
							imgSrc={element.src}
							title={element.title}
						/>
					))}
				</section>
			</section>
		</>
	);
}

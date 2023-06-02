import { BiChevronLeft, BiChevronRight, BiHeart } from "react-icons/bi";
import data from "../../data/data.json";
import Drops from "../atoms/Drops";

export default function Recommendation() {
	return (
		<>
			<section>
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-xl font-medium">You may also like</h2>
					<div className="flex items-center gap-2">
						<span className="bg-midGray/20 w-7 h-7 rounded-md flex items-center justify-center">
							<BiChevronLeft className="text-2xl text-darkGray" />
						</span>
						<span className="bg-white w-7 h-7 rounded-md flex items-center justify-center">
							<BiChevronRight className="text-2xl text-darkGray" />
						</span>
					</div>
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
						.slice(6, 12)}
				</section>
			</section>
		</>
	);
}

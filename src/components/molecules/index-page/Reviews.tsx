import Buttons from "@/components/atoms/Buttons";
import SIngleReview from "@/components/atoms/SIngleReview";
export default function Reviews() {
	return (
		<section className="">
			<div className="flex items-center justify-between mb-6 lg:items-end lg:mt-10">
				<h2 className="text-2xl capitalize font-semibold lg:uppercase lg:text-4xl">
					reviews
				</h2>
				<Buttons>see all</Buttons>
			</div>
			<section>
				<SIngleReview />
			</section>
		</section>
	);
}

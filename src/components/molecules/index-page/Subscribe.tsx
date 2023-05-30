import Image from "next/image";
import logoPlus from "../../../assets/images/Group 1.png";

export default function Subscribe() {
	return (
		<section className="h-[450px] absolute left-4 right-4 bg-mainBlue rounded-t-3xl p-4 flex flex-col gap-6 lg:right-10 lg:left-10 lg:flex-row lg:p-10">
			<div>
				<h1 className="mb-2 text-white text-3xl font-semibold">
					Join our KicksPlus Club & get 15% off
				</h1>
				<p className="text-lightGray mb-4">
					Sign up for free! Join the community.
				</p>
				<form className="w-full flex items-center flex-wrap gap-4">
					<input
						className="w-full px-3 py-2 rounded-lg border-2 border-lightGray bg-transparent text-lightGray outline-none"
						type="text"
						placeholder="email address"
					/>
					<button
						type="submit"
						className="w-full px-3 py-2 border-2 border-darkGray bg-darkGray rounded-lg uppercase font-rubikFont text-white font-medium"
					>
						submit
					</button>
				</form>
			</div>
			<div>
				<Image
					src={logoPlus}
					alt="logo"
				/>
			</div>
		</section>
	);
}

import POTY from "../atoms/POTY";
import Buttons from "../atoms/Buttons";
export default function Hero() {
	return (
		<>
			<section className="flex flex-col items-center gap-6 mt-6">
				<h1 className="uppercase font-black text-5xl text-darkGray">
					do it <span className="text-mainBlue">right</span>
				</h1>

				<section className="bg-[url('../assets/images/hero.png')] bg-no-repeat bg-cover w-full h-[400px] rounded-3xl overflow-hidden relative p-4">
					<POTY />
					<div className="w-2/3">
						<h3 className="uppercase text-white text-xl font-semibold">
							nike air max
						</h3>
						<p className="text-lightGray text-sm mb-2">
							Nike introducing the new air max for everyone&apos;s
							comfort
						</p>
						<Buttons>shop now</Buttons>
					</div>
				</section>
			</section>
		</>
	);
}

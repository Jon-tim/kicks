import POTY from "../atoms/POTY";
import Buttons from "../atoms/Buttons";
import Image from "next/image";
import rect1 from "../../assets/images/Rectangle-1.png";
import rect2 from "../../assets/images/Rectangle-2.png";

export default function Hero() {
	return (
		<>
			<section className="flex flex-col items-center gap-6 mt-6">
				<h1 className="uppercase font-black text-5xl text-darkGray">
					do it <span className="text-mainBlue">right</span>
				</h1>

				<section className="bg-[url('../assets/images/hero.png')] bg-no-repeat bg-cover w-full h-[400px] rounded-3xl overflow-hidden relative p-5 ">
					<POTY />
					<div className="h-full flex justify-between items-end">
						<div className="w-2/3">
							<h3 className="uppercase text-white text-xl font-semibold">
								nike air max
							</h3>
							<p className="text-lightGray text-sm mb-2">
								Nike introducing the new air max for
								everyone&apos;s comfort
							</p>
							<Buttons>shop now</Buttons>
						</div>
						<div className="flex flex-col gap-2">
							<Image
								className="w-16 rounded-xl border-2 border-white"
								src={rect2}
								alt="prototype"
							/>
							<Image
								className="w-16 rounded-xl border-2 border-white"
								src={rect1}
								alt="prototype"
							/>
						</div>
					</div>
				</section>
			</section>
		</>
	);
}

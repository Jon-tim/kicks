import POTY from "../../atoms/POTY";
import Image from "next/image";
import rect1 from "../../../assets/images/Rectangle-1.png";
import rect2 from "../../../assets/images/Rectangle-2.png";
import Link from "next/link";
export default function Hero() {
	return (
		<>
			<section className="flex flex-col items-center gap-6">
				<h1 className="uppercase font-bold text-[3.5rem] text-darkGray lg:text-[15.5vw] lg:leading-[14rem]">
					do it <span className="text-mainBlue">right</span>
				</h1>

				<section className="bg-[url('../assets/images/hero.png')] bg-no-repeat bg-cover w-full h-[400px] bg-center rounded-3xl overflow-hidden relative p-5 lg:h-[700px] lg:p-10">
					<POTY />
					<div className="h-full flex justify-between items-end">
						<div className="w-2/3">
							<h3 className="uppercase text-white text-2xl font-semibold lg:text-6xl">
								nike air max
							</h3>
							<p className="text-lightGray text-sm mb-2 lg:text-lg lg:w-[40%]">
								Nike introducing the new air max for
								everyone&apos;s comfort
							</p>
							<Link
								href="/products"
								className=" text-white bg-mainBlue px-3 py-1 uppercase font-rubikFont font-medium rounded-lg"
							>
								shop now
							</Link>
						</div>
						<div className="flex flex-col gap-2">
							<Image
								className="w-16 rounded-xl border-2 border-white lg:w-36"
								src={rect2}
								alt="prototype"
							/>
							<Image
								className="w-16 rounded-xl border-2 border-white lg:w-36"
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

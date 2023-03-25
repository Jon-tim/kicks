import POTY from "../atoms/POTY";
export default function Hero() {
	return (
		<>
			<section className="flex flex-col items-center gap-6 mt-6">
				<h1 className="uppercase font-black text-5xl text-darkGray">
					do it <span className="text-mainBlue">right</span>
				</h1>

				<section className="bg-[url('../assets/images/hero.png')] bg-no-repeat bg-cover w-full h-[400px] rounded-3xl overflow-hidden relative">
					<POTY />
				</section>
			</section>
		</>
	);
}

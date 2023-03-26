import Image from "next/image";
import Buttons from "../atoms/Buttons";
import Drops from "../atoms/Drops";
import sho from "../../assets/images/Rectangle-5.png";
export default function NewDrops() {
	const newDrops = [
		{
			id: 1,
			discount: "new",
			title: "ADIDAS X-PRO",
			// details: "Parley running and fashion shoe",
			price: "125",
			// src: "../../assets/images/Rectangle-5.png",
			src: "/../public/images/Rectangle-5.png",
		},
		{
			id: 2,
			discount: "10%",
			title: "ADIDAS XMB",
			// details: "Sports and fashion shoe",
			price: "135",
			src: "/../public/images/Rectangle-5(1).png",
		},
		{
			id: 3,
			discount: "new",
			title: "ADIDAS FROST",
			// details: "Edge-designed sprinting shoe",
			price: "105",
			src: "/../public/images/Rectangle-5(2).png",
		},
		{
			id: 4,
			discount: "15%",
			title: "ADIDAS XENOS",
			// details: "Perforated. Jumping and sprinting shoe",
			price: "225",
			src: "/../public/images/Rectangle-5(3).png",
		},
	];

	return (
		<>
			<section className="mt-6">
				<div className="flex items-center justify-between mb-6">
					<h1 className="w-1/2 font-semibold text-xl">
						Don&apos;t miss out{" "}
						<span className="text-mainBlue">new drops</span>
					</h1>
					<Buttons>new drops</Buttons>
				</div>
				<section className="grid grid-cols-autofits gap-4">
					{newDrops.map((element) => (
						<Drops
							key={element.id}
							title={element.title}
							img={element.src}
							price={element.price}
							discount={element.discount}
						/>
					))}
				</section>
			</section>
		</>
	);
}

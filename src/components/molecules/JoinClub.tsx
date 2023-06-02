import { BiRightArrowAlt } from "react-icons/bi";

export default function JoinClub() {
	return (
		<section className="bg-white py-5 px-4 rounded-2xl">
			<h1 className="capitalize font-semibold text-2xl mb-3">
				join kicks club and get rewarded today
			</h1>
			<div className="text-sm flex flex-col gap-4 text-justify">
				<p>
					As Kicks club member, you get rewarded with what you love
					doing. Sign up today and receive immediate access to these
					level 1 benefits:
				</p>
				<ul className="px-4 flex flex-col gap-2">
					<li className="list-disc">Free shipping</li>
					<li className="list-disc">
						A 15% off voucher for your next purchase
					</li>
					<li className="list-disc">
						Access to members only products nd sales
					</li>
					<li className="list-disc">
						Access Adidas Running and Training apps
					</li>
					<li className="list-disc">Special offers and promotions</li>
				</ul>
				<p>
					Join now to start earning points, reach new levels and
					unlock more rewards and benefits from KicksClub
				</p>
			</div>
			<div className="flex items-center justify-between text-white bg-darkGray rounded-lg p-4 mt-4">
				<h1 className="text-white uppercase font-semibold text-xs">
					join the club
				</h1>
				<BiRightArrowAlt />
			</div>
		</section>
	);
}

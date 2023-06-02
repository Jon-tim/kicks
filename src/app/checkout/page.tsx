import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
export default function Checkout() {
	return (
		<section className="px-4">
			<section>
				<div className="bg-white p-4 rounded-2xl mb-4">
					<h1 className="text-1xl capitalize mb-2 font-semibold">
						order details
					</h1>
					<div className="flex items-center gap-4">
						<div className="w-1/2">
							<div className="relative w-full h-[155px] overflow-hidden rounded-xl">
								<Image
									src="/../public/images/Rectangle-5.png"
									alt="shoe"
									fill
									className="w-full h-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="w-1/2">
							<h2 className="text-lg capitalize font-medium">
								shoe name
							</h2>
							<p className="text-mainBlue font-semibold">
								$130.00
							</p>
							<div className="flex items-center justify-between">
								<p className="text-sm font-semibold">size</p>
								<div className="w-8 h-8 flex items-center justify-center font-semibold rounded-lg cursor-pointer bg-midGray/30">
									38
								</div>
							</div>
							<div>
								<p className="capitalize mb-2 text-xs font-semibold">
									quantity
								</p>
								<div className="flex items-center justify-between bg-darkGray/90 gap-2 rounded-lg p-2">
									<div className="w-8 h-8 flex items-center justify-center font-semibold rounded-lg cursor-pointer text-xl bg-mainYellow">
										+
									</div>
									<div className="flex items-center justify-center flex-1 h-8 rounded-lg bg-darkGray">
										<p className="text-white">0</p>
									</div>
									<div className="w-8 h-8 flex items-center justify-center text-xl font-semibold rounded-lg cursor-pointer bg-mainYellow">
										-
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white p-4 rounded-2xl">
					<h1 className="text-1xl capitalize mb-2 font-semibold">
						order summary
					</h1>
					<div className="flex items-center justify-between">
						<p className=" capitalize text-sm">1 item</p>
						<p className="text-sm">$130.00</p>
					</div>
					<div className="flex items-center justify-between">
						<p className=" capitalize text-sm">discount</p>
						<p className=" text-sm">$6.00</p>
					</div>
					<div className="flex items-center justify-between">
						<p className=" capitalize text-sm">delivery</p>
						<p className=" text-sm">$6.00</p>
					</div>
					<div className="border-t-2 pt-2 mt-2 flex items-center justify-between">
						<p className=" capitalize font-semibold">total</p>
						<p className=" font-semibold">$122.00</p>
					</div>
				</div>
			</section>
			<section>
				<div>
					<h1 className="capitalize font-semibold text-xl my-2">
						contact details
					</h1>
					<p className="text-sm mb-2">
						We will use these details to keep you inform about your
						inventory
					</p>

					<input
						type="email"
						name=""
						id=""
						placeholder="email address"
						className="border-2 rounded-lg p-2 border-darkGray/50 w-full mb-2 bg-transparent placeholder:capitalize placeholder:text-sm outline-none"
					/>

					<h1 className="capitalize font-semibold text-lg my-2">
						shipping address
					</h1>
					<input
						type="text"
						placeholder="First Name*"
						className="border-2 rounded-lg p-2 border-darkGray/50 w-full mb-2 bg-transparent placeholder:capitalize placeholder:text-sm outline-none"
					/>
					<input
						type="text"
						placeholder="Last Name*"
						className="border-2 rounded-lg p-2 border-darkGray/50 w-full mb-2 bg-transparent placeholder:capitalize placeholder:text-sm outline-none"
					/>
					<input
						type="text"
						placeholder="Delivery Address*"
						className="border-2 rounded-lg p-2 border-darkGray/50 w-full mb-2 bg-transparent placeholder:capitalize placeholder:text-sm outline-none"
					/>
					<input
						type="text"
						name=""
						id=""
						placeholder="Phone Number"
						className="border-2 rounded-lg p-2 border-darkGray/50 w-full mb-2 bg-transparent placeholder:capitalize placeholder:text-sm outline-none"
					/>
				</div>
				<section className="my-4">
					<h1 className="capitalize font-semibold text-lg my-2">
						shipping format
					</h1>
					<div className="p-4 border-2 rounded-xl bg-white mb-2">
						<div className="flex items-center justify-between mb-1">
							<h1 className="capitalize  font-medium">
								standard delivery
							</h1>
							<p className="text-mainBlue font-semibold">$6.00</p>
						</div>
						<p className="text-xs">
							Enter your address to see when you will get your
							order
						</p>
					</div>
					<div className="p-4 border-2 rounded-xl border-darkGray/50">
						<div className="flex items-center justify-between mb-1">
							<h1 className="font-medium">Collect in store</h1>
							<p className="text-mainBlue font-semibold">free</p>
						</div>
						<p className="text-xs">pay now, collect in store</p>
					</div>
				</section>
				<div>
					<div className="flex items-center gap-4">
						<input
							type="checkbox"
							name=""
							id=""
							className=""
						/>
						<p>My billing and delivery information are the same</p>
					</div>
					<div className="flex items-center gap-4">
						<input
							type="checkbox"
							name=""
							id=""
							className=""
						/>
						<p>I am 13+ years old</p>
					</div>
					<p className="font-semibold text-sm my-2">
						Also want product updats with our newsletter?
					</p>
					<div className="flex items-center gap-4">
						<input
							type="checkbox"
							name=""
							id=""
							className=""
						/>
						<p>
							Yes, I would like to receive emails about exclusive
							sales and more
						</p>
					</div>
				</div>
				<div className="flex items-center justify-between text-white bg-darkGray rounded-lg p-4 mt-4">
					<p className="text-white uppercase font-semibold text-xs">
						review and pay
					</p>
					<BiRightArrowAlt />
				</div>
			</section>
		</section>
	);
}

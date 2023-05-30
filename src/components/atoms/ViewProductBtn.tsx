export default function ViewProductBtn({ price }: { price: string }) {
	return (
		<div className="uppercase font-rubikFont text-xs font-bold bg-darkGray w-full px-3 py-2 text-white rounded-lg lg:text-center lg:py-4 lg:text-lg">
			View Product - $<span className="text-mainYellow">{price}</span>
		</div>
	);
}

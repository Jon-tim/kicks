type props = {
	children: string;
};
export default function Buttons({ children }: props) {
	
	return (
		<div
			className="text-white bg-mainBlue px-3 py-1 uppercase font-rubikFont font-medium rounded-lg"
		>
			{children}
		</div>
	);
}

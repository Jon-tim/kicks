interface Item {
	id: number;
	size: number;
	status: boolean;
}
interface Category {
	id: number;
	color: string;
	title: string;
	src: string;
}

export const sizeChart: Item[] = [
	{ id: 1, size: 36, status: true },
	{ id: 2, size: 37, status: true },
	{ id: 3, size: 38, status: true },
	{ id: 4, size: 39, status: false },
	{ id: 5, size: 40, status: true },
	{ id: 6, size: 41, status: false },
	{ id: 7, size: 42, status: true },
	{ id: 8, size: 43, status: true },
	{ id: 9, size: 44, status: true },
	{ id: 10, size: 45, status: true },
];

export const catShoe: Category[] = [
	{
		id: 1,
		color: "lightGray",
		title: "lifestyle shoes",
		src: "/../public/images/images-34.jpeg",
	},
	{
		id: 2,
		color: "white",
		title: "basketball shoes",
		src: "/../public/images/image-32.png",
	},
];

import { cache } from "react";
import data from "../data/data.json";
import { ProductType } from "../types/product";


export function getProductId(id: number): ProductType | undefined {
	const res = data.find((item) => item.id === id);
	return res;
}


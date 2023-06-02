import "@/styles/globals.css";
import Navbar from "@/components/molecules/index-page/Navbar";
import Footers from "@/components/molecules/index-page/Footers";
import Subscribe from "@/components/molecules/index-page/Subscribe";

import { Rubik, Open_Sans } from "next/font/google";
const open_sans = Open_Sans({
	weight: ["400", "600"],
	variable: "--font-sans",
	subsets: ["latin"],
});

const rubik = Rubik({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--font-rubik",
});

export const metadata = {
	title: "Kicks",
	description: "Ecommerce website for shoes",
	keywords: ["kicks", "shoes", "ecommerce"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title>Kicks</title>
			</head>
			<body className={`${rubik.variable} ${open_sans.variable}`}>
				<main className="bg-lightGray">
					<section className="p-4  lg:px-10 lg:py-8 bg-lightGray">
						<Navbar />
					</section>
					<section>{children}</section>
					<footer className="p-4 relative lg:px-10">
						<Subscribe />
						<Footers />
					</footer>
				</main>
			</body>
		</html>
	);
}

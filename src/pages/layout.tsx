import Navbar from "@/components/molecules/index-page/Navbar";
import Footers from "@/components/molecules/index-page/Footers";
import Subscribe from "@/components/molecules/index-page/Subscribe";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-lightGray">
				<section className="p-4  lg:px-10 lg:py-8 bg-lightGray">
					<Navbar />
				</section>
				<section>{children}</section>
				<footer className="p-4 relative lg:px-10">
					<Subscribe />
					<Footers />
				</footer>
			</body>
		</html>
	);
}

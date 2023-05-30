import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik, Open_Sans } from "next/font/google";
import RootLayout from "./layout";
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

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RootLayout>
			<main className={`${rubik.variable} ${open_sans.variable}`}>
				<Component {...pageProps} />
			</main>
		</RootLayout>
	);
}

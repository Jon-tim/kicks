import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Rubik, Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
	weight: ["400", "600"],
	variable: "--font-sans",
	subsets: ["latin"],
});

const rubik = Rubik({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-rubik",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${rubik.variable} ${open_sans.variable}`}>
			<Component {...pageProps} />
		</main>
	);
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainBlue: "#4A69E2",
				mainYellow: "#FFA52F",
				"FA-White": "#FAFAFA",
				lightGray: "#E7E7E3",
				midGray: "#70706E",
				darkGray: "#232321",
			},
			fontFamily: {
				rubikFont: ["var(--font-rubik)"],
				sansFont: ["var(--font-sans)"],
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			Des: ["Destedad"],
			Les: ["Lestedad"],
			Bes: ["Bestedad"],
			Mes: ["Mestedad"],
			Tes: ["Testedad"],
			VFes: ["VFestedad"],
		},
		extend: {},
	},
	plugins: [require("daisyui")],
};

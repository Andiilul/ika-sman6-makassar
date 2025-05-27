// app/layout.tsx (RootLayout, server component)

import { Inter, Poppins, Alike } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});
const alike = Alike({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-alike",
});

import "./globals.css"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="id"
			className={`${inter.variable} ${poppins.variable} ${alike.variable}`}
		>
			<head>
				<title>IKA SMA 6 Makassar</title>
				<meta name="description" content="Direktori Alumni Sekolah" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="favicon.ico" />
			</head>
			<body>{children}</body>
		</html>
	);
}

import "./globals.css";
import { Alike, Inter, Poppins } from "next/font/google";

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

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	return (
		<html
			lang={params.locale}
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

import "./globals.css";
import Providers from "./provider";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-poppins",
});

export const metadata = {
	title: "IKA SMA 6 Makassar",
	description: "Direktori Alumni Sekolah",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${inter.variable} ${poppins.variable}`}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

import "./globals.css";
import Providers from "./provider";

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
		<html lang="en">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}

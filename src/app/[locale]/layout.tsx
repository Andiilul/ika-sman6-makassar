import { NextIntlClientProvider } from "next-intl";
import ClientTransitionWrapper from "../ClientTransitionWrapper";
import Providers from "../provider";
import MainLayout from "./mainLayout";

export default function LocaleLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<NextIntlClientProvider>
			<Providers>
				<ClientTransitionWrapper>
					<MainLayout>{children}</MainLayout>
				</ClientTransitionWrapper>
			</Providers>
		</NextIntlClientProvider>
	);
}

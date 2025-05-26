"use client";

import { NextIntlClientProvider } from "next-intl";
import ClientTransitionWrapper from "../ClientTransitionWrapper";
import Providers from "../provider";
import MainLayout from "./mainLayout";

interface LocaleLayoutProps {
	children: React.ReactNode;
	params: { locale: string };
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
	return (
		<html lang={params.locale}>
			<body>
				<NextIntlClientProvider locale={params.locale}>
					<Providers>
						<ClientTransitionWrapper>
							<MainLayout>{children}</MainLayout>
						</ClientTransitionWrapper>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

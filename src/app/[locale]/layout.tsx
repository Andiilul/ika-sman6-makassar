// app/[locale]/layout.tsx

import LocaleHelper from "./localeHelper";
import { ReactNode } from "react";

interface LocaleLayoutProps {
	children: ReactNode;
	params: Promise<{ locale: string }>; // now async
}

export default async function LocaleLayout({
	children,
	params,
}: LocaleLayoutProps) {
	const { locale } = await params; // Await params

	// Import locale-specific messages
	const messages = (await import(`@/messages/${locale}.json`)).default;

	return (
		<LocaleHelper locale={locale} messages={messages}>
			{children}
		</LocaleHelper>
	);
}

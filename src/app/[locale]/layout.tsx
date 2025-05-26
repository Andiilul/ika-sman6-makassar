// app/[locale]/layout.tsx

import LocaleHelper from "./localeHelper";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;
  // Import pesan sesuai locale, contoh import dinamis
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return <LocaleHelper locale={locale} messages={messages}>{children}</LocaleHelper>;
}

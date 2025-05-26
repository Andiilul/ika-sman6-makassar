"use client";

import { NextIntlClientProvider } from "next-intl";
import Providers from "../provider";
import ClientTransitionWrapper from "../ClientTransitionWrapper";
import MainLayout from "./mainLayout";

interface LocaleHelperProps {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, string>;
}

export default function LocaleHelper({ children, locale, messages }: LocaleHelperProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Providers>
        <ClientTransitionWrapper>
          <MainLayout>{children}</MainLayout>
        </ClientTransitionWrapper>
      </Providers>
    </NextIntlClientProvider>
  );
}

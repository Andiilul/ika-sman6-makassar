"use client";

import { PageContainer, PageWrapper } from "./styled";

interface PageLayoutProps {
	children: React.ReactNode;
	color?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, color }) => {

	// Default ke background default dari theme jika tidak ada color
	const resolvedColor = color ?? "transparent";

	return (
		<PageWrapper bgcolor={resolvedColor}>
			<PageContainer>{children}</PageContainer>
		</PageWrapper>
	);
};

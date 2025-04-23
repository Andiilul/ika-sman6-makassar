"use client"

import { FlexContainer } from "./styled";

interface FlexBoxProps {
	children?: React.ReactNode;
	flexDirection?: "row" | "column";
}

export const FlexBox: React.FC<FlexBoxProps> = ({
	children,
	flexDirection = "row",
}) => {
	return (
		<FlexContainer display={"flex"} width={"100%"} flexDirection={flexDirection}>
			{children}
		</FlexContainer>
	);
};

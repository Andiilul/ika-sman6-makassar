import { Breadcrumbs, Typography } from "@mui/material";
import { PageHeaderContainer, PageHeaderWrapper } from "./styled";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PageHeaderProps {
	title: string;}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
	const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		event.preventDefault();
		console.info("You clicked a breadcrumb.");
	};

	const pathname = usePathname();

	const segments = pathname.split("/").filter((segment) => segment !== "");

	const breadcrumbList = [
		{ label: "IKA SMA 6", href: "/" },
		...segments.map((segment, i) => {
			const href = "/" + segments.slice(0, i + 1).join("/");
			const label = decodeURIComponent(segment).replace(/-/g, " ");
			return { label: label.charAt(0).toUpperCase() + label.slice(1), href };
		}),
	];

	return (
		<PageHeaderWrapper>
			<PageHeaderContainer>
				<Typography fontSize="36px" fontWeight={600}>
					{title}
				</Typography>
				<div role="presentation" onClick={handleClick}>
					<Breadcrumbs aria-label="breadcrumb">
						{breadcrumbList.map((item, index) => {
							const isLast = index === breadcrumbList.length - 1;
							return isLast ? (
								<Typography
									fontSize={"18px"}
									key={index}
									color="primary.main"
									fontWeight={600}
								>
									{item.label}
								</Typography>
							) : (
								<Link
									key={index}
									href={item.href}
									style={{ textDecoration: "none", color: "inherit" }}
								>
									<Typography
										fontSize={"18px"}
										key={index}
										color="white"
										fontWeight={400}
										sx={{
											":hover": {
												color: "secondary.main",
												transition: "200ms",
											},
										}}
									>
										{item.label}
									</Typography>{" "}
								</Link>
							);
						})}
					</Breadcrumbs>
				</div>
			</PageHeaderContainer>
		</PageHeaderWrapper>
	);
};

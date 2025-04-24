"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientTransitionWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [showChildren, setShowChildren] = useState(true);
	const [currentPath, setCurrentPath] = useState(pathname);

	useEffect(() => {
		if (pathname !== currentPath) {
			setShowChildren(false);
			const timeout = setTimeout(() => {
				setCurrentPath(pathname);
				setShowChildren(true);
			}, 300); // sama dengan durasi animasi keluar
			return () => clearTimeout(timeout);
		}
	}, [pathname, currentPath]);

	return (
		<AnimatePresence mode="wait">
			{showChildren && (
				<motion.div
					key={pathname}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

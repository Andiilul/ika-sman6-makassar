'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function GlobalNotFound() {
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const segments = pathname.split('/');
		const locale = segments[1] || 'id';

		// Hindari redirect loop ke dirinya sendiri
		if (segments[2] !== 'not-found') {
			router.replace(`/${locale}/not-found`);
		}
	}, [router, pathname]);

	return null;
}

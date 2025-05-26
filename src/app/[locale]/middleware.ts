import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: ['id', 'en'],         // 🗣 daftar locale kamu
	defaultLocale: 'id',           // ✅ redirect otomatis ke sini
	localeDetection: true          // ⬅️ aktifkan deteksi browser jika kamu mau
});

export const config = {
	matcher: ['/((?!_next|favicon.ico|images|icons).*)'], // ❗abaikan folder static
};
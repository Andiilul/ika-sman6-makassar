export interface IActivity {
	id: string; // Unique ID
	title: string; // Judul kegiatan
	shortDescription: string; // Deskripsi singkat
	description: string; // Deskripsi lengkap
	date: string; // Format ISO string, contoh: "2025-04-28"
	location: string; // Tempat kegiatan
	imageUrl: string; // Thumbnail / cover kegiatan
	category: "Reuni" | "Bakti Sosial" | "Seminar" | "Olahraga" | "Lainnya"; // Kategori kegiatan
}

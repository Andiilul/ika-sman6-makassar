export interface IActivity {
	id: string; // Unique ID
	title: string; // Judul kegiatan
	short_description: string; // Deskripsi singkat
	description: string; // Deskripsi lengkap
	date: string; // Format ISO string, contoh: "2025-04-28"
	location: string | undefined; // Tempat kegiatan
	image: string; // Thumbnail / cover kegiatan
	imageURL: string; // URL gambar
}

export interface IAlumni {
	id: string; // ID alumni
	name: string; // Nama lengkap
	nisn: string; // NISN sekolah (bukti terdaftar)
	gender: "male" | "female";
	graduation_year: string; // Tahun alumni
	ethnicity: string; // Suku
	domicile: string; // Domisili Saat ini
	address: string; // Alamat KTP
	profession: string; // Profesi sekarang
	position: string; // Jabatan / tugas saat ini
	location: "makassar" | "non-makassar"; // Lokasi tugas
	hobby: string; // Hobi
	contact_number: string; // Nomor yang bisa dihubungi
	image: string; // Nomor yang bisa dihubungi
	imageURL: string; // URL gambar alumni
}

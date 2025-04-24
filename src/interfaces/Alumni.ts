export interface IGraduationYear{
  year: number;}

export interface IAlumni {
	fullName: string; // Nama lengkap
	nisn: string; // NISN sekolah (bukti terdaftar)
	gender: string;
	graduationYear: IGraduationYear; // Tahun alumni
	ethnicity: string; // Suku
	domicile: string; // Domisili Saat ini
	address: string; // Alamat KTP
	contactNumber: string; // Nomor yang bisa dihubungi
	profession: string; // Profesi sekarang
	position: string; // Jabatan / tugas saat ini
	location: "Makassar" | "Luar Makassar"; // Lokasi tugas
	hobby: string; // Hobi
}

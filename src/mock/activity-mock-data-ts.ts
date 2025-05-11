import { IActivity } from "@/interfaces/Kegiatan";

export const activityMock: IActivity[] = [
	{
		id: "1",
		title: "Reuni Akbar 2025",
		short_description: "Menyatukan kembali alumni lintas angkatan.",
		description:
			"Kegiatan reuni akbar untuk seluruh angkatan alumni SMA Negeri 6 Makassar. Acara ini akan diisi dengan sambutan dari kepala sekolah, pertunjukan seni, dan jamuan makan malam.",
		date: "2025-07-20",
		location: "Aula SMA Negeri 6 Makassar",
		image: "/images/activities/reuni.jpg",
	},
	{
		id: "2",
		title: "Bakti Sosial Ramadhan",
		short_description: "Berbagi dengan masyarakat sekitar.",
		description:
			"Kegiatan bakti sosial berupa pembagian sembako, buka puasa bersama, dan santunan kepada anak yatim piatu yang dilaksanakan selama bulan Ramadhan.",
		date: "2025-03-28",
		location: "Panti Asuhan Harapan Makassar",
		image: "/images/activities/baksos.jpg",
	},
	{
		id: "3",
		title: "Seminar Kewirausahaan",
		short_description: "Belajar membangun bisnis dari alumni sukses.",
		description:
			"Sesi seminar interaktif bersama alumni yang telah sukses di bidang usaha. Memberikan inspirasi dan panduan membangun bisnis dari nol.",
		date: "2025-05-10",
		location: "Gedung Serbaguna UNHAS",
		image: "/images/activities/seminar.jpg",
	},
	{
		id: "4",
		title: "Turnamen Futsal Antar Alumni",
		short_description: "Kompetisi olahraga mempererat persaudaraan.",
		description:
			"Pertandingan futsal antar angkatan alumni sebagai ajang silaturahmi dan olahraga bersama. Tersedia hadiah dan medali untuk pemenang.",
		date: "2025-06-15",
		location: "GOR Sudiang Makassar",
		image: "/images/activities/futsal.jpg",
	},
	{
		id: "5",
		title: "Pelatihan Desain Grafis",
		short_description: "Workshop desain untuk pemula dan menengah.",
		description:
			"Workshop intensif selama satu hari yang akan membahas dasar-dasar desain grafis menggunakan software populer seperti Canva dan Adobe Illustrator.",
		date: "2025-04-30",
		location: "Coworking Space District 41",
		image: "/images/activities/desain.jpg",
	},
	{
		id: "6",
		title: "Pelantikan Pengurus IKA SMA Negeri 6 Makassar",
		short_description:
			"Pelantikan pengurus baru dengan semangat kebersamaan alumni.",
		description:
			"Makassar, 17 Februari 2025 - Ikatan Alumni (IKA) SMA Negeri 6 Makassar resmi melantik pengurus barunya dalam sebuah acara meriah yang mempererat sinergi antar alumni lintas angkatan. Ketua IKA baru, Ir. M. Asriadi Doloking, MM, menegaskan komitmennya menjadikan organisasi ini sebagai wadah kolaborasi aktif dalam mendukung kegiatan sosial, pendidikan, dan pengembangan karier untuk alumni dan siswa-siswi SMA Negeri 6 Makassar.",
		date: "2025-02-17",
		location: "Makassar",
		image: "/images/activities/pelantikan-ika6.jpg",
	},
];

export default activityMock;

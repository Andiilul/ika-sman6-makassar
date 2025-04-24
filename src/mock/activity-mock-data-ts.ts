import { IActivity } from "@/interfaces/Kegiatan";

export const activityMock: IActivity[] = [
  {
    id: "1",
    title: "Reuni Akbar 2025",
    shortDescription: "Menyatukan kembali alumni lintas angkatan.",
    description:
      "Kegiatan reuni akbar untuk seluruh angkatan alumni SMA Negeri 6 Makassar. Acara ini akan diisi dengan sambutan dari kepala sekolah, pertunjukan seni, dan jamuan makan malam.",
    date: "2025-07-20",
    location: "Aula SMA Negeri 6 Makassar",
    imageUrl: "/images/activities/reuni.jpg",
    category: "Reuni",
  },
  {
    id: "2",
    title: "Bakti Sosial Ramadhan",
    shortDescription: "Berbagi dengan masyarakat sekitar.",
    description:
      "Kegiatan bakti sosial berupa pembagian sembako, buka puasa bersama, dan santunan kepada anak yatim piatu yang dilaksanakan selama bulan Ramadhan.",
    date: "2025-03-28",
    location: "Panti Asuhan Harapan Makassar",
    imageUrl: "/images/activities/baksos.jpg",
    category: "Bakti Sosial",
  },
  {
    id: "3",
    title: "Seminar Kewirausahaan",
    shortDescription: "Belajar membangun bisnis dari alumni sukses.",
    description:
      "Sesi seminar interaktif bersama alumni yang telah sukses di bidang usaha. Memberikan inspirasi dan panduan membangun bisnis dari nol.",
    date: "2025-05-10",
    location: "Gedung Serbaguna UNHAS",
    imageUrl: "/images/activities/seminar.jpg",
    category: "Seminar",
  },
  {
    id: "4",
    title: "Turnamen Futsal Antar Alumni",
    shortDescription: "Kompetisi olahraga mempererat persaudaraan.",
    description:
      "Pertandingan futsal antar angkatan alumni sebagai ajang silaturahmi dan olahraga bersama. Tersedia hadiah dan medali untuk pemenang.",
    date: "2025-06-15",
    location: "GOR Sudiang Makassar",
    imageUrl: "/images/activities/futsal.jpg",
    category: "Olahraga",
  },
  {
    id: "5",
    title: "Pelatihan Desain Grafis",
    shortDescription: "Workshop desain untuk pemula dan menengah.",
    description:
      "Workshop intensif selama satu hari yang akan membahas dasar-dasar desain grafis menggunakan software populer seperti Canva dan Adobe Illustrator.",
    date: "2025-04-30",
    location: "Coworking Space District 41",
    imageUrl: "/images/activities/desain.jpg",
    category: "Lainnya",
  },
];

export default activityMock;

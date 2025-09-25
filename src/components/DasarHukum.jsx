import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";

const dasarHukumList = [
  {
    title: "Peraturan Presiden Nomor 29 Tahun 2014",
    desc: "Tentang Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP).",
  },
  {
    title: "PermenPANRB Nomor 53 Tahun 2014",
    desc: "Tentang Petunjuk Teknis Perjanjian Kinerja, Pelaporan Kinerja dan Tata Cara Reviu atas Laporan Kinerja Instansi Pemerintah.",
  },
  {
    title: "Peraturan Pemerintah Nomor 8 Tahun 2006",
    desc: "Tentang Pelaporan Keuangan dan Kinerja Instansi Pemerintah.",
  },
  {
    title: "PermenPANRB Nomor 88 Tahun 2021",
    desc: "Tentang Evaluasi Akuntabilitas Kinerja Instansi Pemerintah.",
  },
  {
    title: "PermenPANRB Nomor 89 Tahun 2021",
    desc: "Tentang Penjenjangan Kinerja Instansi Pemerintah.",
  },
  {
    title: "Permendikbudristek Nomor 40 Tahun 2022",
    desc: "Tentang Sistem Akuntabilitas Kinerja Instansi Pemerintah di Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi.",
  },
];

const DasarHukum = () => (
  <section className="bg-white py-10" id="dasar-hukum">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0a4a8e] mb-8">
        Dasar Hukum SAKIP
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dasarHukumList.map((item, idx) => (
          <div
            key={idx}
            className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col items-center text-center shadow-sm"
          >
            <HiOutlineDocumentText className="text-blue-500 text-4xl mb-3" />
            <h3 className="font-semibold text-lg text-blue-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DasarHukum;
import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineAssessment } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

const cards = [
  {
    title: "Perencanaan Kinerja",
    desc: "Dokumen yang memuat visi, misi, tujuan, sasaran, strategi, dan program kerja sebagai arah pengembangan institusi.",
    icon: <HiOutlineDocumentText className="text-blue-500 text-4xl sm:text-5xl md:text-5xl mx-auto" />,
  },
  {
    title: "Pengukuran Kinerja",
    desc: "Dokumen yang berisi indikator dan target kinerja untuk mengukur pencapaian tujuan organisasi secara terukur dan objektif.",
    icon: <MdOutlineAssessment className="text-blue-500 text-4xl sm:text-5xl md:text-5xl mx-auto" />,
  },
  {
    title: "Evaluasi Akuntabilitas",
    desc: "Dokumen hasil penilaian atas pelaksanaan kinerja dan akuntabilitas, sebagai dasar perbaikan berkelanjutan.",
    icon: <FaRegHandshake className="text-blue-500 text-4xl sm:text-5xl md:text-5xl mx-auto" />,
  },
  {
    title: "Pelaporan Kinerja",
    desc: "Dokumen yang menyajikan hasil capaian kinerja dan realisasi program secara periodik sebagai bentuk pertanggungjawaban.",
    icon: <TbReportAnalytics className="text-blue-500 text-4xl sm:text-5xl md:text-5xl mx-auto" />,
  },
];

const DokumenAkuntabilitas = () => (
  <section className="bg-gray-200 py-10 bg-[url('/dot-bg.svg')] bg-repeat" id="jenis-dokumen">
    <div className="max-w-6xl mx-auto px-2 sm:px-4">
      <div className="text-center mb-2">
        <h2 className="text-3xl text-[#0a4a8e] font-bold text-center mb-8">Jenis Dokumen Akuntabilitas</h2>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-blue-100 p-4 sm:p-5 md:p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <div className="mb-3">{card.icon}</div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl mb-1 text-gray-800">{card.title}</h3>
            <p className="text-gray-500 text-xs sm:text-sm md:text-base font-[Average_Sans]">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DokumenAkuntabilitas;
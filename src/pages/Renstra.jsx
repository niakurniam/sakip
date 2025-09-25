import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi2";
import ContactUs from "../components/ContactUs";

// import responsive helpers
import { OnlyMobile, OnlyTablet, OnlyDesktop } from "../components/DeviceVisibility";

const Renstra = () => (
  <>
      <div className="min-h-screen bg-white py-10 px-4 sm:px-6 md:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0a4a8e] mb-4 sm:mb-6 text-center">
          Rencana Strategis 
        </h1>
        <p className="mb-6 text-justify text-sm sm:text-base text-gray-700 font-[Average_Sans]">
          <span><b>Rencana Strategis (RENSTRA)</b></span> adalah dokumen perencanaan jangka menengah
          yang memuat visi, misi, tujuan, sasaran, strategi, kebijakan, program, dan
          kegiatan pembangunan yang akan dilaksanakan oleh Politeknik Perkapalan
          Negeri Surabaya (PPNS) dalam kurun waktu lima tahun. RENSTRA disusun
          sebagai pedoman dalam pelaksanaan tugas dan fungsi, serta sebagai dasar
          pengukuran kinerja dan akuntabilitas institusi. Dokumen ini menjadi acuan
          utama dalam pengambilan keputusan strategis, pengelolaan sumber daya, serta
          evaluasi capaian kinerja PPNS agar selaras dengan arah kebijakan nasional
          dan kebutuhan pemangku kepentingan.
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-[#0a4a8e] mb-3 sm:mb-4">
          Unduh Dokumen RENSTRA PPNS
        </h2>
        <div className="flex flex-col gap-4">
          <Link
            to="/pdf-viewer?file=RENSTRA_PPNS_2025-2029.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>RENSTRA PPNS 2025-2029 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=RENSTRA_PPNS_2020-2024.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>RENSTRA PPNS 2020-2024 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=RENSTRA_PPNS_2015-2019.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>RENSTRA PPNS 2015-2019 (PDF)</span>
          </Link>
        </div>
      </div>
    </div>
    {/* ContactUs component rendered based on device type */}
    <OnlyMobile>
      <ContactUs />
    </OnlyMobile>

    <OnlyTablet>
      <ContactUs />
    </OnlyTablet>
    
    <OnlyDesktop>
      <ContactUs />
    </OnlyDesktop>
  </>
);

export default Renstra;
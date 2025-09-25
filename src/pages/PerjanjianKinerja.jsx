import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi2";
import ContactUs from "../components/ContactUs";

// import responsive helpers
import { OnlyMobile, OnlyTablet, OnlyDesktop } from "../components/DeviceVisibility";

const PerjanjianKinerja = () => (
  <>
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 md:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0a4a8e] mb-4 sm:mb-6 text-center">
          Perjanjian Kinerja
        </h1>
        <p className="mb-6 text-justify text-sm sm:text-base text-gray-700 font-[Average_Sans]">
          <span><b>Perjanjian Kinerja</b></span> adalah dokumen kesepakatan antara pimpinan dan
          bawahan yang memuat penugasan dari atasan kepada bawahan untuk
          melaksanakan program atau kegiatan yang disertai dengan indikator kinerja.
          PK bertujuan untuk meningkatkan akuntabilitas, transparansi, dan kinerja
          organisasi melalui komitmen bersama dalam pencapaian target yang telah
          ditetapkan. Dengan adanya Perjanjian Kinerja, setiap unit kerja di
          Politeknik Perkapalan Negeri Surabaya (PPNS) memiliki acuan yang jelas
          dalam melaksanakan tugas dan tanggung jawabnya, serta sebagai dasar
          evaluasi dan pelaporan kinerja secara periodik.
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-[#0a4a8e] mb-3 sm:mb-4">
          Unduh Dokumen Perjanjian Kinerja PPNS
        </h2>
        <div className="flex flex-col gap-4">
          <Link
            to="/pdf-viewer?file=PK_PPNS_2025.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>PK PPNS 2025 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=PK_PPNS_2024.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>PK PPNS 2024 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=PK_PPNS_2023.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>PK PPNS 2023 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=PK_PPNS_2022.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>PK PPNS 2022 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=PK_PPNS_2021.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>PK PPNS 2021 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=PK_PPNS_2020.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>PK PPNS 2020 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=PK_PPNS_2019.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>PK PPNS 2019 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=PK_PPNS_2018.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>PK PPNS 2018 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=PK_PPNS_2017.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>PK PPNS 2017 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=PK_PPNS_2016.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>PK PPNS 2016 (PDF)</span>
          </Link>
        </div>
      </div>
    </div>
    {/* ContactUs tampil sesuai device */}
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

export default PerjanjianKinerja;
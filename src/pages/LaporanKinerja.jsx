import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi2";
import ContactUs from "../components/ContactUs";

// import responsive helpers
import { OnlyMobile, OnlyTablet, OnlyDesktop } from "../components/DeviceVisibility";

const LaporanKinerja = () => (
  <>
      <div className="min-h-screen bg-white py-10 px-4 sm:px-6 md:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0a4a8e] mb-4 sm:mb-6 text-center">
          Laporan Kinerja
        </h1>
        <p className="mb-6 text-justify text-sm sm:text-base text-gray-700 font-[Average_Sans]">
          <span><b>Laporan Kinerja</b></span> adalah dokumen yang berisi hasil capaian kinerja dan
          pelaksanaan program serta kegiatan di Politeknik Perkapalan Negeri Surabaya
          (PPNS) selama periode tertentu. Laporan ini disusun sebagai bentuk
          pertanggungjawaban atas penggunaan sumber daya dan pencapaian target yang
          telah ditetapkan dalam perencanaan dan perjanjian kinerja. Melalui Laporan
          Kinerja, PPNS dapat melakukan evaluasi, monitoring, serta perbaikan
          berkelanjutan untuk meningkatkan akuntabilitas, transparansi, dan kualitas
          pelayanan publik.
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-[#0a4a8e] mb-3 sm:mb-4">
          Unduh Dokumen Laporan Kinerja PPNS
        </h2>
        <div className="flex flex-col gap-4">
          <Link
            to="/pdf-viewer?file=LAKIN_PPNS_2015-2024.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>LAKIN PPNS 2015-2024 (PDF)</span>
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

export default LaporanKinerja;
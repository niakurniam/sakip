import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi2";
import ContactUs from "../components/ContactUs";

// import responsive helpers
import { OnlyMobile, OnlyTablet, OnlyDesktop } from "../components/DeviceVisibility";

const RencanaIndukPengembangan = () => (
  <>
      <div className="min-h-screen bg-white py-10 px-4 sm:px-6 md:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0a4a8e] mb-4 sm:mb-6 text-center">
          Rencana Induk Pengembangan
        </h1>
        <p className="mb-6 text-justify text-sm sm:text-base text-gray-700 font-[Average_Sans]">
          <span><b>Rencana Induk Pengembangan</b></span> merupakan dokumen strategis jangka panjang
          yang menjadi pedoman utama dalam pengembangan Politeknik Perkapalan Negeri
          Surabaya (PPNS). RIP disusun untuk memastikan arah pengembangan institusi
          selaras dengan visi, misi, dan tujuan strategis, serta mendukung implementasi
          Sistem Akuntabilitas Kinerja Instansi Pemerintah (SAKIP). Dokumen ini memuat
          rencana pengembangan sarana dan prasarana, sumber daya manusia, tata kelola,
          serta inovasi pendidikan dan penelitian dalam periode tertentu, sehingga PPNS
          dapat beradaptasi dan berdaya saing di tingkat nasional maupun internasional.
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-[#0a4a8e] mb-3 sm:mb-4">
          Unduh Dokumen RIP PPNS
        </h2>
        <div className="flex flex-col gap-4">
          <Link
            to="/pdf-viewer?file=RIP_PPNS_2015-2039.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>RIP PPNS 2015-2039 (PDF)</span>
          </Link>
          <Link
            to="/pdf-viewer?file=RIP_PPNS_2015-2045.pdf"
            className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
          >
            <HiOutlineDocumentText className="text-2xl text-blue-500" />
            <span>RIP PPNS 2015-2045 (PDF)</span>
          </Link>
        </div>
      </div>
    </div>
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

export default RencanaIndukPengembangan;
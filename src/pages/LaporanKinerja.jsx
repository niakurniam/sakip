import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi2";
import ContactUs from "../components/ContactUs";

// import responsive helpers
import {
  OnlyMobile,
  OnlyTablet,
  OnlyDesktop,
} from "../components/DeviceVisibility";

const data = [
  {
    year: "2024",
    file: "LAKIN_PPNS_2024.pdf",
    name: "LAKIN PPNS 2024 (PDF)",
  },
  {
    year: "2023",
    file: "LAKIN_PPNS_2023.pdf",
    name: "LAKIN PPNS 2023 (PDF)",
  },
  {
    year: "2022",
    file: "LAKIN_PPNS_2022.pdf",
    name: "LAKIN PPNS 2022 (PDF)",
  },
  {
    year: "2021",
    file: "LAKIN_PPNS_2021.pdf",
    name: "LAKIN PPNS 2021 (PDF)",
  },
  {
    year: "2020",
    file: "LAKIN_PPNS_2020.pdf",
    name: "LAKIN PPNS 2020 (PDF)",
  },
  {
    year: "2019",
    file: "LAKIN_PPNS_2019.pdf",
    name: "LAKIN PPNS 2019 (PDF)",
  },
  {
    year: "2018",
    file: "LAKIN_PPNS_2018.pdf",
    name: "LAKIN PPNS 2018 (PDF)",
  },
  {
    year: "2017",
    file: "LAKIN_PPNS_2017.pdf",
    name: "LAKIN PPNS 2017 (PDF)",
  },
  {
    year: "2016",
    file: "LAKIN_PPNS_2016.pdf",
    name: "LAKIN PPNS 2016 (PDF)",
  },
  // {
  //   year: "2015",
  //   file: "LAKIN_PPNS_2015.pdf",
  //   name: "LAKIN PPNS 2015 (PDF)",
  // },
  // {
  //   year: "2014",
  //   file: "LAKIN_PPNS_2014.pdf",
  //   name: "LAKIN PPNS 2014 (PDF)",
  // },
];

const LaporanKinerja = () => (
  <>
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 md:px-8 flex items-center justify-center">
      <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0a4a8e] mb-4 sm:mb-6 text-center">
          Laporan Kinerja
        </h1>
        <p className="mb-6 text-justify text-sm sm:text-base text-gray-700 font-[Average_Sans]">
          <span>
            <b>Laporan Kinerja</b>
          </span>{" "}
          adalah dokumen yang berisi hasil capaian kinerja dan pelaksanaan
          program serta kegiatan di Politeknik Perkapalan Negeri Surabaya (PPNS)
          selama periode tertentu. Laporan ini disusun sebagai bentuk
          pertanggungjawaban atas penggunaan sumber daya dan pencapaian target
          yang telah ditetapkan dalam perencanaan dan perjanjian kinerja.
          Melalui Laporan Kinerja, PPNS dapat melakukan evaluasi, monitoring,
          serta perbaikan berkelanjutan untuk meningkatkan akuntabilitas,
          transparansi, dan kualitas pelayanan publik.
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-[#0a4a8e] mb-3 sm:mb-4">
          Unduh Dokumen Laporan Kinerja PPNS
        </h2>
        {data.map((item) => (
          <div className="flex flex-col gap-4 mb-4" key={item.year}>
            <Link
              to={`/pdf-viewer?file=${item.file}`}
              className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 font-semibold shadow transition-all duration-150 font-[Average_Sans]"
            >
              <HiOutlineDocumentText className="text-2xl text-blue-500" />
              <span>{item.name}</span>
            </Link>
          </div>
        ))}
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

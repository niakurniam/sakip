import React from "react";
import groupImg from "../assets/img/direktur.png";

const Greeting = () => (
  <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 xl:gap-15 px-4 w-full max-w-6xl mx-auto py-8 sm:py-12 md:py-20 bg-white">
    {/* Left: Text */}
    <div className="flex-1 flex flex-col justify-center items-start max-w-2xl w-full mx-auto lg:mx-0 lg:pl-8">
      <h3 className="text-base sm:text-lg md:text-base font-bold text-[#323c46] mb-4 leading-tight">
        Direktur Politeknik Perkapalan Negeri Surabaya
      </h3>
      <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#0a4a8e] mb-4 leading-tight">
        Rahmad Tri Soelistijono, S.T., M.T.
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6 text-justify font-[Average_Sans]">
        Merujuk pada <b>Peraturan Presiden Nomor 29 Tahun 2014 tentang Sistem Akuntabilitas Kinerja Instansi Pemerintah</b>, Politeknik Perkapalan Negeri Surabaya (PPNS) membangun sistem akuntabilitas sebagai bentuk pertanggungjawaban efektivitas dan efisiensi penggunaan anggaran yang diamanahkan. Sistem akuntabilitas merupakan salah satu pilar utama dalam mewujudkan tata kelola pemerintahan yang baik. Akuntabilitas bukan hanya sebatas pelaporan administratif, tetapi juga mencerminkan komitmen terhadap transparansi, integritas, dan pelayanan publik yang berkualitas. Melalui laman SAKIP ini, PPNS berkomitmen memastikan data kinerja dikelola dengan baik untuk mengetahui pencapaian dari tahun ke tahun sebagai wujud akuntabilitas atas setiap kebijakan, serta penggunaan sumber daya publik yang dikelolanya.
      </p>
      <p className="italic text-center text-xl sm:text-lg md:text-base font-bold text-[#323c46] mb-4 leading-tight">
        "Wujudkan Akuntabilitas, Tingkatkan Mutu Pelayanan Publik"
      </p>
    </div>
    {/* Right: Image */}
    <div className="flex-1 flex justify-center items-center w-full max-w-2xl lg:pr-8 mb-8 lg:mb-0">
      <img
        src={groupImg}
        alt="Group working together"
        className="rounded-full w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-lg"
      />
    </div>
  </section>
);

export default Greeting;

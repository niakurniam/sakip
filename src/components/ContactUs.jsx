import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from '../assets/img/logo-transparant.png';
import logoSuccess from '../assets/img/Logo PPNS Success.png';

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Rencana Induk Pengembangan", href: "/rip" },
  { label: "RENSTRA", href: "/renstra" },
  { label: "Perjanjian Kinerja", href: "/pk" },
  { label: "Perjanjian Kinerja Tahunan", href: "/rkt" },
  { label: "Rencana Aksi", href: "/renaksi" },
  { label: "Laporan Kinerja", href: "/lakin" },
  { label: "Nilai SAKIP", href: "/nilai-sakip" },
];

const ContactUs = () => (
  <footer className="bg-blue-50 text-[#253b80] pt-12 pb-4 px-4 sm:px-8 md:px-16">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap gap-10 lg:gap-20 justify-center items-stretch text-center md:text-left">
      {/* Logo & Description */}
      <div className="flex-1 min-w-[220px] mb-8 md:mb-0 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <img src={logo} alt="SAKIP PPNS" className="w-9 sm:w-10 inline-block" />
          <span className="text-2xl font-bold">SAKIP PPNS</span>
        </div>
        <p className="text-[#253b80]/90 text-justify leading-relaxed font-[Average_Sans]">
          SAKIP PPNS memastikan data kinerja dikelola dengan baik untuk mengetahui pencapaian dari tahun ke tahun sebagai wujud akuntabilitas atas setiap kebijakan, serta penggunaan sumber daya publik yang dikelola.
        </p>
        <img
          src={logoSuccess}
          alt="Logo PPNS Success"
          className="mt-4 w-20 sm:w-24 md:w-28 ml-0"
        />
      </div>
      {/* Navigation */}
      <div className="flex-1 min-w-[180px] mb-8 md:mb-0 flex flex-col">
        <h3 className="text-xl font-bold mb-4">Navigasi</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          <ul className="space-y-2 font-[Average_Sans]">
            {NAV_LINKS.slice(0, Math.ceil(NAV_LINKS.length / 2)).map((nav) => (
              <li key={nav.label}>
                <a href={nav.href} className="hover:underline text-[#253b80]/90">{nav.label}</a>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 font-[Average_Sans]">
            {NAV_LINKS.slice(Math.ceil(NAV_LINKS.length / 2)).map((nav) => (
              <li key={nav.label}>
                <a href={nav.href} className="hover:underline text-[#253b80]/90">{nav.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Contact Info */}
      <div className="flex-1 min-w-[220px] flex flex-col">
        <h3 className="text-xl font-bold mb-4">Kontak</h3>
        <ul className="space-y-3 font-[Average_Sans]">
          <li className="flex items-center gap-3 break-words"><FaMapMarkerAlt className="text-pink-900" /> <span>Jalan Teknik Kimia, Kampus ITS Sukolilo, Surabaya, Jawa Timur 60111</span></li>
          <li className="flex items-center gap-3"><FaPhoneAlt className="text-pink-900" /> <span>031-5947186 (Senin-Jumat: 08.00-16.00 WIB)</span></li>
          <li className="flex items-center gap-3"><FaEnvelope className="text-pink-900" /> <span>humas@ppns.ac.id</span></li>
          <li className="flex items-center gap-3 text-2xl flex-wrap">
            <a href="https://ppns.ac.id" target="_blank" rel="noopener noreferrer" aria-label="Website PPNS">
              <FaGlobe className="text-blue-950" />
            </a>
            <a href="https://www.instagram.com/ppns_success/" target="_blank" rel="noopener noreferrer" aria-label="Instagram PPNS">
              <FaInstagram className="text-blue-950" />
            </a>
            <a href="https://www.youtube.com/channel/UC6tcA4HBWqE0n-yacKf4tKQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube PPNS">
              <FaYoutube className="text-blue-950" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray/20 mt-8 pt-4 text-center text-[#253b80]/80 text-sm">
      © {new Date().getFullYear()} PPNS. All rights reserved.
    </div>
  </footer>
);

export default ContactUs;

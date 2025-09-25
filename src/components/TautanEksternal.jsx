import React from "react";

// Example logo imports (replace with your actual logo files)
import kerma from '../assets/img/mitra/kerma-color.png';
import emonev from '../assets/img/mitra/logo_emonev.png';
import tracerstudy from '../assets/img/mitra/logo.7d580409.png';
import sidakin from '../assets/img/mitra/sidakin logo.png';
import sinta from '../assets/img/mitra/logo sinta.png';
import spasikita from '../assets/img/mitra/logo-spasikita.png';
import pddikti from '../assets/img/mitra/logo pddikti.png';

const partners = [
  { src: kerma, alt: 'LAPORKERMA' },
  { src: emonev, alt: 'Monev Bappenas' },
  { src: tracerstudy, alt: 'Tracer Web' },
  { src: sidakin, alt: 'SIDAKIN' },
  { src: sinta, alt: 'SINTA' },
  { src: spasikita, alt: 'SPASIKITA' },
  { src: pddikti, alt: 'PDDIKTI' },
];


const TautanEksternal = () => (
  <section className="w-full py-10 bg-white">
    <h2 className="text-3xl text-[#0a4a8e] font-bold text-center mb-8">Tautan Eksternal</h2>
    <div className="overflow-x-hidden w-full">
      <div className="flex items-center gap-8 md:gap-12 px-4 animate-slide-horizontal whitespace-nowrap" style={{ animation: 'slide-horizontal 20s linear infinite' }}>
        {partners.concat(partners).map((partner, idx) => (
          <img
            key={idx}
            src={partner.src}
            alt={partner.alt}
            className="h-14 md:h-20 max-w-[160px] object-contain inline-block transition-transform duration-300 hover:scale-105"
            style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.04))' }}
          />
        ))}
      </div>
    </div>
    <style>{`
      @keyframes slide-horizontal {
        0% { transform: translateX(0); }
        100% { transform: translateX(-90%); }
      }
    `}</style>
  </section>
);

export default TautanEksternal;

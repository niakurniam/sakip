import React, { useEffect, useRef, useState, useCallback } from 'react';
import hero1 from '../assets/img/hero1.jpg';
import hero2 from '../assets/img/hero2.jpeg';
import hero3 from '../assets/img/hero3.jpg';


const SLIDES = [
  { id: 'slide1', src: hero1 },
  { id: 'slide2', src: hero2 },
  { id: 'slide3', src: hero3 },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const slides = SLIDES;
  const extendedSlides = [...slides, slides[0]];

  // Transition helpers
  const enableTransition = useCallback(() => {
    if (trackRef.current) trackRef.current.style.transition = 'transform 500ms ease-in-out';
  }, []);
  const disableTransition = useCallback(() => {
    if (trackRef.current) trackRef.current.style.transition = 'none';
  }, []);

  // Next/Prev/Direct navigation
  const handleNext = useCallback(() => {
    enableTransition();
    setCurrentIndex((prev) => prev + 1);
  }, [enableTransition]);
  const handlePrev = useCallback(() => {
    enableTransition();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [enableTransition, slides.length]);
  const handleDot = useCallback((i) => {
    enableTransition();
    setCurrentIndex(i);
  }, [enableTransition]);

  // Auto-advance
  useEffect(() => {
    const intervalId = setInterval(handleNext, 9000);
    return () => clearInterval(intervalId);
  }, [handleNext]);

  // Looping effect for seamless transition
  useEffect(() => {
    if (currentIndex === slides.length) {
      const id = setTimeout(() => {
        disableTransition();
        setCurrentIndex(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => enableTransition());
        });
      }, 520);
      return () => clearTimeout(id);
    }
  }, [currentIndex, slides.length, disableTransition, enableTransition]);

  const activeDot = currentIndex % slides.length;

  return (
    <div id='beranda' className='bg-neutral-200'>
      <div className='pt-0'>
        <div className='relative w-screen h-80 sm:h-96 md:h-[32rem] lg:h-[40rem] overflow-hidden bg-black'>
          {/* Slides track */}
          <div
            ref={trackRef}
            className='flex h-full'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {extendedSlides.map((s, idx) => (
              <div key={`${s.id}-${idx}`} className='relative w-screen h-full flex-shrink-0'>
                <img src={s.src} alt='' className='block w-full h-full object-cover object-[center_20%]' />
              </div>
            ))}
          </div>

          {/* Semi-transparent overlay (below text) */}
          <div className='absolute inset-0 bg-black/50 z-30 pointer-events-none' />

          {/* Global heading overlay on topmost layer */}
          <div className='absolute inset-0 z-40 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-5'>
            <h2 className='text-white text-center font-medium tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl px-4 drop-shadow-2xl'>
              Selamat Datang di
            </h2>
            <h1 className='text-white text-center font-bold tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl px-4 drop-shadow-2xl leading-tight'>
              Sistem Akuntabilitas Kinerja Instansi Pemerintah
            </h1>
            <span className='text-white text-center font-normal text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl px-4'>
              Wujudkan Akuntabilitas, Tingkatkan Mutu Pelayanan Publik
            </span>
            <a 
              href="#kontak"
              className='mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-md sm:rounded-lg md:rounded-xl bg-blue-600 hover:bg-blue-700 text-white border-0 text-sm sm:text-base md:text-lg font-semibold shadow-md transition-colors w-fit min-w-[100px] md:min-w-[140px] text-center'
            >
              Selengkapnya
            </a>
          </div>

          {/* Arrows */}
          <div className='absolute left-5 right-5 top-1/2 -translate-y-1/2 transform flex justify-between pointer-events-none z-40'>
            <button onClick={handlePrev} className='pointer-events-auto w-10 h-10 rounded-full bg-transparent hover:bg-white/10 text-white border-0 flex items-center justify-center cursor-pointer'>❮</button>
            <button onClick={handleNext} className='pointer-events-auto w-10 h-10 rounded-full bg-transparent hover:bg-white/10 text-white border-0 flex items-center justify-center cursor-pointer'>❯</button>
          </div>

          {/* Static dots overlay */}
          <div className='pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-40'>
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => handleDot(i)}
                className={`${activeDot === i ? 'bg-white' : 'bg-gray-500 border-gray/70 hover:border-white'} w-3 h-3 rounded-full transition-colors`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
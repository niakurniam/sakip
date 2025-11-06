import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo-transparant.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";

const NAV_ITEMS = [
  { link: "Beranda", path: "/" },
  {
    link: "Rencana Induk Pengembangan",
    path: "/rip",
    dropdown: [
      {
        label: "RIP PPNS 2015-2045",
        to: "/pdf-viewer?file=RIP_PPNS_2015-2045.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "RIP PPNS 2015-2039",
        to: "/pdf-viewer?file=RIP_PPNS_2015-2039.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
    ],
  },
  {
    link: "RENSTRA",
    path: "/renstra",
    dropdown: [
      {
        label: "Renstra PPNS 2025-2029",
        to: "/pdf-viewer?file=RENSTRA_PPNS_2025-2029.pdf",
        link: "1U5BynL2le9lnRXUScQSyFTe6QPwTWlNM",
      },
      {
        label: "Renstra PPNS 2020-2024",
        to: "/pdf-viewer?file=RENSTRA_PPNS_2020-2024.pdf",
        link: "1CCznrlwC2JAD8XVVHMrejboH1UuBtUfb",
      },
      {
        label: "Renstra PPNS 2015-2019",
        to: "/pdf-viewer?file=RENSTRA_PPNS_2015-2019.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
    ],
  },
  {
    link: "Perjanjian Kinerja",
    path: "/pk",
    dropdown: [
      {
        label: "PK 2025",
        to: "/pdf-viewer?file=PK_PPNS_2025.pdf",
        link: "145q8FL36k21hQ5ny8ISQ57R02QfMd5FF",
      },
      {
        label: "PK 2024",
        to: "/pdf-viewer?file=PK_PPNS_2024.pdf",
        link: "1ZKkle0Oj3Z8vDJvR8t36UpPR4jp8qyQO",
      },
      {
        label: "PK 2023",
        to: "/pdf-viewer?file=PK_PPNS_2023.pdf",
        link: "1XIa0PNwdD5S_i8Lm_sV9ZZty53goqgVN",
      },
      {
        label: "PK 2022",
        to: "/pdf-viewer?file=PK_PPNS_2022.pdf",
        link: "1kC8FjZ2WQXyTgH7NaczQwJELH7lw8DqI",
      },
      {
        label: "PK 2021",
        to: "/pdf-viewer?file=PK_PPNS_2021.pdf",
        link: "1zgip-XUM8c_vy82Jod88lw_nOYzmT8OP",
      },
      {
        label: "PK 2020",
        to: "/pdf-viewer?file=PK_PPNS_2020.pdf",
        link: "1gPA3NDPF1hhz5LZffjOVEn7ousJsBR0K",
      },
      {
        label: "PK 2019",
        to: "/pdf-viewer?file=PK_PPNS_2019.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "PK 2018",
        to: "/pdf-viewer?file=PK_PPNS_2018.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "PK 2017",
        to: "/pdf-viewer?file=PK_PPNS_2017.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "PK 2016",
        to: "/pdf-viewer?file=PK_PPNS_2016.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
    ],
  },
  {
    link: "Rencana Kinerja Tahunan",
    path: "/rkt",
    dropdown: [
      {
        label: "RKT 2025",
        to: "/pdf-viewer?file=RKT_PPNS_2025.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "RKT 2024",
        to: "/pdf-viewer?file=RKT_PPNS_2024.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "RKT 2023",
        to: "/pdf-viewer?file=RKT_PPNS_2023.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "RKT 2022",
        to: "/pdf-viewer?file=RKT_PPNS_2022.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
    ],
  },
  {
    link: "Rencana Aksi",
    path: "/renaksi",
    dropdown: [
      {
        label: "Renaksi 2025",
        to: "/pdf-viewer?file=RENAKSI_PPNS_2025.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "Renaksi 2024",
        to: "/pdf-viewer?file=RENAKSI_PPNS_2024.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "Renaksi 2023",
        to: "/pdf-viewer?file=RENAKSI_PPNS_2023.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "Renaksi 2022",
        to: "/pdf-viewer?file=RENAKSI_PPNS_2022.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "Renaksi 2021",
        to: "/pdf-viewer?file=RENAKSI_PPNS_2021.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
    ],
  },
  {
    link: "Laporan Kinerja",
    path: "/lakin",
    dropdown: [
      {
        label: "LAKIN PPNS 2024",
        to: "/pdf-viewer?file=LAKIN_PPNS_2024.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "LAKIN PPNS 2023",
        to: "/pdf-viewer?file=LAKIN_PPNS_2023.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "LAKIN PPNS 2022",
        to: "/pdf-viewer?file=LAKIN_PPNS_2022.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "LAKIN PPNS 2021",
        to: "/pdf-viewer?file=LAKIN_PPNS_2021.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "LAKIN PPNS 2020",
        to: "/pdf-viewer?file=LAKIN_PPNS_2020.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      //newly added items
      {
        label: "LAKIN PPNS 2019",
        to: "/pdf-viewer?file=LAKIN_PPNS_2019.pdf",
        // link: "1fZfVpygfVKV4QkTRgvKboPHyeIL9k1fL",
        link: "1fZfVpygfVKV4QkTRgvKboPHyeIL9k1fL",
      },
      {
        label: "LAKIN PPNS 2018",
        to: "/pdf-viewer?file=LAKIN_PPNS_2018.pdf",
        link: "1XgeRHtIAMqBm2HwtbxQ2JnEWOI2tFuBX",
      },
      {
        label: "LAKIN PPNS 2017",
        to: "/pdf-viewer?file=LAKIN_PPNS_2017.pdf",
        link: "1EGuATxrsTBONkg6pCpl1vSWfD6aDq8RT",
      },
      {
        label: "LAKIN PPNS 2016",
        to: "/pdf-viewer?file=LAKIN_PPNS_2016.pdf",
        link: "1c_JZ7MF7RIfMKg_MDOsjdcyuoDWc0GA_",
      },
      {
        label: "LAKIN PPNS 2015",
        to: "/pdf-viewer?file=LAKIN_PPNS_2015.pdf",
        link: "1RCW-3lV5Cm7GZxAz7_l3OaW1hVG3JIeB",
      },
      // {
      //   label: "LAKIN PPNS 2014",
      //   to: "/pdf-viewer?file=LAKIN_PPNS_2014.pdf",
      //   link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      // },
    ],
  },
  {
    link: "Nilai SAKIP",
    path: "/nilai-sakip",
    dropdown: [
      {
        label: "Nilai SAKIP 2024",
        to: "/pdf-viewer?file=NILAI_SAKIP_PPNS_2024.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "Nilai SAKIP 2023",
        to: "/pdf-viewer?file=NILAI_SAKIP_PPNS_2023.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "Nilai SAKIP 2022",
        to: "/pdf-viewer?file=NILAI_SAKIP_PPNS_2022.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
      {
        label: "Nilai SAKIP 2021",
        to: "/pdf-viewer?file=NILAI_SAKIP_PPNS_2021.pdf",
        link: "1MlUO9DjbIGe1sJq-ih-CQISJ9wA94aDM",
      },
    ],
  },
];

// Helper: check if path is external (starts with "/")
const isPageRoute = (path) => typeof path === "string" && path.startsWith("/");

function getIsActive({ path, dropdown }, location) {
  if (isPageRoute(path) && location.pathname === path) return true;
  if (
    dropdown &&
    dropdown.some(
      (item) =>
        item.to.startsWith("/") &&
        location.pathname + location.search === item.to
    )
  )
    return true;
  if (
    !dropdown &&
    !isPageRoute(path) &&
    location.hash.replace("#", "") === path
  )
    return true;
  return false;
}

const DesktopNav = ({
  navItems,
  location,
  openDropdownDesktop,
  setOpenDropdownDesktop,
}) => (
  <ul className="hidden md:flex flex-wrap items-center gap-4 xl:gap-6 font-[Average_Sans]">
    {navItems.map(({ link, path, dropdown }, idx) => {
      const isActive = getIsActive({ path, dropdown }, location);

      if (dropdown) {
        return (
          <li
            key={path}
            className="relative inline-block"
            onMouseEnter={() => setOpenDropdownDesktop(path)}
            onMouseLeave={() => setOpenDropdownDesktop("")}
          >
            {isPageRoute(path) ? (
              <RouterLink
                to={path}
                className={`cursor-pointer text-[15px] lg:text-[16px] text-neutral-50 hover:text-[#b1daee] ${
                  isActive ? "font-bold text-[#b1daee]" : ""
                }`}
              >
                {link}
              </RouterLink>
            ) : (
              <ScrollLink
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className={`cursor-pointer text-[15px] lg:text-[16px] text-neutral-50 hover:text-[#b1daee] ${
                  isActive ? "font-bold text-[#b1daee]" : ""
                }`}
              >
                {link}
              </ScrollLink>
            )}
            <div
              className={`${
                openDropdownDesktop === path ? "block" : "hidden"
              } absolute top-full ${
                idx >= navItems.length - 2 ? "right-0" : "left-0"
              } w-64 bg-white text-[#253b80] rounded-md shadow-lg py-2 z-[100]`}
            >
              {dropdown.map((item) =>
                item.to.startsWith("/") ? (
                  <RouterLink
                    key={item.to}
                    to={item.to}
                    className={`block px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      location.pathname + location.search === item.to
                        ? "font-bold text-[#0a4a8e]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.label}
                  </ScrollLink>
                )
              )}
            </div>
          </li>
        );
      }

      return isPageRoute(path) ? (
        <RouterLink
          to={path}
          key={path}
          className={`cursor-pointer text-[15px] lg:text-[16px] text-neutral-50 hover:text-[#b1daee] ${
            isActive ? "font-bold text-[#b1daee]" : ""
          }`}
        >
          {link}
        </RouterLink>
      ) : (
        <ScrollLink
          to={path}
          spy={true}
          smooth={true}
          offset={-100}
          key={path}
          className={`cursor-pointer text-[15px] lg:text-[16px] text-neutral-50 hover:text-[#b1daee] ${
            isActive ? "font-bold text-[#b1daee]" : ""
          }`}
        >
          {link}
        </ScrollLink>
      );
    })}
  </ul>
);

const MobileNav = ({
  navItems,
  isMenuOpen,
  closeMobileMenu,
  openDropdown,
  setOpenDropdown,
}) => {
  return (
    <div
      className={`${
        isMenuOpen ? "block" : "hidden"
      } md:hidden fixed top-0 left-0 right-0 h-screen pt-24 px-6 pb-6 bg-[#e5e5e5] overflow-y-auto font-[Average_Sans] z-40`}
    >
      <div className="absolute top-3 right-4 z-50">
        <button
          aria-label="Tutup menu"
          onClick={closeMobileMenu}
          className="p-2 bg-transparent text-[#253b80]"
        >
          <FaXmark className="h-5 w-5" />
        </button>
      </div>
      {navItems.map(({ link, path, dropdown }, idx) =>
        dropdown ? (
          <div key={path} className="py-1">
            <button
              onClick={() => setOpenDropdown(openDropdown === path ? "" : path)}
              className="w-full text-left py-3 text-[#253b80] hover:text-gray-700 flex items-center justify-between"
            >
              <span className={idx === 0 ? "font-bold" : ""}>{link}</span>
              <span className="ml-2">{openDropdown === path ? "▾" : "▸"}</span>
            </button>
            <div
              className={`${openDropdown === path ? "block" : "hidden"} pl-4`}
            >
              {dropdown.map((item) =>
                item.to.startsWith("/") ? (
                  <RouterLink
                    key={item.to}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className="block py-2 text-[#253b80] hover:text-gray-700"
                  >
                    {item.label}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    onClick={closeMobileMenu}
                    className="block py-2 text-[#253b80] hover:text-gray-700"
                  >
                    {item.label}
                  </ScrollLink>
                )
              )}
            </div>
          </div>
        ) : isPageRoute(path) ? (
          <RouterLink
            to={path}
            key={path}
            onClick={closeMobileMenu}
            className={`block py-3 text-[#253b80] hover:text-gray-700 ${
              idx === 0 ? "font-bold" : ""
            }`}
          >
            {link}
          </RouterLink>
        ) : (
          <ScrollLink
            to={path}
            spy={true}
            smooth={true}
            offset={-100}
            key={path}
            onClick={closeMobileMenu}
            className={`block py-3 text-[#253b80] hover:text-gray-700 ${
              idx === 0 ? "font-bold" : ""
            }`}
          >
            {link}
          </ScrollLink>
        )
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [openDropdownDesktop, setOpenDropdownDesktop] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-[#253b80] fixed top-0 left-0 right-0 z-50">
      <nav
        className={`py-3 lg:px-14 px-4 transition-colors ${
          isSticky
            ? "bg-[#253b80]/90 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-4 sm:gap-6">
          <RouterLink
            to="/"
            className="text-xl sm:text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="SAKIP PPNS"
              className="w-9 sm:w-10 inline-block"
            />
            <span className="text-[#eef0f1] font-Roboto whitespace-nowrap">
              SAKIP PPNS
            </span>
          </RouterLink>
          <DesktopNav
            navItems={NAV_ITEMS}
            location={location}
            openDropdownDesktop={openDropdownDesktop}
            setOpenDropdownDesktop={setOpenDropdownDesktop}
          />
          <div
            className={`md:hidden text-[#eef0f1] z-50 cursor-pointer ${
              isMenuOpen ? "hidden" : "block"
            }`}
          >
            <button
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              onClick={toggleMenu}
              className="focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-7 w-7" />
              ) : (
                <FaBars className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
        <MobileNav
          navItems={NAV_ITEMS}
          isMenuOpen={isMenuOpen}
          closeMobileMenu={closeMobileMenu}
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";

// Hanya tampil di mobile (smaller than md)
export const OnlyMobile = ({ children }) => (
  <div className="block md:hidden">
    {children}
  </div>
);

// Hanya tampil di tablet (md, tidak lg ke atas)
export const OnlyTablet = ({ children }) => (
  <div className="hidden md:block lg:hidden">
    {children}
  </div>
);

// Hanya tampil di desktop (lg ke atas)
export const OnlyDesktop = ({ children }) => (
  <div className="hidden lg:block">
    {children}
  </div>
);
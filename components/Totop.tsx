'use client'
import React, { ReactNode } from "react";

interface TotopProps {
  component: ReactNode;
}

function Totop({ component }: TotopProps) {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div onClick={scrollToTop} className="cursor-pointer">
      {component}
    </div>
  );
}
export default Totop;

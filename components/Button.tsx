"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Totop from "./Totop";

const arrowDown = "/assets/arrow-down.svg";

interface ButtonProps {
  text: string;
  fsz?: string;
  width?: string;
  to?: string;
  link?: boolean;
  mff?: string;
  arrowdown?: boolean;
  className?: string;
}

function Button({
  text,
  fsz,
  width,
  to,
  link,
  mff,
  arrowdown,
  className,
}: ButtonProps) {
  const fontFamily = mff || "neue-haas-grot-text";
  const fontSize = fsz || "1.4rem";

  return (
    <button
      className={`inline-flex justify-center items-center self-start px-[3rem] h-[4.6rem] md:h-[4.8rem] text-brand-dark text-center whitespace-nowrap bg-[#23B7CA] border-none rounded-[3.4rem] md:rounded-[2.4rem] cursor-pointer transition-all duration-400 ease-in-out hover:bg-[#C9C3DE] ${className || ""}`}
      style={
        {
          "--btn-width": width || "auto",
          "--btn-font": fontFamily,
          "--btn-fsz": fontSize,
          "--btn-fw": 500,
          "--btn-lh": 1.2,
        } as React.CSSProperties
      }
    >
      {link && to ? (
        <Totop
          component={
            <Link
              href={to}
              className="no-underline text-brand-dark font-medium [font-size:var(--btn-fsz)] [font-family:var(--btn-font)]"
            >
              {text}
            </Link>
          }
        />
      ) : (
        text
      )}
      {arrowdown && (
        <Image
          unoptimized
          alt=""
          src={arrowDown}
          width={16}
          height={15}
          decoding="async"
          className="ml-[1rem] w-[1.3rem] text-transparent"
          style={{ width: "auto" }}
          loading="lazy"
        />
      )}
    </button>
  );
}
export default Button;

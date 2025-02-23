"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NextImage from "next/image";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  // State to manage the navbar's visibility
  const [isNavVisible, setIsNavVisibe] = useState(false);

  // Array containing navigation items
  const navItems = [
    { text: "Sobre", href: "/sobre" },
    // { text: "Projectos", href: "/projectos" },
    { text: "Blog", href: "/blog" },
    // { text: "Contactos", href: "/contactos" },
  ];

  const onClickPageLink = (href: string) => {
    router.push(href);

    setIsNavVisibe(false);
  };

  return (
    <div className=" w-full fixed z-50 bg-zinc-950">
      <nav
        className={`flex justify-between items-center h-20 container mx-auto px-4 text-white w-full   `}
      >
        {/* Logo */}
        <h1 className="w-full">
          <Link href="/">
            <NextImage alt="" src="/img/logo.svg" width={287} height={21} />
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex ">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="pt-4 ml-8 hover:text-[--accent] cursor-pointer duration-300"
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div className="md:hidden" onClick={() => setIsNavVisibe(true)}>
          <AiOutlineMenu size={20} />
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={
            isNavVisible
              ? "fixed md:hidden left-0 top-0 w-full h-full ease-in-out duration-500 bg-zinc-950"
              : "ease-in-out w-full duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <div className="flex justify-between items-center h-24 max-w-screen-xl mx-auto px-4 text-white w-full">
            <h1 className="w-full">
              <Link href="/">
                <NextImage alt="" src="img/logo.svg" width={287} height={21} />
              </Link>
            </h1>

            <div onClick={() => setIsNavVisibe(false)}>
              <AiOutlineClose size={20} />
            </div>
          </div>

          <ul>
            {/* Mobile Navigation Items */}
            {navItems.map((item, i) => (
              <Link
                href={item.href}
                key={i}
                onClick={() => onClickPageLink(item.href)}
              >
                <li
                  className={`p-4 duration-300 cursor-pointer uppercase text-4xl font-bold  ${
                    pathname === item.href ? "text-white'" : "text-trail"
                  }`}
                >
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

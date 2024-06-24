"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NextImage from "next/image";
import { usePathname } from "next/navigation";
import { syncopate } from "@/utils/fonts";

export const Header = () => {
  const pathname = usePathname();

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Sobre", href: "/sobre" },
    { id: 2, text: "Musica", href: "/musica" },
    { id: 3, text: "Projectos", href: "/projectos" },
    { id: 4, text: "Eventos", href: "/eventos" },
    { id: 5, text: "Contactos", href: "/contactos" },
  ];

  return (
    <nav
      className={`flex justify-between items-center h-24 max-w-screen-xl mx-auto px-4 text-white w-full z-50`}
    >
      {/* Logo */}
      <h1 className="w-full">
        <Link href="/">
          <NextImage alt="" src="img/logo.svg" width={287} height={21} />
        </Link>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex ">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-[--accent]  m-2 cursor-pointer duration-300"
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden relative">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-full h-full ease-in-out duration-500 bg-zinc-950"
            : "ease-in-out w-full duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full p-4">
          <Link href="/">
            <NextImage alt="" src="img/logo.svg" width={287} height={21} />
          </Link>
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <Link href={item.href} key={item.id}>
            <li
              className={`p-4 duration-300 cursor-pointer uppercase text-6xl font-bold  ${
                syncopate.className
              } ${pathname === item.href ? "text-white'" : "text-trail"}`}
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

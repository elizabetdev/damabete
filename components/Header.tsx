"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NextImage from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { syncopate } from "@/utils/fonts";

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  // State to manage the navbar's visibility
  const [isNavVisible, setIsNavVisibe] = useState(false);

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Sobre", href: "/sobre" },
    { id: 2, text: "Musica", href: "/musica" },
    { id: 3, text: "Projectos", href: "/projectos" },
    { id: 4, text: "Eventos", href: "/eventos" },
    { id: 5, text: "Contactos", href: "/contactos" },
  ];

  const onClickPageLink = (href: string) => {
    router.push(href);

    setIsNavVisibe(false);
  };

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
      <div onClick={() => setIsNavVisibe(true)}>
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
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              onClick={() => onClickPageLink(item.href)}
            >
              <li
                className={`p-4 duration-300 cursor-pointer uppercase text-4xl font-bold  ${
                  syncopate.className
                } ${pathname === item.href ? "text-white'" : "text-trail"}`}
              >
                {item.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

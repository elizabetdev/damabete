"use client";
import Link from "next/link";
import NextImage from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaGithub,
  FaSpotify,
} from "react-icons/fa6";
import { SocialMediaList } from "./SocialMediaList";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center flex flex-col items-center mb-5">
      <Link href="/" className="mb-5">
        <NextImage alt="" src="/img/logo.svg" width={287} height={21} />
      </Link>

      <span className="block text-sm text-center text-white">
        © {currentYear} built with love by Dama Bete. This website is{" "}
        <Link
          href="https://github.com/elizabetdev/damabete"
          className="text-rose-500 hover:underline"
          target="_blank"
        >
          Open Source
        </Link>
        .
      </span>

      <SocialMediaList />
    </div>
  );
};

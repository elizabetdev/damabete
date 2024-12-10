import Link from "next/link";
import {
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaSpotify,
  FaBluesky,
} from "react-icons/fa6";
import { FC } from "react";

export type SocialMediaListProps = {
  iconSize?: number;
};

export const SocialMediaList: FC<SocialMediaListProps> = ({
  iconSize = 24,
}) => {
  return (
    <ul className="flex justify-center mt-5 space-x-6">
      <li>
        <Link
          href="https://www.instagram.com/damabete/"
          className="text-white hover:text-rose-500"
          target="_blank"
        >
          <FaInstagram size={iconSize} />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.tiktok.com/@damabetemusic"
          className="text-white hover:text-rose-500"
          target="_blank"
        >
          <FaTiktok size={iconSize} />
        </Link>
      </li>
      <li>
        <Link
          href="https://open.spotify.com/artist/0cFnYwwUg1OWV2AksuN22j?si=h-DeBOgBQoSzulZql0On3Q"
          className="text-white hover:text-rose-500"
          target="_blank"
        >
          <FaSpotify size={iconSize} />
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/elizabetdev/"
          className="text-white hover:text-rose-500"
          target="_blank"
        >
          <FaGithub size={iconSize} />
        </Link>
      </li>
      <li>
        <Link
          href="https://x.com/elizabet_dev"
          className="text-white hover:text-rose-500"
          target="_blank"
        >
          <FaBluesky size={iconSize} />
        </Link>
      </li>
    </ul>
  );
};

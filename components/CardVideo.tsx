import Image from "next/image";
import { FaPlay, FaX } from "react-icons/fa6";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import React, { Fragment, useState } from "react";

interface CardVideoProps {
  title: string;
  description?: string;
  videoSrc: string;
  overlayImageSrc: string;
}

export const CardVideo: React.FC<CardVideoProps> = ({
  title,
  description,
  videoSrc,
  overlayImageSrc,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="group relative overflow-hidden cursor-pointer flex w-full flex-col items-center justify-center rounded-xl bg-zinc-900 p-4 border border-zinc-800 lg:h-1/2 h-[300px]"
        onClick={() => setIsOpen(true)}
      >
        {/* Imagem de Overlay com Efeito Zoom */}
        <div className="absolute inset-0 transition-transform duration-300 transform group-hover:scale-110">
          <Image
            src={overlayImageSrc}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="opacity-40"
          />
        </div>

        {/* Play Button */}
        <div className="absolute flex flex-col items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-rose-500 rounded-full p-4">
            <FaPlay className="text-white text-2xl" />
          </div>

          <div className="p-4 prose prose-md prose-invert pt-8">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>

        {/* <Ripple /> */}
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-950 bg-opacity-50" />
          </TransitionChild>

          <div className="fixed inset-0 flex items-center justify-center p-0 md:p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full h-screen md:max-w-4xl md:h-screen relative flex items-center justify-center p-0 md:p-4">
                {/* Close Button */}
                <button
                  className="absolute top-2 right-2 p-2 text-zinc-400 hover:text-zinc-300"
                  onClick={() => setIsOpen(false)}
                >
                  <FaX className="text-2xl" />
                </button>

                <iframe
                  src={`${videoSrc}?autoplay=1`}
                  className="w-full h-full md:rounded-2xl aspect-[9/16] max-w-[540px] m-4"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

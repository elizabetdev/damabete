import Image from "next/image";
import { FaPlay, FaX } from "react-icons/fa6";
import {
  Dialog,
  Transition,
  TransitionChild,
  Description,
  DialogPanel,
} from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Ripple } from "./Ripple";

interface CardVideoProps {
  title: string;
  description?: string;
  videoSrc: string;
}

export const CardVideo: React.FC<CardVideoProps> = ({
  title,
  description,
  videoSrc,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="group relative overflow-hidden cursor-pointer flex w-full flex-col items-center justify-center overflow-hidden rounded-xl bg-zinc-900 p-4 border border-zinc-800 h-1/2"
        onClick={() => setIsOpen(true)}
      >
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black bg-opacity-60 rounded-full p-4">
            <FaPlay className="text-white text-2xl" />
          </div>
        </div>

        {/* Title and Description */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
          <h3 className="prose text-white text-xl font-bold">{title}</h3>
          <p className="text-white text-sm mt-2">{description}</p>
        </div>

        <Ripple />
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

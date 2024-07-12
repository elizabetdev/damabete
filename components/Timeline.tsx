"use client";
import NextImage from "next/image";
import { timelineItems, TimelineItemProps } from "@/data/timeline";

export const Timeline = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
      <div className="flex flex-col justify-center divide-y divide-zinc-200">
        <div className="w-full max-w-3xl mx-auto">
          {/* <!-- Vertical Timeline #1 --> */}
          <div className="-my-6">
            {/* <!-- Item --> */}
            {timelineItems.map((item, i) => (
              <div key={i} className="relative pl-8 sm:pl-32 py-6 group">
                {/* <!-- Label --> */}
                {/* <div className="font-medium text-rose-800 mb-1 sm:mb-0">
                  {item.label}
                </div> */}
                {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                <div className="flex flex-col sm:flex-row items-start mb-1">
                  {/* line - doesn't show on last items */}
                  {i + 1 !== timelineItems.length && (
                    <div className="absolute left-2 sm:left-0 h-full px-px bg-zinc-400 sm:ml-[6.5rem] self-start -translate-x-1/2 translate-y-3" />
                  )}

                  {/* dot */}
                  <div className="absolute left-2 sm:left-0 w-2 h-2 bg-zinc-950 border-4 box-content border-zinc-400 rounded-full sm:ml-[6.5rem] -translate-x-1/2 translate-y-1.5" />

                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-rose-100 bg-zinc-800 rounded-full">
                    {item.date}
                  </time>

                  <div className="p-4 h-full bg-zinc-800 rounded-xl">
                    <div className="text-xl font-bold text-rose-500">
                      {item.title}
                    </div>

                    <div className="text-zinc-200 mb-2">{item.content}</div>

                    <div className="rounded-xl overflow-hidden">
                      <NextImage
                        alt=""
                        src={item.image as any}
                        width={700}
                        height={475}
                        quality={90} // Adjust quality setting
                      />
                    </div>
                  </div>
                </div>
                {/* <!-- Content --> */}
              </div>
            ))}
          </div>
          {/* <!-- End: Vertical Timeline #1 --> */}
        </div>
      </div>
    </div>
  );
};

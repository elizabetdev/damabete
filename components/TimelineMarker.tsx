interface TimelineMarkerProps {
  year: string | number;
  title: string;
}

export function TimelineMarker({ year, title }: TimelineMarkerProps) {
  return (
    <div className="absolute h-10 left-4 w-[400px] text-white">
      {/* Black circle */}
      <div className="absolute left-0 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-rose-200 bg-background" />

      {/* Yellow bars container */}
      <div className="relative ml-4 flex flex-col gap-1">
        {/* Top bar with title */}
        <div className="w-fit transform bg-rose-600 px-4 h-8 -top-3 relative rounded-sm ">
          <span className="block text-lg font-medium">{title}</span>
        </div>

        {/* Bottom bar with year */}
        <div className="w-fit transform bg-rose-600 px-4 h-8 rotate-6 relative -top-2 rounded-sm">
          <span className="block text-lg font-medium">{year}</span>
        </div>
      </div>
    </div>
  );
}

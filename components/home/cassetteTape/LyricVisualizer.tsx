import React, { useState, useEffect } from "react";
import { forkThisLyric } from "@/data/forkThisLyric";

interface LyricVisualizerProps {
  currentTime: number;
  ellipseRadius: number;
  duration: number;
}

function LyricVisualizer({
  currentTime,
  ellipseRadius,
  duration,
}: LyricVisualizerProps) {
  const [currentLyric, setCurrentLyric] = useState<string>("");

  useEffect(() => {
    const lyric = findLyricByTime(currentTime, duration);
    setCurrentLyric(lyric);
  }, [currentTime]);

  return (
    <div className="w-full mb-4 text-center">
      {currentTime ? currentTime.toFixed(2) : "0"} sec
      <p
        className={`text-3xl ${
          ellipseRadius < 94 ? "text-white" : "text-purple-800"
        } transition transiation-all duration-200`}
      >
        {currentLyric || "Press play button"}
      </p>
    </div>
  );
}

export default LyricVisualizer;

interface LyricWithEndTime {
  start: number;
  end: number;
  lyric: string;
}

function findLyricByTime(currentTime: number, duration: number): string {
  const lyricsWithEndTime: LyricWithEndTime[] = forkThisLyric.map((item, i) => {
    if (i <= forkThisLyric.length - 2) {
      return {
        start: item.start,
        end: forkThisLyric[i + 1].start,
        lyric: item.lyric,
      };
    } else {
      // last lyric item stays until songs end
      return {
        start: item.start,
        end: duration,
        lyric: item.lyric,
      };
    }
  });

  currentTime = Number(currentTime);

  for (var i = 0; i < forkThisLyric.length; i++) {
    const lyricObj = lyricsWithEndTime[i];

    if (currentTime < lyricObj?.end && currentTime > lyricObj?.start) {
      return lyricObj.lyric;
    }
  }

  return "";
}

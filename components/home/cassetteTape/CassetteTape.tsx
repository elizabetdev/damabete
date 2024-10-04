import React, { useState, useEffect, useRef } from "react";
import { CassetteTapeControls } from "./CassetteTapeControls";
import { CassetteTapeSticker } from "./CassetteTapeSticker";
import { CassetteTapeWheels } from "./CassetteTapeWheels";
import { CassetteTapeBackground } from "./CassetteTapeBackground";
import { CassetteTapeCircles } from "./CassetteTapeCircles";
import LyricVisualizer from "./LyricVisualizer";

type Track = {
  title: string;
  artist: string;
  src: string;
};

const playlist: Track[] = [
  {
    title: "Fork This",
    artist: "Miuki Miu",
    src: "audio/Miuki_Miu-Fork_This_(Penpot).mp3",
  },
  {
    title: "Fork This (Karaoke)",
    artist: "Miuki Miu",
    src: "audio/Miuki_Miu-Fork_This-Karaoke_(Penpot).mp3",
  },
  {
    title: "Fork This (Instrumental)",
    artist: "Miuki Miu",
    src: "audio/Miuki_Miu-Fork_This-Instrumental_(Penpot).mp3",
  },
];

export const CassetteTape: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const initialRadius = 80;
  const [ellipseRadius, setEllipseRadius] = useState<number>(initialRadius);

  const audioRef = useRef<HTMLAudioElement>(null);
  const source = useRef<MediaElementAudioSourceNode | null>(null);
  const analyzer = useRef<AnalyserNode | null>(null);
  const animationController = useRef<number>(0);

  useEffect(() => {
    const handleAudioPlay = () => {
      const audioContext = new AudioContext();
      if (!source.current && audioRef.current) {
        source.current = audioContext.createMediaElementSource(
          audioRef.current
        );
        analyzer.current = audioContext.createAnalyser();
        source.current.connect(analyzer.current);
        analyzer.current.connect(audioContext.destination);
      }
      visualizeData();
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("play", handleAudioPlay);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("play", handleAudioPlay);
      }
      cancelAnimationFrame(animationController.current);
    };
  }, []);

  const visualizeData = () => {
    animationController.current = requestAnimationFrame(visualizeData);

    if (audioRef.current?.paused) {
      cancelAnimationFrame(animationController.current);
      return;
    }

    const songData = new Uint8Array(140);
    analyzer.current?.getByteFrequencyData(songData);

    const average = getAverage(songData);
    const radius = initialRadius + average * 0.1;

    setEllipseRadius(radius);
  };

  const getAverage = (dataArray: Uint8Array) => {
    const sum = dataArray.reduce((acc, value) => acc + value, 0);
    return sum / dataArray.length;
  };

  const playTrack = (trackIndex: number) => {
    setCurrentTrack(trackIndex);
    if (audioRef.current) {
      audioRef.current.src = playlist[trackIndex].src;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        playTrack(currentTrack % playlist.length);
      }
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrack + 1) % playlist.length;
    if (isPlaying) {
      playTrack(nextIndex);
    } else {
      setCurrentTrack(nextIndex);
    }
  };

  const prevTrack = () => {
    const prevIndex = (currentTrack - 1 + playlist.length) % playlist.length;
    if (isPlaying) {
      playTrack(prevIndex);
    } else {
      setCurrentTrack(prevIndex);
    }
  };

  useEffect(() => {
    const handleAudioPlay = () => {
      const audioContext = new AudioContext();
      if (!source.current && audioRef.current) {
        source.current = audioContext.createMediaElementSource(
          audioRef.current
        );
        analyzer.current = audioContext.createAnalyser();
        source.current.connect(analyzer.current);
        analyzer.current.connect(audioContext.destination);
      }
      visualizeData();
    };

    const handleAudioEnd = () => {
      const nextIndex = (currentTrack + 1) % playlist.length;
      playTrack(nextIndex);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("play", handleAudioPlay);
      audioRef.current.addEventListener("ended", handleAudioEnd);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("play", handleAudioPlay);
        audioRef.current.removeEventListener("ended", handleAudioEnd);
      }
      cancelAnimationFrame(animationController.current);
    };
  }, [currentTrack]);

  const currentTime = audioRef.current?.currentTime;
  const duration = audioRef.current?.duration;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col bg-indigo-700 rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="cassette-tape"
          width="655"
          height="442"
          fill="none"
          style={{ WebkitPrintColorAdjust: "exact" }}
          version="1.1"
          viewBox="884 271 655 442"
        >
          <style data-loading="true"></style>
          <CassetteTapeBackground />
          <CassetteTapeCircles
            isPlaying={isPlaying}
            initialRadius={initialRadius}
            ellipseRadius={ellipseRadius}
          />
          <CassetteTapeSticker
            title={`${playlist[currentTrack].artist} - ${playlist[currentTrack].title}`}
          />
          <CassetteTapeWheels isPlaying={isPlaying} />
          <CassetteTapeControls
            nextTrack={nextTrack}
            prevTrack={prevTrack}
            isPlaying={isPlaying}
            togglePlayPause={togglePlayPause}
          />
        </svg>
        <audio ref={audioRef} />
        <LyricVisualizer
          currentTime={currentTime || 0}
          ellipseRadius={ellipseRadius}
          duration={duration || 0}
        />
      </div>

      <article className="prose dark:prose-invert p-4">
        <h2>Cassette Tape</h2>
        <p>Um projecto que </p>
      </article>
    </div>
  );
};

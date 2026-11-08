"use client";

import { useEffect, useState, useRef } from "react";

const words = [
  "flow",
  "mic",
  "rain",
  "stage",
  "beat",
  "freestyle",
  "rhythm",
  "bars",
];

export default function FreestyleGame() {
  const [currentWord, setCurrentWord] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
          const transcript =
            event.results[event.results.length - 1][0].transcript.toLowerCase();
          console.log("Heard:", transcript);
          if (transcript.includes(currentWord)) {
            nextWord();
          }
        };

        recognition.onerror = (event) => {
          console.error("Recognition error:", event.error);
        };

        recognitionRef.current = recognition;
      }
    }
  }, [currentWord]);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setListening(true);
      nextWord();
      audioRef.current?.play();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
      audioRef.current?.pause();
      audioRef.current!.currentTime = 0;
    }
  };

  const nextWord = () => {
    const newWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(newWord);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
      <div className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 text-center shadow-xl">
        <div className="px-6 py-10 text-3xl font-bold capitalize">
          {currentWord || "Press Start to Begin"}
        </div>
      </div>

      <div className="flex gap-4">
        {!listening ? (
          <button
            type="button"
            onClick={startListening}
            className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
          >
            Start Freestyle
          </button>
        ) : (
          <button
            type="button"
            onClick={stopListening}
            className="rounded-md bg-rose-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-rose-500"
          >
            Stop
          </button>
        )}
      </div>

      {/* Batida de fundo */}
      <audio ref={audioRef} loop preload="auto" src="/audio/beat.mp3" />
    </div>
  );
}

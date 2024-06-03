import Image from "next/image";
import { ImageGridMotion } from "@/components/ImageGridMotion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-screen-xl mx-auto">
      <ImageGridMotion />
    </main>
  );
}

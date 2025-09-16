import { Navbar } from "./components/navbar";
import { LetterGrid } from "./components/letterGrid";
import { Keyboard } from "./components/keyboard";

export default function Home() {
  const answer = "HORSE"

  return (
    <div className="flex flex-col absolute top-0 w-screen h-screen">
      <Navbar />
      <LetterGrid />
      <Keyboard />
    </div>
  );
}

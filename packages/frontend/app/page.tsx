import CharacterList from "./components/CharacterList";
import CharacterForm from "./components/CharacterForm";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <CharacterForm />

      <h2 className="text-xl">All Characters</h2>
      <CharacterList />

    </div>
  );
}

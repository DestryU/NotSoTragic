import CharacterList from "./components/CharacterList";
import CharacterForm from "./components/CharacterForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <CharacterForm />

      <Link href={"/view-characters"}>View All Characters</Link>

      {/* 
          Content Creator note about the portfolio:

          - This tool is meant to be a portfolio piece. It features a fully integrated PostgreSQL database for storing characters, automated functions for cleaning itself, and a fully documented git repo located here. 100% of the content used to build this site (including art and 3D models) was created by the owner. If you would like to contact the creator for job opportunites, comission work, or other professional inquiries, you can do so here.

      */}

    </div>
  );
}

import LikeList from "@/components/LikeList";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {  

  return (
    <>
      <header className="w-full mt-10 ml-10">
        <img className="w-[200px]" src="/logo.png" alt="隠れいいね" />
      </header>

      <main className={`flex min-h-screen flex-col p-10 ${inter.className}`}>
        <LikeList />
      </main>
    </>
  );
}

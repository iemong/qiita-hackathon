
import { LikeList } from "@/components/LikeList";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {  

  return (
    <>
      <header className="w-full">
        <img className="mt-2 ml-2 md:mt-10 md:ml-10 w-[200px]" src="/logo.png" alt="かくれいいね" />
      </header>

      <main className={`flex min-h-screen flex-col p-2 pt-10 md:p-10  ${inter.className}`}>
        <LikeList />
      </main>
    </>
  );
}

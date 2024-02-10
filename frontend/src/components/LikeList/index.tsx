import { Like, LikeItem } from "@/components/LikeItem";
import axios from "axios";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const baseURL = 'https://api.like.kunihirotanaka.com/likes';

export default function LikeList() {  
  const dummy:Like[] = [
    {
      url:"https://www.google.com",
      count:1
    },
    {
      url:"https://qiita.com/kunihirotanaka/items/06b4789b60e2e1d5c661",
      count:1000
    },
    {
      url:"https://zenn.dev/barusu/articles/0ae12e18a7f326",
      count:43839
    }
  ]

  const [likes, setLikes] = useState<Like[]>([]);

  useEffect(() => {
    setLikes(dummy);
    
    // axios.get(baseURL).then((response) => {
      // setLikes(response.data);
    // });
  }, []);

  return (
    <ul className="grid grid-cols-1 gap-4 w-full">
      {likes.map((like, index) => (
        <LikeItem key={index} url={like.url} count={like.count} />
      ))}
    </ul>
  );
}

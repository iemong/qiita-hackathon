import { Like, LikeItem } from "@/components/LikeItem";
import axios from "axios";
import { useEffect, useState } from "react";

export const LikeList=() =>{  
  const [likes, setLikes] = useState<Like[]>([]);

  useEffect(() => {
    axios.get('https://backend.iemong.workers.dev/api/articles').then((response) => {
      setLikes(response.data.data);
    });
  }, []);


  return (
    <ul className="grid grid-cols-1 gap-4 w-full">
      {likes.map(like => <LikeItem key={like.url} {...like} />)}
    </ul>
  );
}

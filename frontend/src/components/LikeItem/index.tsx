import React, { SyntheticEvent } from 'react'

export type Like = {
  url: string;
  count: number;
  reaction: string;
  imageUrl:string
  title:string
}

type Props = Like

export const LikeItem = ({url, count, title, imageUrl}:Props)=> {

  const handleimgerror = (e:SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `/default.png`
  }

  if(!imageUrl && !title) return

  return (
    <li className="grid md:grid-cols-[1fr_200px] break-all whitespace-pre-wrap gap-1 md:gap-2">
      <a href={url} target='_blank' className="flex items-center cursor-pointer auto-cols-fr backdrop-blur-2xl rounded-xl border bg-gray-100 hover:bg-gray-300 overflow-hidden">
        <img className="h-[100px]" src={imageUrl}  alt={title} onError={handleimgerror}/>
        <span className='p-3'>{title}</span>
      </a>
      
      <p className="flex items-center justify-center pb-6 pt-8 backdrop-blur-2xl rounded-xl border bg-gray-100 p-4">
        <span className="text-2xl mr-1">{count}</span>
        <img className="w-[60px]" src="/logo.png" alt="隠れいいね" />
      </p>
    </li>
  )
}


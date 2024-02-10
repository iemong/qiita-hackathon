import React from 'react'

export type Like ={
  url: string;
  count: number;
}

type Props = Like

export const LikeItem = ({url, count}:Props)=> {
  return (
    <li className="grid grid-cols-[1fr_200px] break-words whitespace-pre-wrap gap-2">
      <a href={url} target='_blank' className=" cursor-pointer auto-cols-fr justify-center pb-6 pt-8 backdrop-blur-2xl  static w-auto  rounded-xl border bg-gray-100 p-4 hover:bg-gray-300">
        {url}
      </a>
      
      <p className="flex items-center justify-center pb-6 pt-8 backdrop-blur-2xl  static w-auto  rounded-xl border bg-gray-100 p-4">
        <span className="text-2xl mr-1">{count}</span>
        <img className="w-[60px]" src="/logo.png" alt="隠れいいね" />
      </p>
    </li>
  )
}


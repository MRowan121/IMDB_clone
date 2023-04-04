import Image from "next/legacy/image";
import React from "react";
import { FaRegThumbsUp } from 'react-icons/fa'

interface ResultObj {
    adult: boolean,
    backdrop_path: string,
    first_air_date?: string,
    genre_ids: number[],
    id: number,
    media_type: string,
    name?: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean
    vote_average: number,
    vote_count: number
  }

type MyProps = {
    result: ResultObj
}

const Card: React.FC<MyProps> = ({ result }) => {
    const base_URL = "https://image.tmdb.org/t/p/original"
    return (
        <div className="p-3 cursor-pointer hover:text-white active:text-red-400 xl:hover:scale-105 transition-transform duration-200">
            <Image 
                src={base_URL + result['backdrop_path']}
                alt={result.title}
                layout="responsive"
                width={200}
                height={100}
            />
            <div className="p-2">
                <p className="truncate text-lg">
                    {result.overview}
                </p>
                <h2 className="text-lg font-bold">
                    {result.title || result.name}
                </h2>
                <p className="flex items-center">
                    {result.release_date || result.first_air_date}
                    <FaRegThumbsUp className="text-xl ml-3 mr-1" />
                    {result.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Card
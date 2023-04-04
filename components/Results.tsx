import React from "react";
import Card from "./Card";

interface ResultObj {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    media_type: string,
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
    results: ResultObj[]
}

const Results: React.FC<MyProps> = ({ results }) => {
    return (
        <div className="bg-gray-700 text-gray-200 select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {results.map((result) => {
                return(
                    <Card key={result.id} result={result} />
                )
            })}
        </div>
    )
}

export default Results
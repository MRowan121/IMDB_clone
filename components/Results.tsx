import React from "react";

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
        <div>
            {results.map((result) => {
                return(
                    <h1>{result.title}</h1>
                )
            })}
        </div>
    )
}

export default Results
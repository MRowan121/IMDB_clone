const API_KEY = process.env.REACT_APP_API_KEY

export interface IRequest {
    [name: string]: {
      title: string;
      url: string;
    };
  }

const data: IRequest = {
    fetchTrending:{
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    }
}

export default data
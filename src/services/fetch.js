import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTczNTcyZjE1ODg5MWVhYjQyNGRjNWRiZWJkMzZkNSIsInN1YiI6IjY1MDAyZTkxZTBjYTdmMDEyZWI4YWJiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0g2BMccpZsd4oEkzV_fQoGhTdOZ2b56TeBpr0S8e-I",
  },
};

const getTopRated = async () => {
  const url = `
    ${BASE_URL}top_rated?language=en-US&page=1`;

  const res = await axios.get(url, options);
  //   console.log(res.data);
  return res.data;
};

const getMovieDetail = async (movie_id) => {
  const url = `${BASE_URL}${movie_id}?language=en-US`;
  const res = await axios.get(url, options);

  return res.data;
};

const getSearch = async (title) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
  const res = await axios.get(url, options);

  return res.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTopRated, getMovieDetail, getSearch };

/*
//search
fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
*/

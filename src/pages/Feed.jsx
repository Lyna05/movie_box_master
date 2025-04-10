import { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import MovieFeed from '../components/MovieFeed';
import Footer from '../components/Footer';
import fetchService from '../services/fetch';

const Feed = ({ handleSearch, handleSearchChange }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { results } = await fetchService.getTopRated();
      setMovies(results);
    };
    getMovies();
  }, []);

  const firstTen = movies.slice(0, 10);
  const randIndex = Math.floor(Math.random() * firstTen.length);

  // console.log(firstTen);

  return (
    <section className="flex flex-col min-h-screen gap-8 overflow-x-hidden">
      <Hero
        movie={firstTen[randIndex]}
        handleSearch={handleSearch}
        handleSearchChange={handleSearchChange}
      />
      <MovieFeed movies={firstTen} />
      <Footer />
    </section>
  );
};

export default Feed;

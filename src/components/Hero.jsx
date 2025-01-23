import { Link } from 'react-router-dom';

import Loader from '../components/Loaders';

import NavBar from './Navbar';
import imdb from '../assets/imdb.svg';
import tomato from '../assets/tomato.svg';
import play from '../assets/Play.svg';

const Hero = ({ movie, handleSearch, handleSearchChange }) => {
  if (!movie)
    return (
      <div className="flex flex-col min-h-[45vh] md:min-h-screen justify-center items-center">
        <Loader />
      </div>
    );
  return (
    <div className=" h-[45vh] w-full bg-cover md:h-[85vh] relative">
      <img
        alt="backdrop"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="absolute top-0 left-0 h-full w-full -z-10 brightness-50 "
      />

      <div className="flex flex-col gap-4 md:gap-16 px-6 py-4 md:px-16 md:py-6 z-50">
        <NavBar
          handleSearch={handleSearch}
          handleSearchChange={handleSearchChange}
        />
        <div className="flex flex-col text-white w-[70%] md:w-[55%] lg:w-[45%] md:px-10 gap-2 md:gap-6">
          <div>
            <h3 className="font-bold text-xl md:text-5xl">{movie.title}</h3>
          </div>
          <div>
            <div className="flex items-center justify-start gap-7 md:gap-10">
              <div className="flex gap-1 md:gap-3">
                <img alt="imdb" src={imdb} className="w-fit h-4 md:h-6" />
                <p className="opacity-85 text-xs md:text-sm">
                  {movie.vote_average * 10}/100
                </p>
              </div>
              <div className="flex gap-1 md:gap-3">
                <img alt="tomato" src={tomato} className="w-fit h-4 md:h-6" />
                <p className="opacity-85 text-xs md:text-sm">
                  {Math.round(movie.popularity)}%
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[0.6rem] md:text-sm">{movie.overview}</p>
          </div>
        </div>
        <Link to={`/movies/${movie.id}`}>
          <div className="flex items-center justify-center md:justify-start gap-2 bg-red-700 md:ml-8 md:w-[12rem] md:-mt-8 md:py-2 px-3 py-1 -mt-1 rounded-lg hover:bg-red-600">
            <img alt="play" src={play} />
            <p className="text-white text-xs md:text-sm">WATCH TRAILER</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

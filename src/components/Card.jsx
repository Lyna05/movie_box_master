import { useState } from 'react';
import { Link } from 'react-router-dom';

import { splitDate, truncate } from '../services/utils';

import demo from '../assets/demo.jpg';
import imdb from '../assets/imdb.svg';
import tomato from '../assets/tomato.svg';
import heart from '../assets/Favorite.svg';
import heart2 from '../assets/fav.svg';

const Card = ({ movie }) => {
  const [like, setLike] = useState(false);

  return (
    <div data-testid="movie-card" className="flex flex-col gap-4">
      <div className="border h-[15rem] w-[11rem] md:h-[18rem] md:w-[14rem] relative bg-cover hover:shadow-xl ">
        <Link to={`/movies/${movie.id}`}>
          <img
            data-testid="movie-poster"
            alt="poster"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : demo
            }
            className="absolute h-full w-full brightness-75 cursor-pointer"
          />
        </Link>
        <div className="flex justify-between items-center z-10">
          <p className="mt-4 ml-3 font-semibold text-[0.55rem] md:text-xs text-black py-[4px] px-[8px] rounded-xl bg-zinc-400 opacity-90 text-center cursor-pointer">
            MOVIES
          </p>
          <img
            alt="favorite"
            src={like ? heart2 : heart}
            className="mt-4 mr-3 h-6 w-6 md:h-8 md:w-8 cursor-pointer z-50"
            onClick={() => setLike(!like)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-[0.65rem] md:text-sm text-gray-400">
          USA,{' '}
          <span data-testid="movie-release-date">
            {splitDate(movie.release_date)}
          </span>
        </p>
        <p
          data-testid="movie-title"
          className="font-bold text-black text-sm md:text-base"
        >
          {truncate(movie.title, 18)}
        </p>
        <div className="flex items-center justify-between gap-3 md:gap-5">
          <div className="flex gap-[8px]">
            <img alt="imdb" src={imdb} className="h-4 w-fit" />
            <p className="text-[0.7rem] md:text-[0.8rem]">
              {Math.round(movie.vote_average * 100) / 10}/100
            </p>
          </div>
          <div className="flex gap-[8px]">
            <img alt="rotten-tomatoes" src={tomato} className="h-4 w-fit" />
            <p className="text-[0.7rem] md:text-[0.8rem]">
              {Math.round(movie.popularity)}%
            </p>
          </div>
        </div>
        <p className="text-[0.65rem] md:text-sm text-gray-400">
          Action, Adventure
        </p>
      </div>
    </div>
  );
};

export default Card;

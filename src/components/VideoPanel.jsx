import { Link } from 'react-router-dom';

import { splitDate, truncate } from '../services/utils';
import Loaders from './Loaders';

import demo from '../assets/static.jpg';
import play from '../assets/Play.svg';
import list from '../assets/List.svg';
import ticket from '../assets/Two Tickets.svg';

const VideoPanel = ({ movie }) => {
  if (!movie)
    return (
      <div className="flex flex-col w-full min-h-[45vh] md:min-h-screen justify-center items-center">
        <Loaders />
      </div>
    );
  return (
    <div className="flex flex-col w-[76%] md:w-[82%] mx-4 my-4">
      <div className="h-[40vh] md:h-[57vh] overflow-hidden w-full bg-cover rounded-lg mb-3 relative">
        <img
          alt="backdrop"
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : demo
          }
          className="h-full w-full absolute top-0 left-0 -z-10"
        />
        <Link className="w-full h-full flex flex-col items-center justify-center">
          <img alt="play" src={play} className="h-14 opacity-90" />
          <p className="text-xs md:text-sm font-semibold py-1 text-white">
            Watch Trailer
          </p>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-1 md:gap-4 text-[0.6rem] md:text-sm font-semibold mb-3">
            <p data-testid="movie-title">{truncate(movie.title, 40)}</p>
            <span className="font-bold text-[0.65rem] pb-1">.</span>
            <p data-testid="movie-release-date">
              {splitDate(movie.release_date)}
            </p>
            <span className="font-bold text-[0.65rem] pb-1">.</span>
            PG-13
            <span className="font-bold text-[0.65rem] pb-1">.</span>
            <p data-testid="movie-runtime">{movie.runtime}mins</p>
            <p className="text-bold text-red-700 border border-red-200 md:px-2 px-[0.35rem] py-1 rounded-xl">
              {movie.genres[0].name || 'Action'}
            </p>
            <p className="text-bold text-red-700 border border-red-200 md:px-2 px-[0.35rem] py-1 rounded-xl">
              {movie.genres[1].name || 'Action'}
            </p>
          </div>
          <div className="hidden md:flex -mt-2 gap-2 text-sm font-semibold">
            <p>
              ⭐{' '}
              <span className="text-gray-400">
                {movie.vote_average
                  ? Math.round(movie.vote_average * 10) / 10
                  : 0}
              </span>
            </p>
            <p>
              | {movie.vote_count ? Math.round(movie.vote_count / 1000) : 0}k
            </p>
          </div>
        </div>

        <div className="md:flex md:justify-between">
          <div className="text-xs md:text-[0.75rem] md:w-[65%] text-black">
            <p data-testid="movie-overview" className="mb-4">
              {truncate(movie.overview, 350)}
            </p>
            <p className="mb-2">
              Director: <span className=" text-red-700">Joseph Kosinski</span>
            </p>
            <p className="mb-2">
              Writers:{' '}
              <span className=" text-red-700">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </p>
            <p className="mb-4">
              Stars:{' '}
              <span className=" text-red-700">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>

            <div>
              <p className="border rounded-lg py-2">
                <span className="text-white bg-red-600 py-2 px-2 rounded-lg">
                  Top Rated movie #65
                </span>
                <span className="pl-2 py-2">Awards 9 nominations</span>{' '}
              </p>
            </div>
            <div className="md:hidden w-[50%] mt-3 text-[0.65rem]">
              <Link className="flex justify-center items-center gap-2 text-white bg-red-600 py-1 px-2 rounded-lg w-full mb-2">
                <img alt="ticket" src={ticket} className="h-5 w-5" />
                <p>See Showtimes</p>
              </Link>

              <Link className="flex justify-center items-center gap-2 text-black bg-red-200  py-1 px-2 rounded-lg w-full border border-red-700">
                <img alt="ticket" src={list} className="h-5 w-5" />
                <p>More watch options</p>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center text-right w-[30%] text-xs">
            <Link className="flex justify-center items-center gap-2 text-white bg-red-600 py-1 px-2 rounded-lg w-full mb-2">
              <img alt="ticket" src={ticket} className="h-6 w-6" />
              <p>See Showtimes</p>
            </Link>

            <Link className="flex justify-center items-center gap-2 text-black bg-red-200  pt-1 px-2 rounded-lg w-full border border-red-700 mb-2">
              <img alt="ticket" src={list} className="h-6 w-6" />
              <p>More watch options</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPanel;

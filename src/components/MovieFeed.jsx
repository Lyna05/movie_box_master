import { Link } from 'react-router-dom';
import Card from './Card';
import Loaders from './Loaders';

const MovieFeed = ({ movies }) => {
  if (!movies)
    return (
      <div className="flex flex-col min-h-[45vh] md:min-h-screen justify-center items-center">
        <Loaders />
      </div>
    );
  return (
    <section>
      <div className="flex items-center justify-between px-7 md:px-20 mb-6">
        <div>
          <h4 className="text-black font-bold md:text-xl">Featured Movie</h4>
        </div>
        <div>
          <h4 className="text-red-600 hover:text-red-500 text-sm md:text-base">
            <Link to={'/'}>
              See more <span className="ml-[6px]">{'>'}</span>
            </Link>
          </h4>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-16 px-7 md:px-20">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieFeed;

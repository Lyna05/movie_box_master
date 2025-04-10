// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Card from '../components/Card';
import Loaders from '../components/Loaders';
// import { useEffect } from 'react';

const SearchDetails = ({ movies }) => {
  const [videos] = useState(movies);
  // const navigate = useNavigate();

  if (!movies)
    return (
      <div className="flex flex-col min-h-screen justify-center items-center">
        <Loaders />
      </div>
    );

  return (
    <section className="py-8">
      <div className="flex flex-wrap items-center justify-between gap-16 px-7 md:px-20">
        {videos.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default SearchDetails;

import { useEffect, useState } from 'react';

import fetchService from '../services/fetch';
import Sidebar from '../components/Sidebar';
import VideoPanel from '../components/VideoPanel';
import { useParams } from 'react-router';

const CardDetails = () => {
  const [movieDetail, setMovieDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const results = await fetchService.getMovieDetail(id);
      setMovieDetail(results);
    };
    getMovieDetails();
  }, [id]);

  return (
    <section className="flex justify-between">
      <Sidebar />
      <VideoPanel movie={movieDetail} />
    </section>
  );
};

export default CardDetails;

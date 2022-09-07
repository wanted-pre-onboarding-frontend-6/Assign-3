import React from 'react';
import { useParams } from 'react-router-dom';
import useGetMovieDetail from 'queries/movieDetail/MovieById';

const MovieDetail = () => {
  const { movieId } = useParams();
  const { data, isLoading } = useGetMovieDetail(movieId as string);

  console.log(data);

  if (isLoading) {
    return <h1>로딩중</h1>;
  }

  return <div>MovieDetail</div>;
};

export default MovieDetail;

const Base_src = 'https://image.tmdb.org/t/p/w500';

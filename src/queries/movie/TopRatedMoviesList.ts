import { useQuery } from 'react-query';
import MovieApi from 'apis/MovieApi';

const useTopRatedMoviesList = () => {
  return useQuery(
    ['TopRatedMoviesList'],
    () => MovieApi.getTopRatedMovies({ params: { language: 'ko' } }),
    {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 30,
      onError: (err: any) => {
        throw new Error(err);
      },
    },
  );
};

export default useTopRatedMoviesList;

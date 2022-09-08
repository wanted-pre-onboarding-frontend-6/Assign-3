import { useQuery } from 'react-query';
import MovieApi from 'apis/MovieApi';

const useUpcomingMoviesList = () => {
  return useQuery(
    ['UpcomingMoviesList'],
    () => MovieApi.getUpcomingMovies({ params: { language: 'ko' } }),
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

export default useUpcomingMoviesList;

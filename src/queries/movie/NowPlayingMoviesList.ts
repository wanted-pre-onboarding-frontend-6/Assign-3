import { useQuery } from 'react-query';
import MovieApi from 'apis/MovieApi';

const useNowPlayingMoviesList = () => {
  return useQuery(
    ['NowPlayingMoviesList'],
    () => MovieApi.getNowPlayingMovies({ params: { language: 'ko' } }),
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

export default useNowPlayingMoviesList;

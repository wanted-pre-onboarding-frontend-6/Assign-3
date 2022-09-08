import MovieApi from 'apis/MovieApi';
import { useInfiniteQuery } from 'react-query';

const useNowPlayingMoviesList = () => {
  return useInfiniteQuery(
    ['NowPlayingMoviesList'],
    ({ pageParam = 1 }) => MovieApi.getNowPlayingMovies({ params: { page: pageParam } }),
    {
      getNextPageParam: lastPage => {
        return lastPage.data.page + 1;
      },
      retry: false,
      refetchOnWindowFocus: false,
      onError: (err: any) => {
        throw new Error(err);
      },
    },
  );
};

export default useNowPlayingMoviesList;

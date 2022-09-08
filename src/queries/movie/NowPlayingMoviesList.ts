import { useQuery } from 'react-query';
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
      cacheTime: 1000 * 60 * 30,
      onError: (err: any) => {
        throw new Error(err);
      },
    },
  );
};

export default useNowPlayingMoviesList;

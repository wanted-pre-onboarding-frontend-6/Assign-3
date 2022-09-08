import { useInfiniteQuery } from 'react-query';
import MovieApi from 'apis/MovieApi';

const usePopularMoviesList = () => {
  return useInfiniteQuery(
    ['popularMovieList'],
    ({ pageParam = 1 }) => MovieApi.getPopularMovies({ params: { page: pageParam } }),
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

export default usePopularMoviesList;

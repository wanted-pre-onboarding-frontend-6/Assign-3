import { useInfiniteQuery, useQuery } from 'react-query';
import MovieApi from 'apis/MovieApi';

const useTopRatedMoviesList = () => {
  return useInfiniteQuery(
    ['TopRatedMoviesList'],
    ({ pageParam = 1 }) => MovieApi.getTopRatedMovies({ params: { page: pageParam } }),
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

export default useTopRatedMoviesList;

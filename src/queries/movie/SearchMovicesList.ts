import { useInfiniteQuery } from 'react-query';
import MovieApi from 'apis/MovieApi';

const useSearchMoviesList = (qs: any) => {
  const { query } = qs;
  return useInfiniteQuery(
    ['searchMovieList', query],
    ({ pageParam = 1 }) => MovieApi.getSerachMovies({ params: { page: pageParam, query } }),
    {
      getNextPageParam: lastPage => {
        return lastPage.data.page + 1;
      },
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 30,
    },
  );
};

export default useSearchMoviesList;

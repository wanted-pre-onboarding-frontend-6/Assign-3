import { useInfiniteQuery } from 'react-query';
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
      onError: err => {
        alert(err);
      },
      onSuccess: () => {
        console.log('데이터 가져오기 성공');
      },
    },
  );
};

export default useTopRatedMoviesList;

import { useQuery } from 'react-query';
import MovieApi from 'apis/MovieApi';

const usePopularMoviesList = (page: number) => {
  return useQuery(
    ['popularMovieList', page],
    () => MovieApi.getPopularMovies({ params: { language: 'ko', page } }),
    {
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

export default usePopularMoviesList;

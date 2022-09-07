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
      onError: err => {
        alert(err);
      },
      onSuccess: () => {
        console.log('데이터 가져오기 성공');
      },
    },
  );
};

export default useUpcomingMoviesList;

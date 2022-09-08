import { useQuery } from 'react-query';
import MovieApi from 'apis/MovieApi';

const useMovieById = (id: string) => {
  return useQuery(
    ['MovieById'],
    () => MovieApi.getMovieById({ movie_id: id, params: { language: 'ko' } }),
    {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 30,
      staleTime: 1000 * 60 * 30,
      onError: (err: any) => {
        throw new Error(err);
      },
    },
  );
};
export default useMovieById;

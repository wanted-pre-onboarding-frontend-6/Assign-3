import { useQuery } from 'react-query';
import MovieDetail from 'apis/MovieDetails';

const useGetMovieDetailsQuery = (id: string) => {
  return useQuery(
    ['Detail'],
    () => MovieDetail.getMovieDetails({ movie_id: id, params: { language: 'ko' } }),
    {
      retry: false,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 30,
      staleTime: 1000 * 60 * 30,
    },
  );
};

export default useGetMovieDetailsQuery;

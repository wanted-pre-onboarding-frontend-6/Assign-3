import { useQuery } from 'react-query';
import MovieDetail from 'apis/MovieDetails';

const useGetMovieDetailsQuery = (id: string) => {
  return useQuery(
    ['Detail'],
    () => MovieDetail.getMovieDetails({ movie_id: id, params: { language: 'ko' } }),
    {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: !!id,
    },
  );
};

export default useGetMovieDetailsQuery;

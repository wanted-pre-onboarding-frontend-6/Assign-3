import Api from './Base';

class MovieDetails extends Api {
  getMovieDetails = async ({ movie_id, params }: ParamsString) => {
    const { data } = await this.get(`/movie/${movie_id}`, { params });
    return data;
  };
}
export default new MovieDetails();

interface ParamsString {
  params: string | object;
  movie_id?: string;
}

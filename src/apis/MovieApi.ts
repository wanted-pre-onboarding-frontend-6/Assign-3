import Api from './Base';

interface ParamsString {
  params: string | object;
  movie_id?: string;
}

class MovieApi extends Api {
  public async getPopularMovies({ params }: ParamsString) {
    return await this.get('/movie/popular', params);
  }

  public async getSerachMovies({ params }: ParamsString) {
    return await this.get('/search/movie', params);
  }

  public async getNowPlayingMovies({ params }: ParamsString) {
    return await this.get('/now_playing', params);
  }

  public async getUpcomingMovies({ params }: ParamsString) {
    return await this.get('/upcoming', params);
  }

  public async getTopRatedMovies({ params }: ParamsString) {
    return await this.get(`/top_rated`, params);
  }
<<<<<<< HEAD
=======

  public async getMovieById({ movie_id, params }: ParamsString) {
    return await this.get('/${movie_id}', params);
  }
>>>>>>> main
}
export default new MovieApi();

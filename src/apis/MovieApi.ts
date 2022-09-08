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
    return await this.get('/movie/now_playing', params);
  }

  public async getUpcomingMovies({ params }: ParamsString) {
    return await this.get('/movie/upcoming', params);
  }

  public async getTopRatedMovies({ params }: ParamsString) {
    return await this.get(`/movie/top_rated`, params);
  }
}
export default new MovieApi();

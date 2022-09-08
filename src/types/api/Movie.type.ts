// object Type
type MovieDates = {
  maximum?: string;
  minimum?: string;
};

type MovieGanre = {
  id?: number;
  name?: number;
};

type MovieCompany = {
  name?: string;
  id?: number;
  logo_path?: string | null;
  origin_country?: string;
};

type MovieContry = {
  iso_3166_1?: string;
  name?: string;
};

type MovieLanguage = {
  iso_639_1?: string;
  name?: string;
};

type GetVedioType = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

// get movie Type
export type MovieResult = {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: Array<number>;
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: string;
};

// get movie Type
export interface GetMovieType {
  page?: number;
  results?: Array<MovieResult>;
  dates?: MovieDates;
  total_results?: number;
  total_pages?: number;
}

// get moviedetail Type
export interface GetMovieDetailType {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: null | object;
  budget?: number;
  genres?: MovieGanre;
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: MovieCompany;
  production_countries?: MovieContry;
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: MovieLanguage;
  status?: string;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  videos?: Array<GetVedioType>;
}

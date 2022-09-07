// // import { useQuery } from 'react-query';
// // import { useSetRecoilState } from 'recoil';
// // import { IsAuth } from 'src/atoms';
// // import adApi from '../../api/ad';
// // import errorHandler from '../common';

// import MovieApi from "apis/MoveApi";

// export default function adListQuery(page) {
// //   const setIsAuth = useSetRecoilState(IsAuth);
//   return useQuery(['adList', page]], () => MovieApi.getPopularMovies({parmas:{page}}), {
//     retry: false,
//     refetchOnWindowFocus: false,
//     cacheTime: 1000 * 60 * 30,
//     onError: err => {
//       errorHandler(err, setIsAuth);
//     },
//     onSuccess: data => {},aq
//   });
// }

export const movieDetail = {};

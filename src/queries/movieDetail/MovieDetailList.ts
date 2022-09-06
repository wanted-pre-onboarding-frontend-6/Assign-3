// import { useQuery } from 'react-query';
// import { useSetRecoilState } from 'recoil';
// import { IsAuth } from 'src/atoms';
// import adApi from '../../api/ad';
// import errorHandler from '../common';

// export default function adListQuery() {
//   const setIsAuth = useSetRecoilState(IsAuth);
//   return useQuery(['adList'], () => adApi.getAdList(), {
//     retry: false,
//     refetchOnWindowFocus: false,
//     cacheTime: 1000 * 60 * 30,
//     onError: err => {
//       errorHandler(err, setIsAuth);
//     },
//     onSuccess: data => {},
//   });
// }
export const movieDetail = {};

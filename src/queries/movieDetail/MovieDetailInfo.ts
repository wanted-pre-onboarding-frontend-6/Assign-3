// import { useQueries } from 'react-query';
// import { useSetRecoilState } from 'recoil';
// import { IsAuth } from 'src/atoms';
// import adApi from '../../api/ad';
// import errorHandler from '../common';

// export default function adScheduleQuery(
//   data: {
//     type: string;
//     positionIndex?: number;
//     category?: string;
//   }[]
// ) {
//   const setIsAuth = useSetRecoilState(IsAuth);
//   return useQueries(
//     // 인자로 받는 배열 내 쿼리스트링을 기준으로 Map함수를 사용하여  각각에 해당 하는 데이터에 대하여 Promise.all 과 같은 기능을 수행하는 쿼리를 보내는 로직입니다!
//     data.map((el) => {
//       return {
//         queryKey: ['adSchedule', el.type, el.positionIndex, el.category],
//         queryFn: () =>
//           adApi.getSchedule({
//             type: el.type,
//             positionIndex: el.positionIndex,
//             category: el.category
//           }),
//         retry: false,
//         refetchOnWindowFocus: false,
//         cacheTime: 0, // 데이터 패칭 시점을 배너를 클릭하는 시점을 기준으로 하였기에 cacheTime과 staleTime을 0으로 설정하였습니다.
//         staleTime: 0,
//         enabled: !!el.type,
//         onError: (err) => {
//           errorHandler(err, setIsAuth);
//         },
//         onSuccess: (data) => {},
//         select: (data) => {
//           return { ...data.data, isSuccess: true };
//         } // 데이터 parsing
//       };
//     })
//   );
// }

export const movieDetail = {};

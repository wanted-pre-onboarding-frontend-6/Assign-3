import { useEffect } from 'react';
import usePopularMoviesList from 'queries/movie/PopularMoviesList';
import HomeContent from './content/HoneContent';
import HomeSideBar from './sidebar/HomeSidebar';

const HomeMoveList = () => {
  const { data, isLoading } = usePopularMoviesList(1);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <HomeSideBar />
      <HomeContent />
    </>
  );
};
export default HomeMoveList;

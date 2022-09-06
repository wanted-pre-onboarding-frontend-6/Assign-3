import { useEffect, useCallback, useRef, useState } from 'react';

const useObServe = (observTarget: { current: any }, isLoading = false): number => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [page, setPage] = useState<number>(0);

  const obsHandler = useCallback((entries: any[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, []);

  useEffect(() => {
    if (observTarget.current && !isLoading) {
      observer.current = new IntersectionObserver(obsHandler, {
        rootMargin: '80px',
        threshold: 1,
      });
      observer.current.observe(observTarget.current);
    }
    return () => {
      if (!isLoading) {
        observTarget.current && observer.current?.unobserve(observTarget.current);
      }
    };
  }, [page, isLoading]);

  return page;
};
export default useObServe;

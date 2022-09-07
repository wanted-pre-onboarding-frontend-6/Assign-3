import Spinner from 'components/spinner/Spinner';
import React, { Suspense } from 'react';

function Routing() {
  return (
    <>
      <Suspense fallback={<Spinner />}></Suspense>
    </>
  );
}

export default Routing;

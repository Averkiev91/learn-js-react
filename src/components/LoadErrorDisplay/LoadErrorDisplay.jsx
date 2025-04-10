import React from 'react';
import Loader from '../Loader/Loader';
import DownloadError from '../DownloadError/DownloadError';

const LoadErrorDisplay = ({
  data,
  isLoading,
  isFetching,
  isError,
  requestStatus,
  children,
}) => {
  if (requestStatus === "pending" || isLoading || isFetching) {
    return (
      <main>
        <Loader />
      </main>
    );
  } else if (requestStatus === "rejected" || isError) {
    return (
      <main>
        <DownloadError />
      </main>
    );
  } else if (data) {
    return children;
  } else {
    return null;
  }
};

export default LoadErrorDisplay;
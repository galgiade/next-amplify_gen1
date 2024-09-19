import React from 'react';
import LoadingSkeleton from './LoadingSkeleton';


const LoadingComponent = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
      <div>
        <LoadingSkeleton height="h-4" width="w-24" />
      </div>
    </div>
  );
};

export default LoadingComponent;


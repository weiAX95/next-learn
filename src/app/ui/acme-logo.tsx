import React from 'react';

const AcmeLogo = () => {
  return (
    <div className="flex items-center leading-none">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="h-8 w-8"
      >
        <rect width="32" height="32" rx="4" fill="currentColor" />
        <path
          d="M8 8h16v16H8V8z"
          fill="white"
          fillOpacity={0.2}
        />
      </svg>
      <span className="ml-2 text-xl font-bold">Acme Inc</span>
    </div>
  );
};

export default AcmeLogo;
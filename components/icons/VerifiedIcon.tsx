
import React from 'react';

export const VerifiedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 15A7 7 0 108 1a7 7 0 000 14z"
      fill="#3B82F6"
    ></path>
    <path
      d="M5.5 8.5l2 2 3.5-4"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

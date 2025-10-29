
import React from 'react';

export const StatusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
    >
    <circle cx="12" cy="12" r="2.5"></circle>
    <path d="M19.07 4.93a10 10 0 00-14.14 0"></path>
    <path d="M4.93 19.07a10 10 0 0014.14 0"></path>
  </svg>
);

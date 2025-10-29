
import React from 'react';

export const FilterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
<svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    <path 
        d="M5 12V4M19 20v-4M5 20v-4M19 12V4M12 7V4M12 20v-9" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
    />
    <path 
        d="M3 12h4M17 16h4M10 11h4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
    />
</svg>
);

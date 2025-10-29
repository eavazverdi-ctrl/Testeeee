
import React from 'react';

export const ChatBubbleIcon: React.FC<React.SVGProps<SVGSVGElement> & {active?: string}> = ({ active, ...props }) => {
  const isFilled = active === "true";
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill={isFilled ? "white" : "none"} 
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M11.8333 3C16.3342 3 20 6.13401 20 9.83333C20 11.5317 19.3093 13.0911 18.1667 14.3333C18.6667 15.8333 20 16.8333 20 16.8333C18.1667 16.5 17.0833 15.6667 16.4167 14.9167C14.9936 15.6277 13.4697 16 11.8333 16C7.33238 16 3.66667 12.866 3.66667 9.16667C3.66667 5.46735 7.33238 2.33333 11.8333 3Z" stroke={isFilled ? "white" : "#868686"} />
      <path d="M7.5 9.5H7.509" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 9.5H11.509" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 9.5H15.509" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};


import { ReactNode } from "react";

interface DottedBorderContainerProps {
  children: ReactNode;
  className?: string;
}

const SideDottedBorderContainer = ({ children, className = "" }: DottedBorderContainerProps) => (

  <div className={`relative ${className}`}>



    
    <div 
      className="absolute left-0 top-0 bottom-0 w-px z-10"
      style={{
        background: `repeating-linear-gradient(
          to bottom,
          #9ca3af 0px,
          #9ca3af 4px,
          transparent 4px,
          transparent 8px
        )`
      }}
    ></div>
    
    <div 
      className="absolute right-0 top-0 bottom-0 w-px z-10"
      style={{
        background: `repeating-linear-gradient(
          to bottom,
          #9ca3af 0px,
          #9ca3af 4px,
          transparent 4px,
          transparent 8px
        )`
      }}
    ></div>

    {children}
  </div>
);

export default SideDottedBorderContainer;
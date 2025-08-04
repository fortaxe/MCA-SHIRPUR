
import { ReactNode } from "react";

interface DottedBorderContainerProps {
  children: ReactNode;
  className?: string;
}

const DottedBorderContainer = ({ children, className = "" }: DottedBorderContainerProps) => (

  <div className={`relative ${className}`}>
    {/* Corner decorative elements */}
  <div className="absolute top-0 left-0 w-4 h-4 z-20">
      <div className="w-2 h-2 border border-gray-400"></div>
    </div>
    <div className="absolute top-0 right-0 w-4 h-4 z-20">
      <div className="w-2 h-2 border border-gray-400 ml-auto"></div>
    </div>
    <div className="absolute bottom-0 left-0 w-4 h-4 z-20">
      <div className="w-2 h-2 border border-gray-400"></div>
    </div>
    <div className="absolute bottom-0 right-0 w-4 h-4 z-20">
      <div className="w-2 h-2 border border-gray-400 ml-auto"></div>
    </div>

    {/* Dotted border lines */}
    <div 
      className="absolute top-0 left-4 right-4 h-px z-10"
      style={{
        background: `repeating-linear-gradient(
          to right,
          #9ca3af 0px,
          #9ca3af 4px,
          transparent 4px,
          transparent 8px
        )`
      }}
    ></div>
    
    <div 
      className="absolute bottom-0 left-4 right-4 h-px z-10"
      style={{
        background: `repeating-linear-gradient(
          to right,
          #9ca3af 0px,
          #9ca3af 4px,
          transparent 4px,
          transparent 8px
        )`
      }}
    ></div>
    
    <div 
      className="absolute left-0 top-4 bottom-4 w-px z-10"
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
      className="absolute right-0 top-4 bottom-4 w-px z-10"
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

export default DottedBorderContainer;
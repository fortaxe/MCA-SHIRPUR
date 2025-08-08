import { ReactNode } from "react";

interface DottedBorderContainerProps {
  children: ReactNode;
  className?: string;
}

const DottedBorderContainer = ({
  children,
  className = "",
}: DottedBorderContainerProps) => (
  <div className={`relative ${className}`}>
    {/* Top Left */}
    <div className="absolute top-0 left-0 z-20">
      <img 
        src="square.svg" 
        alt="" 
        className="w-[11px] h-[11px] absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" 
      />
    </div>

    {/* Top Right */}
    <div className="absolute top-0 right-0 z-20">
      <img 
        src="square.svg" 
        alt="" 
        className="w-[11px] h-[11px] absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2" 
      />
    </div>

    {/* Bottom Left */}
    <div className="absolute bottom-0 left-0 z-20">
      <img 
        src="square.svg" 
        alt="" 
        className="w-[11px] h-[11px] absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2" 
      />
    </div>

    {/* Bottom Right */}
    <div className="absolute bottom-0 right-0 z-20">
      <img 
        src="square.svg" 
        alt="" 
        className="w-[11px] h-[11px] absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2" 
      />
    </div>

    {/* Dotted border lines */}
    <div
      className="absolute top-0 left-0 right-0 h-px z-10"
      style={{
        background: `repeating-linear-gradient(
          to right,
          #C5C5C5 0px,
            #C5C5C5 10px,
      transparent 10px,
      transparent 20px
        )`,
      }}
    ></div>

    <div
      className="absolute bottom-0 left-0 right-0 h-px z-10"
      style={{
        background: `repeating-linear-gradient(
          to right,
          #C5C5C5 0px,
           #C5C5C5 10px,
      transparent 10px,
      transparent 20px
        )`,
      }}
    ></div>

    <div
      className="absolute left-0 top-0 bottom-0 w-px z-10"
      style={{
        background: `repeating-linear-gradient(
          to bottom,
          #C5C5C5 0px,
           #C5C5C5 10px,
      transparent 10px,
      transparent 20px
        )`,
      }}
    ></div>

    <div
      className="absolute right-0 top-0 bottom-0 w-px z-10"
      style={{
        background: `repeating-linear-gradient(
          to bottom,
          #C5C5C5 0px,
          #C5C5C5 10px,
      transparent 10px,
      transparent 20px
        )`,
      }}
    ></div>

    {/* Content inside */}
    {children}
  </div>
);

export default DottedBorderContainer;

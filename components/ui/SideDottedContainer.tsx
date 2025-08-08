import { ReactNode } from "react";

interface DottedBorderContainerProps {
  children: ReactNode;
  className?: string;
}

const SideDottedBorderContainer = ({
  children,
  className = "",
}: DottedBorderContainerProps) => (
  <div className={`relative ${className}`}>
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

    {children}
  </div>
);

export default SideDottedBorderContainer;

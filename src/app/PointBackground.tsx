import Image from "next/image";
import { ReactNode } from "react";

interface PointBackgroundProps {
  children?: ReactNode;
  position?: "left" | "right" | "top";
  logoOpacity?: number;
  logoSize?: number;
  className?: string;
  verticalPosition?: number | string;
}

const PointBackground: React.FC<PointBackgroundProps> = ({
  children = null,
  position = "left",
  logoOpacity = 0.1,
  logoSize = 400,
  className = "",
  verticalPosition = "50vh"
}) => {
  const getVerticalPosition = () => {
    if (typeof verticalPosition === 'string' && verticalPosition.includes('vh')) {
      const vhValue = parseInt(verticalPosition);
      return `${vhValue * 10}px`; 
    }
    return typeof verticalPosition === 'number' ? `${verticalPosition}px` : verticalPosition;
  };

  const positionStyles = {
    left: {
      left: `70px`,
      right: "auto",
      top: getVerticalPosition(),
      transform: "translateX(-20%) translateY(-50%)",
      borderTopRightRadius: "2rem",
      borderBottomRightRadius: "2rem"
    },
    right: {
      right: `0px`,
      left: "auto",
      top: getVerticalPosition(),
      transform: "translateX(-60%) translateY(-50%)",
      borderTopLeftRadius: "2rem",
      borderBottomLeftRadius: "2rem"
    },
    top: {
      left: "50%",
      right: "auto",
      top: "0px",
      transform: "translateX(-50%) translateY(-30%)",
      borderBottomLeftRadius: "2rem",
      borderBottomRightRadius: "2rem"
    }
  };

  return (
    <>
      <div
        style={{
          position: "absolute", 
          zIndex: -2,
          width: `${logoSize}px`,
          height: `${logoSize * 0.67}px`,
          opacity: logoOpacity,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...positionStyles[position]
        }}
      >
        <Image
          src="/Puntos.png"
          alt="points background logo"
          width={logoSize}
          height={logoSize * 0.67}
          priority={true}
          className="select-none object-contain"
          style={{
            userSelect: "none",
            backgroundColor: "transparent"
          }}
        />
      </div>
      {children && (
        <div className={`relative z-10 w-full ${className}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default PointBackground;
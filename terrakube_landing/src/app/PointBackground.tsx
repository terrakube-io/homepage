import Image from "next/image";
import { ReactNode } from "react";

interface PointBackground {
  children?: ReactNode;
  position?: "left" | "right";
  logoOpacity?: number;
  logoSize?: number;
  className?: string;
  verticalPosition?: number | string;
}

const PointBackground: React.FC<PointBackground> = ({
  children = null,
  position = "left",
  logoOpacity = 0.1,
  logoSize = 400,
  className = "",
  verticalPosition = "50vh"
}) => {
  const positionStyles = {
    left: {
      left: `70px`,
      right: "auto",
      transform: "translateX(-20%) translateY(-50%)",
      borderTopRightRadius: "2rem",
      borderBottomRightRadius: "2rem"
    },
    right: {
      right: `0px`,
      left: "auto",
      transform: "translateX(-60%) translateY(-50%)",
      borderTopLeftRadius: "2rem",
      borderBottomLeftRadius: "2rem"
    }
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: typeof verticalPosition === 'number' ? `${verticalPosition}px` : verticalPosition,
          width: `${logoSize}px`,
          height: `${logoSize * 0.67}px`,
          opacity: logoOpacity,
          pointerEvents: "none",
          zIndex: -1,
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

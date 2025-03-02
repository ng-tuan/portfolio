import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/theme-context";

const RadialGradient: React.FC = () => {
  const [mouseXpercentage, setMouseXPercentage] = useState<number>(0);
  const [mouseYpercentage, setMouseYPercentage] = useState<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newMouseXPercentage = Math.round((event.pageX / windowWidth) * 100);
      const newMouseYPercentage = Math.round(
        (event.pageY / windowHeight) * 100
      );

      setMouseXPercentage(newMouseXPercentage);
      setMouseYPercentage(newMouseYPercentage);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const radialGradientStyle: React.CSSProperties = useMemo(() => {
    return {
      position: "fixed",
      background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #ff6a3d, ${
        theme === "light" ? "#9daaf2" : "#0c1220"
      })`,
    };
  }, [mouseXpercentage, mouseYpercentage, theme]);

  return (
    <React.Fragment>
      <div
        // rotate-180 for mirrored effect
        className={`absolute z-[0] inset-0 opacity-0 transition duration-300 group-hover:opacity-30`}
        style={radialGradientStyle}
      ></div>
    </React.Fragment>
  );
};

export default RadialGradient;

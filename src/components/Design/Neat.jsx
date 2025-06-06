import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

export const Neat = () => {
      const canvasRef = useRef(null);
      const gradientRef = useRef(null);

      useEffect(() => {
            if (!canvasRef.current) return;

            gradientRef.current = new NeatGradient({
                  ref: canvasRef.current,
                  colors: [
                        {
                              color: "#000000",
                              enabled: true,
                        },
                        {
                              color: "#000000",
                              enabled: true,
                        },
                        {
                              color: "#000000",
                              enabled: true,
                        },
                        {
                              color: "#135471",
                              enabled: true,
                        },
                        {
                              color: "#C4DDC5",
                              enabled: false,
                        },
                  ],
                  speed: 2,
                  horizontalPressure: 5,
                  verticalPressure: 5,
                  waveFrequencyX: 3,
                  waveFrequencyY: 3,
                  waveAmplitude: 4,
                  shadows: 4,
                  highlights: 6,
                  colorBrightness: 1,
                  colorSaturation: 5,
                  wireframe: false,
                  colorBlending: 8,
                  backgroundColor: "#3B7D1E",
                  backgroundAlpha: 1,
                  grainScale: 2,
                  grainSparsity: 0,
                  grainIntensity: 0.2,
                  grainSpeed: 0.8,
                  resolution: 1.2,
                  yOffset: 0,
            });
            return () => {
                  if (gradientRef.current) gradientRef.current.destroy();
            };
      }, []);

      return (
            <canvas
                  style={{
                        overflow: "hidden",
                        isolation: "isolate",
                        height: "100%",
                        width: "100%",
                  }}
                  ref={canvasRef}
            />
      );
};

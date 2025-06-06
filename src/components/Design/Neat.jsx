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
                              color: "#2D9361",
                              enabled: true,
                        },
                        {
                              color: "#B4F2DD",
                              enabled: true,
                        },
                        {
                              color: "#E8F9F3",
                              enabled: true,
                        },
                        {
                              color: "#1A4C55",
                              enabled: true,
                        },
                        {
                              color: "#0F2638",
                              enabled: true,
                        },
                  ],
                  speed: 2.5,
                  horizontalPressure: 4,
                  verticalPressure: 3,
                  waveFrequencyX: 0,
                  waveFrequencyY: 0,
                  waveAmplitude: 0,
                  shadows: 2,
                  highlights: 7,
                  colorBrightness: 1,
                  colorSaturation: 8,
                  wireframe: false,
                  colorBlending: 3,
                  backgroundColor: "#FF0000",
                  backgroundAlpha: 1,
                  grainScale: 0,
                  grainSparsity: 0,
                  grainIntensity: 0.275,
                  grainSpeed: 0,
                  resolution: 0.5,
                  yOffset: 0,
            });
            return () => {
                  if (gradientRef.current) gradientRef.current.destroy();
            };
      }, []);

      return (
            <canvas
                  style={{
                        isolation: "isolate",
                        height: "100%",
                        width: "100%",
                  }}
                  ref={canvasRef}
            />
      );
};

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
                              color: "#005F73",
                              enabled: true,
                        },
                        {
                              color: "#0A9396",
                              enabled: true,
                        },
                        {
                              color: "#94D2BD",
                              enabled: true,
                        },
                        {
                              color: "#E9D8A6",
                              enabled: true,
                        },
                        {
                              color: "#EE9B00",
                              enabled: false,
                        },
                  ],
                  speed: 3,
                  horizontalPressure: 5,
                  verticalPressure: 7,
                  waveFrequencyX: 2,
                  waveFrequencyY: 2,
                  waveAmplitude: 8,
                  shadows: 6,
                  highlights: 8,
                  colorBrightness: 1,
                  colorSaturation: 7,
                  wireframe: false,
                  colorBlending: 2,
                  backgroundColor: "#004E64",
                  backgroundAlpha: 1,
                  grainScale: 0,
                  grainSparsity: 0,
                  grainIntensity: 0.5,
                  grainSpeed: 1,
                  resolution: 1,
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

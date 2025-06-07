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
                              color: "#FFFFFF",
                              enabled: true,
                        },
                        {
                              color: "#494545",
                              enabled: true,
                        },
                        {
                              color: "#D7D2C3",
                              enabled: true,
                        },
                        {
                              color: "#5248CF",
                              enabled: true,
                        },
                        {
                              color: "#9687E1",
                              enabled: true,
                        },
                  ],
                  speed: 4,
                  horizontalPressure: 3,
                  verticalPressure: 4,
                  waveFrequencyX: 10,
                  waveFrequencyY: 0,
                  waveAmplitude: 10,
                  shadows: 5,
                  highlights: 10,
                  colorBrightness: 1,
                  colorSaturation: 2,
                  wireframe: false,
                  colorBlending: 9,
                  backgroundColor: "#000000",
                  backgroundAlpha: 1,
                  grainScale: 2,
                  grainSparsity: 0,
                  grainIntensity: 0.525,
                  grainSpeed: 1,
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
                        overflow: "hidden",
                        isolation: "isolate",
                        height: "100%",
                        width: "100%",
                  }}
                  ref={canvasRef}
            />
      );
};

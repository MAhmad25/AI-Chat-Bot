import { useEffect, useRef, useState } from "react";

const ThinkingContent = `Okay, first I need to understand what this component does...

Looking at the structure, I see there's a shimmer text animation, a spinning loader, and a scrolling content area. These work together to show an AI "thinking" state.

I should look for more specific details. The shimmer effect uses a gradient that animates across the text. The loader spins continuously. The content scrolls automatically.

I should also check if there are any specific features or benefits. The fade overlays at top and bottom create a nice depth effect, hiding the edges of the scrolling content.

Based on the design, this is a polished thinking indicator that conveys active processing without being distracting. It shows both a visual spinner and scrolling internal monologue.

Key features: shimmer text, spinning loader, timer counter, scrolling text with fade edges, and automatic looping scroll.

The component is self-contained with no external dependencies. All animations are pure CSS or JS intervals.`;

function Loader({ size = "md" }) {
      const sizeMap = { xs: "h-3 w-3", sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6", xl: "h-8 w-8" };
      return (
            <svg className={`inline-block animate-spin text-foreground ${sizeMap[size]}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="status" aria-label="Loading">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
      );
}

export default function AIThinkingBlock() {
      const [timer, setTimer] = useState(0);
      const contentRef = useRef(null);

      useEffect(() => {
            const interval = setInterval(() => setTimer((t) => t + 1), 1000);
            return () => clearInterval(interval);
      }, []);

      useEffect(() => {
            const el = contentRef.current;
            if (!el) return;
            let pos = 0;
            let direction = 1;
            let rafId;

            function scroll() {
                  const max = el.scrollHeight - el.clientHeight;
                  pos += direction * 0.5;
                  if (pos >= max) {
                        pos = max;
                        direction = -1;
                  }
                  if (pos <= 0) {
                        pos = 0;
                        direction = 1;
                  }
                  el.scrollTop = pos;
                  rafId = requestAnimationFrame(scroll);
            }

            rafId = requestAnimationFrame(scroll);
            return () => cancelAnimationFrame(rafId);
      }, []);

      return (
            <>
                  <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .shimmer-text {
          background: linear-gradient(110deg, #404040 35%, #fff 50%, #404040 75%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }
      `}</style>

                  <div className="flex flex-col p-3 max-w-xl">
                        <div className="flex items-center justify-start gap-2 mb-4">
                              <Loader size="sm" />
                              <p className="shimmer-text text-base">AI is thinking</p>
                              <span className="text-sm text-gray-400">{timer}s</span>
                        </div>

                        <div className="relative h-[150px] overflow-hidden bg-zinc-900 rounded-xl p-2">
                              {/* Top fade */}
                              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-zinc-900 to-transparent z-10 pointer-events-none" />
                              {/* Bottom fade */}
                              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-900 to-transparent z-10 pointer-events-none" />

                              <div ref={contentRef} className="h-full overflow-hidden p-4 text-zinc-300">
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{ThinkingContent}</p>
                              </div>
                        </div>
                  </div>
            </>
      );
}

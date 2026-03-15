import { Toaster } from "react-hot-toast";
import Main from "./components/Main";
const App = () => {
      return (
            <main className="relative overflow-hidden text-white w-full h-dvh">
                  <div className="min-h-screen w-full bg-[var(--color-bl)] relative">
                        <div
                              className="absolute inset-0 z-0"
                              style={{
                                    backgroundImage: `
          radial-gradient(circle at 50% 100%, #5c2c1a 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(81, 52, 17, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(90, 79, 17, 0.3) 0%, transparent 80%)
        `,
                              }}
                        />
                        <Toaster />
                        <Main />
                  </div>
            </main>
      );
};

export default App;
{
      /* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5  [background:radial-gradient(125%_125%_at_50%_10%,#000000_10%,#63e_100%)]" /> */
}

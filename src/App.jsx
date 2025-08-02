import Background from "./components/Background";
import Main from "./components/Main";
import { Toaster } from "react-hot-toast";

const App = () => {
      return (
            <main className="relative text-white w-full h-dvh">
                  <Background />
                  <Main />
                  <Toaster />
            </main>
      );
};

export default App;

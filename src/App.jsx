import Loader from "./components/Design/Loader/Loader";
import { Toaster } from "react-hot-toast";
import Main from "./components/Main";
const App = () => {
      return (
            <main className="relative overflow-hidden text-white w-full h-dvh">
                  <Loader />
                  <div className="absolute inset-0 -z-10 h-full w-full items-center px-5  [background:radial-gradient(125%_125%_at_50%_10%,#000000_10%,#63e_100%)]" />
                  <Main />
                  <Toaster />
            </main>
      );
};

export default App;

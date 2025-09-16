// import Background from "./components/Background";
import Loader from "./components/Design/Loader/Loader";
import Main from "./components/Main";
import { Toaster } from "react-hot-toast";
import Unicorn from "./components/Unicorn";

const App = () => {
      return (
            <main className="relative overflow-hidden text-white w-full h-dvh">
                  <Loader />
                  {/* <Background /> */}
                  <div className="w-screen h-screen">
                        <Unicorn />
                  </div>
                  <Main />
                  <Toaster />
            </main>
      );
};

export default App;

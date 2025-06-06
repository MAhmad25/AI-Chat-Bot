import ChatContainer from "./ChatContainer";
import Header from "./Header";

const Main = () => {
      return (
            <section className="w-full h-full absolute top-0 left-0 backdrop-blur-2xl">
                  <Header />
                  <ChatContainer />
            </section>
      );
};

export default Main;

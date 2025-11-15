import ChatContainer from "./ChatContainer/ChatContainer";
import UserInput from "./UserInput";

const Main = () => {
      return (
            <section className="w-full flex flex-col items-center  h-full absolute top-0 bg-[#000000]/10  bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.79)_0%,_rgba(237,_221,_83,_0)_100%)] left-0 ">
                  <ChatContainer />
                  <UserInput />
            </section>
      );
};

export default Main;

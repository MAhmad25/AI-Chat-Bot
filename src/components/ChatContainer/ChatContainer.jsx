import { useContext, useEffect } from "react";
import { ChatPodia } from "../../contexts/Context";
import toast from "react-hot-toast";
import { Streamdown } from "streamdown";
import Loader from "./AILoader";
import "streamdown/styles.css";
const ChatContainer = () => {
      const { chatResponse, promptDiv, loading, error } = useContext(ChatPodia);
      useEffect(() => {
            if (error) toast.error(error);
      }, [error]);

      return (
            <section className="w-full mr-5 px-5 sm:px-0 sm:container sm:w-1/2  font-Nova [&::-webkit-scrollbar]:hidden h-[80%] mt-10 overflow-y-scroll">
                  {promptDiv ? (
                        <section className="w-full  flex justify-end h-fit">
                              <div className="w-fit sm:w-4/5  h-fit mb-2  flex justify-end items-end">
                                    <p className="text-white/90 rounded-xl sm:rounded-l-xl rounded-tr-xl sm:rounded-br-none  sm:rounded-tr-2xl  bg-[var(--color-box)]   px-5 py-2 tracking-tight sm:text-2xl ">{promptDiv} </p>
                              </div>
                        </section>
                  ) : null}
                  {loading && !chatResponse ? <Loader /> : null}
                  {chatResponse && (
                        <div className="w-fit min-w-full overflow-hidden px-3 py-3 h-fit bg-[#271814]  rounded-xl text-xl break-words  sm:text-xl tracking-tight text-white">
                              <Streamdown
                                    animated={{
                                          animation: "slideUp",
                                          duration: 400,
                                          easing: "ease-out",
                                          sep: "char",
                                    }}
                                    isAnimating={loading}
                              >
                                    {chatResponse}
                              </Streamdown>
                        </div>
                  )}
            </section>
      );
};

export default ChatContainer;

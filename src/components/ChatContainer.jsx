import { useContext } from "react";
import { ChatPodia } from "../contexts/Context";
import toast from "react-hot-toast";

const ChatContainer = () => {
      const { chatResponse, promptDiv, loading, error } = useContext(ChatPodia);
      if (error) {
            toast.error(error);
      }
      return (
            <section className="w-full sm:container sm:w-1/2 sm:mx-auto font-Nova no-scroll h-3/4 overflow-y-scroll">
                  {promptDiv ? (
                        <section className="w-full  flex justify-end h-fit">
                              <div className="w-fit sm:w-4/5 p-3 h-fit mb-2  flex justify-center items-center  rounded-xl sm:rounded-l-xl rounded-tr-xl sm:rounded-br-none  sm:rounded-tr-2xl bg-black/20">
                                    <p className="text-white/90  tracking-tighter leading-5">{promptDiv} </p>
                              </div>
                        </section>
                  ) : null}
                  {loading ? (
                        <div className="relative flex  w-64 animate-pulse gap-2 p-4">
                              <div className="flex-1">
                                    <div className="mb-1 h-5 w-3/5 rounded-lg bg-white/40 text-lg"></div>
                                    <div className="h-5 w-[90%] rounded-lg bg-white/40 text-sm"></div>
                              </div>
                              <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-white/40"></div>
                        </div>
                  ) : (
                        chatResponse && (
                              <div className="w-fit min-w-full overflow-hidden px-3 py-3 h-fit bg-black/40 backdrop-blur-xl rounded-xl ">
                                    <p className="text-sm break-words  sm:text-xl tracking-tight text-white ">{chatResponse}</p>
                              </div>
                        )
                  )}
            </section>
      );
};

export default ChatContainer;

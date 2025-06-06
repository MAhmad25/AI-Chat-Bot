import { useContext } from "react";
import { ChatPodia } from "../contexts/Context";
import toast from "react-hot-toast";

const ChatContainer = () => {
      const { userPrompt, chatResponse, loading, error } = useContext(ChatPodia);
      if (error) {
            toast(error);
      }
      return (
            <section className="w-full no-scroll h-3/4 overflow-y-scroll  relative ">
                  {userPrompt ? (
                        <div className="w-fit p-3 h-fit max-w-1/2 flex justify-center items-center absolute right-2 rounded-xl rounded-br-none sm:rounded-l-full sm:rounded-tr-full bg-black">
                              <p className="text-white tracking-tighter leading-none">{userPrompt}</p>
                        </div>
                  ) : null}
                  {loading ? (
                        <div class="relative flex  w-64 animate-pulse gap-2 p-4">
                              <div class="h-12 w-12 rounded-full bg-white/40"></div>
                              <div class="flex-1">
                                    <div class="mb-1 h-5 w-3/5 rounded-lg bg-white/40 text-lg"></div>
                                    <div class="h-5 w-[90%] rounded-lg bg-white/40 text-sm"></div>
                              </div>
                              <div class="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-white/40"></div>
                        </div>
                  ) : (
                        <div className="w-fit px-2 h-fit ">
                              <pre className="text-xs sm:text-xl tracking-tight text-white ">{chatResponse} </pre>
                        </div>
                  )}
            </section>
      );
};

export default ChatContainer;

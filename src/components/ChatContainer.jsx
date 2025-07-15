import { useContext, useMemo } from "react";
import { ChatPodia } from "../contexts/Context";
import toast from "react-hot-toast";
import parser from "html-react-parser";
import DOMPurify from "dompurify";

const ChatContainer = () => {
      const { chatResponse, promptDiv, loading, error } = useContext(ChatPodia);
      if (error) {
            toast.error(error);
      }
      let HTMLResponse = useMemo(() => {
            if (!chatResponse) return null;
            const cleaned = chatResponse.replace("`html", "");
            const cleanHTML = DOMPurify.sanitize(cleaned, {
                  USE_PROFILES: { html: true },
            });
            return parser(cleanHTML);
      }, [chatResponse]);

      return (
            <section className="w-full sm:container sm:w-1/2 sm:mx-auto no-scroll h-3/4 overflow-y-scroll">
                  {promptDiv ? (
                        <section className="w-full flex justify-end  h-fit">
                              <div className="w-fit p-3 h-fit   mb-2 max-w-1/2 flex justify-center items-center  rounded-xl sm:rounded-l-xl rounded-tr-xl sm:rounded-br-none  sm:rounded-tr-2xl bg-black/20">
                                    <p className="text-white font-fancy font-semibold  tracking-tighter leading-5">{promptDiv} </p>
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
                        HTMLResponse && (
                              <div className="w-fit min-w-full overflow-hidden px-3 py-3 h-fit bg-black/40 backdrop-blur-xl rounded-xl ">
                                    <p className="text-sm break-words font-Nova sm:text-xl tracking-tight text-white ">{HTMLResponse}</p>
                              </div>
                        )
                  )}
            </section>
      );
};

export default ChatContainer;

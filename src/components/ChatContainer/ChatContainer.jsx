import { useContext } from "react";
import { ChatPodia } from "../../contexts/Context";
import toast from "react-hot-toast";
import styles from "./loader.module.css";
const ChatContainer = () => {
      const { chatResponse, promptDiv, loading, error } = useContext(ChatPodia);
      if (error) {
            toast.error(error);
      }
      return (
            <section className="w-full sm:container sm:w-1/2 sm:mx-auto font-Nova [&::-webkit-scrollbar]:hidden h-3/4 overflow-y-scroll">
                  {promptDiv ? (
                        <section className="w-full  flex justify-end h-fit">
                              <div className="w-fit sm:w-4/5  h-fit mb-2  flex justify-end items-end">
                                    <p className="text-white/90 rounded-xl sm:rounded-l-xl rounded-tr-xl sm:rounded-br-none  sm:rounded-tr-2xl  bg-[#303030]  px-5 py-2 tracking-tighter leading-5">{promptDiv} </p>
                              </div>
                        </section>
                  ) : null}
                  {loading ? (
                        <p className={styles.shine}>Thinking</p>
                  ) : (
                        chatResponse && (
                              <div className="w-fit min-w-full overflow-hidden px-3 py-3 h-fit bg-[#303030] mix-blend-difference  rounded-xl ">
                                    <p className="text-sm break-words  sm:text-xl tracking-tight text-white ">{chatResponse}</p>
                              </div>
                        )
                  )}
            </section>
      );
};

export default ChatContainer;

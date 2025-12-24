import { useContext, useEffect } from "react";
import { ChatPodia } from "../../contexts/Context";
import toast from "react-hot-toast";
import Markdown from "react-markdown";
import styles from "./loader.module.css";
const ChatContainer = () => {
      const { chatResponse, promptDiv, loading, error } = useContext(ChatPodia);

      useEffect(() => {
            if (error) toast.error(error);
      }, [error]);
      useEffect(() => {
            let glowInTexts = document.querySelectorAll(".glowIn");
            glowInTexts.forEach((glowInText) => {
                  let letters = glowInText.textContent.split("");
                  glowInText.textContent = "";
                  letters.forEach((letter, i) => {
                        let span = document.createElement("span");
                        span.textContent = letter;
                        span.style.animationDelay = `${i * 0.03}s`;
                        glowInText.append(span);
                  });
            });
      }, [chatResponse]);

      return (
            <section className="w-full mr-5 px-5 sm:px-0 sm:container sm:w-1/2  font-Nova [&::-webkit-scrollbar]:hidden h-[80%] mt-10 overflow-y-scroll">
                  {promptDiv ? (
                        <section className="w-full  flex justify-end h-fit">
                              <div className="w-fit sm:w-4/5  h-fit mb-2  flex justify-end items-end">
                                    <p className="text-white/90 rounded-xl sm:rounded-l-xl rounded-tr-xl sm:rounded-br-none  sm:rounded-tr-2xl  bg-[#4c537c]   px-5 py-2 tracking-tight sm:text-2xl ">{promptDiv} </p>
                              </div>
                        </section>
                  ) : null}
                  {loading ? (
                        <p className={styles.shine}>Thinking</p>
                  ) : (
                        chatResponse && (
                              <div className="w-fit min-w-full overflow-hidden px-3 py-3 h-fit bg-[#303030]  rounded-xl text-xl break-words  sm:text-xl tracking-tight text-white">
                                    <Markdown>{chatResponse}</Markdown>
                              </div>
                        )
                  )}
            </section>
      );
};

export default ChatContainer;

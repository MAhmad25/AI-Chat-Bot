import { useContext } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { ChatPodia } from "../contexts/Context";

const UserInput = () => {
      const { userPrompt, setUserPrompt, setPromptDiv, generateMessage } = useContext(ChatPodia);
      return (
            <section className="w-full absolute bottom-3  sm:mx-auto sm:w-screen py-3 sm:py-0 flex justify-center gap-2 px-2 items-end">
                  <div className="flex flex-col justify-end w-full sm:w-1/2">
                        <textarea rows={1} value={userPrompt} onChange={(e) => setUserPrompt(e.target.value)} className={`w-full [field-sizing:content] resize-none min-h-12 max-h-80 ${userPrompt?.length > 100 ? "mix-blend-normal" : "mix-blend-difference"}  cursor-text border-none h-auto caret-white bg-[#303030] text-lg leading-none appearance-none outline-none rounded-xl font-Nova py-4 text-white  [&::-webkit-scrollbar]:hidden p-5`} type="text" required placeholder="Message..." />
                  </div>
                  <button
                        onClick={() => {
                              generateMessage();
                              setPromptDiv(userPrompt);
                              setUserPrompt("");
                        }}
                        className="rounded-full bg-[#303030] md:mix-blend-difference p-4 flex  cursor-pointer justify-center items-center"
                  >
                        <BsFillSendFill fontWeight="600" size="1rem" color="white" />
                  </button>
            </section>
      );
};

export default UserInput;

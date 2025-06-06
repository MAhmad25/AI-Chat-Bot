import { useContext } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { ChatPodia } from "../contexts/Context";

const UserInput = () => {
      const { userPrompt, setUserPrompt, generateMessage } = useContext(ChatPodia);
      return (
            <section className="w-full sm:mx-auto sm:w-1/2 py-3 sm:py-0 flex justify-around gap-2 px-2 items-center ">
                  <input value={userPrompt} onChange={(e) => setUserPrompt(e.target.value)} className="w-full border-none caret-white backdrop-blur-md text-lg leading-none bg-[#22808A]/40  appearance-none  outline-none rounded-full py-4 px-5" type="text" required placeholder="Ask me anything small..." />
                  <button
                        onClick={() => {
                              generateMessage();
                              setUserPrompt("");
                        }}
                        className="rounded-full cursor-pointer bg-[#22808A]/40 backdrop-blur-md p-4  flex justify-center items-center"
                  >
                        <BsFillSendFill fontWeight="600" size="1rem" color="white" />
                  </button>
            </section>
      );
};

export default UserInput;

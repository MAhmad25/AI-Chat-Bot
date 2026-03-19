import { useContext, useState, useRef, useEffect, useCallback } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { ChatPodia } from "../contexts/Context";

const UserInput = () => {
      const { userPrompt, setUserPrompt, setPromptDiv, generateMessage, loading } = useContext(ChatPodia);

      const [isFocused, setIsFocused] = useState(false);
      const textareaRef = useRef(null);

      useEffect(() => {
            if (textareaRef.current) {
                  textareaRef.current.style.height = "auto";
                  const scrollHeight = textareaRef.current.scrollHeight;
                  const maxHeight = 22 * 4 + 16;
                  textareaRef.current.style.height = Math.min(scrollHeight, maxHeight) + "px";
            }
      }, [userPrompt]);

      const handleSubmit = useCallback(() => {
            if (loading || !userPrompt.trim()) return;
            generateMessage();
            setPromptDiv(userPrompt);
            setUserPrompt("");
      }, [loading, userPrompt, generateMessage, setPromptDiv, setUserPrompt]);

      const handleKeyDown = useCallback(
            (e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit();
                  }
            },
            [handleSubmit],
      );

      const isSubmitDisabled = loading || !userPrompt.trim();
      const isExpanded = isFocused || userPrompt.length > 0;

      return (
            <section className="w-full z-10 absolute bottom-10 md:bottom-3 sm:mx-auto sm:w-screen py-3 flex justify-center px-2 items-end">
                  <div
                        className={`
          flex items-center
          bg-[#1a1a1a]/50 backdrop-blur-2xl rounded-2xl
          transition-all duration-500 ease-out
          border border-white/5 focus-within:border-white/15
          px-2 py-2 gap-1
          ${isExpanded ? "w-full sm:w-1/2" : "w-56"}
        `}
                  >
                        <textarea
                              ref={textareaRef}
                              rows={1}
                              value={userPrompt}
                              onChange={(e) => setUserPrompt(e.target.value)}
                              onKeyDown={handleKeyDown}
                              onFocus={() => setIsFocused(true)}
                              onBlur={() => setIsFocused(false)}
                              className={`
            flex-1 resize-none min-h-8 max-h-24
            bg-transparent
            ${userPrompt?.length > 100 ? "mix-blend-normal" : "mix-blend-difference"}
            cursor-text caret-white text-lg
            appearance-none outline-none text-white
            [&::-webkit-scrollbar]:hidden
            py-1.5 px-2 placeholder:text-white/40
          `}
                              style={{ lineHeight: "22px" }}
                              placeholder="Ask"
                              disabled={loading}
                        />

                        <button
                              type="button"
                              onClick={handleSubmit}
                              disabled={isSubmitDisabled}
                              aria-label="Send message"
                              className={`
            flex-shrink-0 h-8 w-8 flex items-center justify-center
            rounded-full md:mix-blend-difference transition-all
            ${isSubmitDisabled ? "opacity-40 cursor-not-allowed" : "opacity-100 hover:bg-white/10 cursor-pointer"}
          `}
                        >
                              <BsFillSendFill fontWeight="600" size="1rem" color="white" />
                        </button>
                  </div>
            </section>
      );
};

export default UserInput;

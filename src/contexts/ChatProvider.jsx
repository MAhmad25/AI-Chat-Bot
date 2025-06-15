import { useState } from "react";
import { ChatPodia } from "./Context.js";
import axios from "axios";
import toast from "react-hot-toast";
const ContextProvider = (props) => {
      const [userPrompt, setUserPrompt] = useState("");
      const [chatResponse, setChatResponse] = useState("");
      const [promptDiv, setPromptDiv] = useState("");
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);

      const BASE_URL = import.meta.env.VITE_BASE_URL;
      const API_KEY = import.meta.env.VITE_API_KEY;
      const FULLURL = `${BASE_URL}?key=${API_KEY}`;

      const generateMessage = async () => {
            let promptToSend = userPrompt.trim();
            if (!promptToSend) {
                  toast.error("Please ask someting");
                  return;
            }
            const payLoad = {
                  contents: [
                        {
                              parts: [
                                    {
                                          text: `
                                          Please respond using only valid HTML—no Markdown,no backticks, no extra commentary. Strictly follow these rules:
                                          Do not wrap your output in any backticks or fences; emit only raw HTML.
                                          1. **Structure & layout**  
                                          2. **Inline highlighting**  
                                             - For any important keyword or phrase and title of paragraph, wrap it in:  
                                              <span style="background-color: black;color:  white;font-weight:600; padding:4px 3px; border-radius:7px; margin: 0  5px ">…</span>  

                                          3. **HTML tags to must use Please**  
                                            - <ol><li>…</li></ol> for numbered steps  
                                            - <ul><li>…</li></ul> for bullet lists  
                                            - <h1> <h4> for headings  
                                            - <p> for paragraphs  
                                            -  <br> for line breaking
                                            - <strong> or <em> for emphasis  
                                            <code>…</code> if there is any code example don't try to use it if code example is not neccessary for any code snippets (wrap inline or block code here) 

                                          4. **Emojis**  
                                             - Sprinkle 😊, 🚀, 🔥, etc. to convey tone.

                                          5. **No chatter**  
                                            - Do **not** include any framing text like “Here's your response…” or instructions to the user.
                                          6.  Please try to write a long answer as much as you can
                                          Now generate the HTML answer below and don't write like : backtick html:
                                          ${promptToSend}`,
                                    },
                              ],
                        },
                  ],
            };
            try {
                  setLoading(true);
                  const { data } = await axios.post(FULLURL, payLoad, {
                        headers: {
                              "Content-Type": "application/json",
                        },
                  });
                  setLoading(false);
                  setChatResponse(data.candidates[0].content.parts[0].text);
            } catch (error) {
                  setError(error.message);
            }
      };
      const appState = {
            userPrompt,
            setUserPrompt,
            chatResponse,
            setChatResponse,
            loading,
            setLoading,
            error,
            setError,
            generateMessage,
            promptDiv,
            setPromptDiv,
      };
      return <ChatPodia.Provider value={appState}>{props.children}</ChatPodia.Provider>;
};

export default ContextProvider;

import { useState } from "react";
import { ChatPodia } from "./Context.js";
import axios from "axios";
import toast from "react-hot-toast";
const ContextProvider = (props) => {
      const [userPrompt, setUserPrompt] = useState("");
      const [chatResponse, setChatResponse] = useState("");
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);

      const BASE_URL = import.meta.env.VITE_BASE_URL;
      const API_KEY = import.meta.env.VITE_API_KEY;
      const FULLURL = `${BASE_URL}?key=${API_KEY}`;

      const generateMessage = async () => {
            let promptToSend = userPrompt.trim();
            if (!promptToSend) {
                  toast("Please ask someting");
                  return;
            }
            const payLoad = {
                  contents: [
                        {
                              parts: [
                                    {
                                          text: `
                                          Please respond in Markdown format. Use:   
                                          - Numbered lists (e.g. "1. First step")
                                          - Bullet lists (e.g. "- item")
                                          - Write Code: --- before code blocks
                                          -Also Add Emojies to show emotion
                                          -Make each line 1/2 width it means the text is showing in Mobile Screen so it must be readable
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
      };
      return <ChatPodia.Provider value={appState}>{props.children}</ChatPodia.Provider>;
};

export default ContextProvider;

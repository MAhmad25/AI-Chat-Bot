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
                                          text: promptToSend,
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

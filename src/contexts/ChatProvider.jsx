import { useState } from "react";
import { ChatPodia } from "./Context";
import axios from "axios";
const ContextProvider = (prop) => {
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
                  console.log("Please Write someting");
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
                  const { data } = await axios.post(FULLURL, payLoad, {
                        headers: {
                              "Content-Type": "application/json",
                        },
                  });
                  setChatResponse(data);
            } catch (error) {
                  console.log(error);
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
      return <ChatPodia.Provider value={appState}>{prop.children}</ChatPodia.Provider>;
};

export default ContextProvider;

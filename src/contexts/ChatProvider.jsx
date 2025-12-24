import { useState, useRef } from "react";
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

      const lastRequestAt = useRef(0);

      const generateMessage = async () => {
            // prevent duplicate concurrent requests
            if (loading) {
                  toast.error("A request is already in progress");
                  return;
            }

            const now = Date.now();
            // basic debounce: ignore repeated sends within 1s
            if (now - lastRequestAt.current < 1000) {
                  toast.error("Please wait a moment before sending another message");
                  return;
            }

            let promptToSend = userPrompt.trim();
            if (!promptToSend) {
                  toast.error("Please ask something");
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
                  lastRequestAt.current = now;
                  console.debug("Sending request to API", { url: FULLURL, time: new Date(now).toISOString() });
                  const { data } = await axios.post(FULLURL, payLoad, {
                        headers: {
                              "Content-Type": "application/json",
                        },
                  });
                  setLoading(false);
                  setChatResponse(data.candidates[0].content.parts[0].text);
            } catch (error) {
                  setLoading(false);
                  // handle rate limit explicitly
                  if (error?.response?.status === 429) {
                        toast.error("Rate limit exceeded — please try again in a moment.");
                        setError("Rate limit exceeded. Please wait before retrying.");
                        return;
                  }

                  setError(error.response?.data?.message || error.message || "Something went wrong");
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

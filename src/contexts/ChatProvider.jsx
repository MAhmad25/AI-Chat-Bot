import { useState, useRef } from "react";
import { ChatPodia } from "./Context.js";
import toast from "react-hot-toast";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

const ContextProvider = (props) => {
      const [userPrompt, setUserPrompt] = useState("");
      const [chatResponse, setChatResponse] = useState("");
      const [promptDiv, setPromptDiv] = useState("");
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);

      const lastRequestAt = useRef(0);

      const generateMessage = async () => {
            if (loading) {
                  toast.error("A request is already in progress");
                  return;
            }

            const now = Date.now();
            if (now - lastRequestAt.current < 1000) {
                  toast.error("Please wait a moment before sending another message");
                  return;
            }

            let promptToSend = userPrompt.trim();
            if (!promptToSend) {
                  toast.error("Please ask something");
                  return;
            }

            try {
                  setLoading(true);
                  lastRequestAt.current = now;
                  const response = await ai.models.generateContent({
                        model: "gemini-3-flash-preview",
                        contents: promptToSend,
                  });
                  setLoading(false);
                  setChatResponse(response.text);
            } catch (error) {
                  setLoading(false);
                  if (error?.response?.status === 429) {
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

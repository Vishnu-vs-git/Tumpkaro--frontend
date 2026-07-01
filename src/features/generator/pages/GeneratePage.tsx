import { useState } from "react";
import PromptInput from "../components/PromptInput/PromptInput";



const GeneratePage = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="space-y-8">
      <PromptInput
        value={prompt}
        onChange={setPrompt}
      />
    </div>
  );
};

export default GeneratePage;
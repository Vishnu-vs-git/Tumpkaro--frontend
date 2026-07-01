

import { useState } from "react";
import AIModelSelector from "../components/AIModelSelector/AIModelSelector";
import AspectRatioSelector from "../components/AspectRatioSelector/AspectRatioSelector";
import GeneratorWorkspace from "../components/GenerateWorkspace/GenerateWorkspace";
import PromptInput from "../components/PromptInput/PromptInput";
import ResultGallery from "../components/ResultGallery/ResultGallery";
import StyleSelector from "../components/StyleSelector/StyleSelector";
import UploadArea from "../components/UploadArea/UploadArea";
import { useGenerateThumbnailForm } from "../hooks/useGenerateThumbnailForm";
import type { GenerateThumbnailFormValues } from "../schemas/generateThumbnail.schema";
import GenerateButton from "../components/GenerateButton/GenerateButon";
import { mockResults } from "../components/ResultGallery/results.data";
import type{ GeneratedResult } from "../components/ResultGallery/results.types";

const GeneratePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useGenerateThumbnailForm();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<GeneratedResult[]>([]);
 const onSubmit = async (data: GenerateThumbnailFormValues) => {
  try {
    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 2500)
    );

    setResults(mockResults);

    console.log(data);
  } finally {
    setLoading(false);
  }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
       <GeneratorWorkspace 
        left ={
          <>
             <PromptInput
        control={control}
        errors={errors}
      />
      <StyleSelector
       control={control}
      />
      <AspectRatioSelector
        control={control}
    />
    <AIModelSelector
      control={control}/>
      <UploadArea control={control} />
      <GenerateButton loading={loading} />
          
          </>
        }
        right ={<ResultGallery
         loading={loading}
         results={results}
        />
        }
        />
   
    </form>
  );
};

export default GeneratePage;
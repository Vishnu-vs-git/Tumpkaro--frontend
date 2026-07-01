

import PromptInput from "../components/PromptInput/PromptInput";
import StyleSelector from "../components/StyleSelector/StyleSelector";
import { useGenerateThumbnailForm } from "../hooks/useGenerateThumbnailForm";
import type { GenerateThumbnailFormValues } from "../schemas/generateThumbnail.schema";

const GeneratePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useGenerateThumbnailForm();

  const onSubmit = (data: GenerateThumbnailFormValues) => {
  console.log(data);
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <PromptInput
        control={control}
        errors={errors}
      />
      <StyleSelector/>
    </form>
  );
};

export default GeneratePage;
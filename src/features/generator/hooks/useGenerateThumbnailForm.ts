import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { type GenerateThumbnailFormValues, generateThumbnailSchema } from "../schemas/generateThumbnail.schema"

export const useGenerateThumbnailForm = () => {

  return useForm<GenerateThumbnailFormValues>({
    resolver : zodResolver(generateThumbnailSchema),
    defaultValues :{
      prompt : "",
      style :"gaming",
      aspectRatio:"16:9",
      aiModel:"gemini",
      image:null
    },
    mode: "onChange"
  })

}
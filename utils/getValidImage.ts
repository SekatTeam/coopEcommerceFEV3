import { FashionImage4 } from "@/app/constants/media";

export const getValidImageSrc = (src: string | null | undefined) => {
  if (!src || src === "nill" || src === "null") {
    return FashionImage4;
  }
  return src;
};
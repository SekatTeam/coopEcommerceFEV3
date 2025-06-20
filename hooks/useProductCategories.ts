import { useQuery } from "@tanstack/react-query";
import { getProductCategories } from "./getProductCategories";

export function useProductCategories() {
  return useQuery({
    queryKey: ["productCategories"],
    queryFn: getProductCategories,
  });
}

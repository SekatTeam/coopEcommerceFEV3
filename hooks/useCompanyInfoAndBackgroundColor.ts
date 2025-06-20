import { useQuery } from "@tanstack/react-query";
import { getCompanyInfoAndBackgroundColor } from "./getCompanyInfoAndBackgroundColor";

export function useCompanyInfoAndBackgroundColor() {
  return useQuery({
    queryKey: ["companyInfoAndBackgroundColor"],
    queryFn: getCompanyInfoAndBackgroundColor,
  });
}

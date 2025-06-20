import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../utils/api";

export function useHomePageProduct() {
  return useQuery({
    queryKey: ["homePageProduct"],
    queryFn: async () => {
      const res = await apiFetch("/api/Shopping/HomePageProduct", {
        headers: { accept: "text/plain" },
      });
      if (!res.ok) throw new Error("Failed to fetch homepage products");
      return res.json();
    },
  });
}

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../utils/api";

export function useProductsByCategory(catName: string, catId: string | number) {
  return useQuery({
    queryKey: ["productsByCategory", catName, catId],
    queryFn: async () => {
      const url = `/api/Shopping/ProductByCategory?catName=${encodeURIComponent(catName)}&catId=${catId}`;
      const res = await apiFetch(url, {
        headers: { accept: "text/plain" },
      });
      if (!res.ok) throw new Error("Failed to fetch products by category");
      return res.json();
    },
    enabled: !!catName && !!catId && catName !== "all", // Only fetch if not 'all'
  });
}

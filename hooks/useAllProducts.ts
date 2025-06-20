import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "../utils/api";

export function useAllProducts() {
  return useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await apiFetch("/api/Shopping/AllProduct", {
        headers: { accept: "text/plain" },
      });
      if (!res.ok) throw new Error("Failed to fetch all products");
      return res.json();
    },
  });
}

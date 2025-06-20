import { apiFetch } from "@/utils/api";

export async function getProductCategories() {
  const res = await apiFetch("/api/Shopping/ProductCategories", {
    headers: { accept: "text/plain" },
  });
  if (!res.ok) throw new Error("Failed to fetch product categories");
  return res.json();
}

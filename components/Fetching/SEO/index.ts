import { API_URL } from "@/constants/constants";

export async function getSeoPages() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/seo/pages/lists`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch project list");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching Seo Pages list:", error);
    return [];
  }
}

export async function getSeo() {
  try {
    const response = await fetch(`${API_URL}/admin/seo/lists`);

    if (!response.ok) {
      throw new Error("Error Fetching SEO");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error Fetching Seo");
    return [];
  }
}

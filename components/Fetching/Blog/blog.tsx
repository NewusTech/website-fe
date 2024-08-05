export async function getBlogList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/get`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch blog list");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return [];
  }
}

export async function getBlogRecomendation() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/blog/recomendation`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch blog list");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return [];
  }
}

export async function getBlogDetail(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/${slug}/blog/detail`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      // throw new Error('Failed to fetch blog detail');
      return null;
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    return null;
  }
}

export async function getBlogCategory() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/kategoriblog/get`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch blog detail");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog detail:", error);
    return null;
  }
}

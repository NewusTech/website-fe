export async function getProjectList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/portfolio/lists`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch project list");
    }
    const data = await response.json();
    return data.portfolios;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return [];
  }
}

export async function getProjectDetail(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/${slug}/portfolio/detail`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return null;
  }
}

export async function getProjectKategoriList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/kategoriportofolio/get`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch project detail");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return [];
  }
}

export async function getTeamList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/team/lists`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch team list");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return [];
  }
}

export async function getTeamDetail(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/${slug}/team/detail`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      // throw new Error('Failed to fetch team detail');
      return null;
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return null;
  }
}

export async function getTeamMedia() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/media/lists`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch team detail");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return [];
  }
}

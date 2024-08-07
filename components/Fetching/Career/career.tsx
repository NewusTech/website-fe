export async function getJobList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/jobrecruitment/lists`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch blog list");
    }
    const data = await response.json();
    return data.jobRecruitment;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return [];
  }
}

export async function getCategoryJobs() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/jobcategory/lists`,
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

export async function getobDetail(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/${slug}/jobrecruitment/detail`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      // throw new Error("Failed to fetch blog list");
      return null;
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return null;
  }
}

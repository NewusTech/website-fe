export async function getProjectList() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/portfolio/lists`);
    if (!response.ok) {
      throw new Error('Failed to fetch project list');
    }
    const data = await response.json();
    return data.portfolios;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    return [];
  }
}

export async function getProjectDetail(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/${slug}/portfolio/detail`);

    if (!response.ok) {
      throw new Error('Failed to fetch project detail');
    }
    const data = await response.json();
    return data.portfolio;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    return [];
  }
}
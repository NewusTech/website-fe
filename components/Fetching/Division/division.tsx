export async function getTeamList() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/team/lists`);
    if (!response.ok) {
      throw new Error('Failed to fetch team list');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    return [];
  }
}

export async function getTeamDetail(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/${slug}/team/detail`);

    if (!response.ok) {
      throw new Error('Failed to fetch team detail');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    return [];
  }
}
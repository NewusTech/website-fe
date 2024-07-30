export async function getSeoPages() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/seo/pages/lists`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch project list');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    return [];
  }
}
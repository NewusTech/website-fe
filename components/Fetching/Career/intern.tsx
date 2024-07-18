export async function getInternRecruit() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/internrecruitment/get`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch blog list');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    return [];
  }
}
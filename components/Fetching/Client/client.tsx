export async function getClientist() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/client/get`);
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
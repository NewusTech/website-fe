export async function getAboutCompany() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/aboutcompany/get`, {
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

export async function getSocialMedia() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/socialmedia/get`, {
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
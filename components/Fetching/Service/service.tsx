export async function getServiceList() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/service/get`, {
      cache: "no-store"
    });
    if (!response.ok) {
      throw new Error('Failed to fetch service list');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    return [];
  }
}

export async function getServiceDetail(slug: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/${slug}/service/detail`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error('Failed to fetch service detail');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    return [];
  }
}
export async function getJobList() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/jobrecruitment/lists`, {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch blog list');
    }
    const data = await response.json();
    return data.jobRecruitment;
  } catch (error) {
    console.error('Error fetching blog list:', error);
    return [];
  }
}
import CareerLayout from "@/components/Career";
import { getJobList } from "@/components/Fetching/Career/career";
import Header from "@/components/shared/Header/HeaderCareer";
export const dynamic = 'force-dynamic';

export default async function CareerPage() {
  const dataJobs = await getJobList()

  return (
    <section className="md:min-h-[1200px] bg-white overflow-hidden">
      <Header />
      <CareerLayout dataJobs={dataJobs} />
    </section>
  )
};

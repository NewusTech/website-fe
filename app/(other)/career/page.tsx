import CareerLayout from "@/components/Career";
import { getCategoryJobs, getJobList } from "@/components/Fetching/Career/career";
import { getInternRecruit } from "@/components/Fetching/Career/intern";
import Header from "@/components/shared/Header/HeaderCareer";
export const dynamic = 'force-dynamic';

export default async function CareerPage() {
  const dataJobs = await getJobList()
  const categoryJobs = await getCategoryJobs()
  const dataIntern = await getInternRecruit()

  return (
    <section className="md:min-h-[1200px] bg-white overflow-hidden">
      <Header />
      <CareerLayout dataJobs={dataJobs} categoryJobs={categoryJobs} dataIntern={dataIntern} />
    </section>
  )
};

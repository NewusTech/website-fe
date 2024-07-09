import CareerLayout from "@/components/Career";
import Header from "@/components/shared/Header/HeaderCareer";
export const dynamic = 'force-dynamic';

const CareerPage = () => {
  return (
    <section className="md:min-h-[1200px] bg-white overflow-hidden">
      <Header
        image="/assets/images/career-header.svg"
      />
      <CareerLayout />
    </section>
  )
}

export default CareerPage;
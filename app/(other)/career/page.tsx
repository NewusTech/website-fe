import AboutLayout from "@/components/About";
import CareerLayout from "@/components/Career";
import Header from "@/components/shared/Header/HeaderCareer";

const CareerPage = () => {
  return (
    <section className="md:min-h-[1200px] bg-white">
      <Header
        image="/assets/images/career-header.svg"
      />
      <CareerLayout />
    </section>
  )
}

export default CareerPage;
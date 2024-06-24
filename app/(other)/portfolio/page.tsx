import PortLayout from "@/components/Portfolio"
import Header from "@/components/shared/Header/HeaderPort";

const PortofolioPage = () => {
  return (
    <section className="min-h-[1200px]">
      <Header
        type="Portfolio"
        title="Portfolio"
        image="/assets/images/header-port.jpg"
      />
      <PortLayout />
    </section>
  )
}

export default PortofolioPage;
import Header from "@/components/shared/Header/Header";
import WhatWeDo from "@/components/Service";
export const dynamic = 'force-dynamic';

const ServicePage = () => {
  return (
    <section className="overflow-hidden">
      <Header
        type="service"
        title="Service"
        image="/assets/images/header-service.jpg"
      />
      <WhatWeDo />
    </section>
  );
};

export default ServicePage;

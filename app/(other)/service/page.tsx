import Header from "@/components/shared/Header/Header";
import WhatWeDo from "@/components/Service";

const ServicePage = () => {
  return (
    <section>
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

import TabsProject from "@/components/SuccessProject/TabsProject";
import CardListProject from "@/components/SuccessProject/CardListProject";

const SuccessProject = () => {
  return (
    <section className="my-[130px] mx-auto container">
      <div>
        <h1 className="text-blue font-semibold text-[32px]">Success Project</h1>
        <TabsProject />
      </div>
    </section>
  );
};

export default SuccessProject;

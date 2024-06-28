const Box = ({ title, description, bgImage }: any) => (
  <div
    className="w-full md:w-full h-full p-[60px] bg-cover bg-center text-white"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <h1 className="md:text-[36px] font-bold pb-3 md:pb-0">{title}</h1>
    <p className="text-[12px] md:text-[20px]">{description}</p>
  </div>
);

export default Box;
const Box = ({ title, description, bgImage }: any) => (
  <div
    className="w-full md:w-1/4 h-full p-[60px] bg-cover bg-center text-white"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <h1 className="text-[36px] font-bold">{title}</h1>
    <p className="text-[20px]">{description}</p>
  </div>
);

export default Box;
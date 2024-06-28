const Box = ({ title, description, image }: any) => (
  <div
    className="w-full min-h-[100px] md:w-full md:min-h-[350px] md:p-[20px]  bg-center text-black bg-cover"
    style={{ backgroundImage: `url(${image})` }}
  >
    <h1 className="text-[8px] text-center md:text-[26px] font-bold pt-5 md:pb-4">{title}</h1>
    <p className="text-[5px] text-center md:text-[20px] capitalize font-semibold">{description}</p>
  </div>
);

export default Box;
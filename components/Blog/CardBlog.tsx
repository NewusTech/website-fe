import Image from "next/image";

const CardBlog = () => {
  return (
    <div className="bg-white rounded-[10px] p-5 w-[390px] h-[465px]">
      <Image
        src="/assets/images/blog.jpg"
        alt="blog"
        width={326}
        height={233}
        className="rounded-[10px] w-full"
      />
      <div className="mt-4">
        <div className="flex items-center gap-1.5 text-dark">
          <h5>Lorenka </h5>
          <div className="rounded-full w-[5px] h-[5px] bg-dark"></div>
          <h5> January 13, 2024</h5>
        </div>
        <div className="flex items-start gap-2 my-4 justify-between">
          <h3 className="font-medium text-dark text-xl w-[291px]">
            Lorem Ipsum Dolor Amet Amit Amon Amin
          </h3>
          <Image
            src="/assets/icons/arrow-up-right-black.svg"
            alt="arrow up"
            width={24}
            height={24}
          />
        </div>
        <p className="text-sm text-gray">
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
          Terabel pov astrobel ?
        </p>
        <div className="flex gap-1 mt-4">
          <div className="bg-gray rounded-full px-[10px] py-1">
            <p className="text-gray-2 text-xs">Technology</p>
          </div>
          <div className="bg-gray rounded-full px-[10px] py-1">
            <p className="text-gray-2 text-xs">SEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;

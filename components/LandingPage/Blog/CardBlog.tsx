import { formattedDate } from "@/utils/blog";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  id: number,
  title: string;
  slug: string,
  keyword: string,
  excerpt: string,
  body: string,
  kategoriblog_id: number,
  kategoriblog_title: string,
  tagblog_id: number,
  tagblog_title: string,
  user_id: number,
  user_title: string,
  image: any,
  status: boolean,
  status_desc: string,
  publishAt: Date | string,
  createdAt: Date;
  updatedAt: Date;
}

interface CardBlogProps {
  blogs?: BlogProps;
  type?: string;
}

const CardBlog = ({ blogs = {} as BlogProps, type }: CardBlogProps) => {
  const { id, title, body, image, user_title, publishAt, slug, excerpt, kategoriblog_title, tagblog_title } = blogs;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      // style={{ border: '1.6px solid white' }}
      className={`${type === "landing"
        ? "bg-[#14141F] text-white flex-row md:flex-col rounded-[6px] md:rounded-[10px] md:p-5 md:w-[100%] w-full h-[97px] md:h-auto shadow gap-3 shadow-white"
        : "bg-transparent flex-col md:w-[410px] h-full rounded-[2px]"
        } flex`}
    >
      <div
        className={`${type === "landing"
          ? "md:w-full w-[40%] md:h-[233px] h-full rounded-l-[6px] md:rounded-[10px]"
          : "rounded-[2px] md:w-full"
          }`}
      >
        <Image
          src={`${image ? `${image}` : '/assets/images/blog.jpg'}`}
          alt="blog"
          width={326}
          height={233}
          className={`${type === "landing"
            ? "w-full h-full object-cover md:rounded-[10px] rounded-l-[6px]"
            : "rounded-[2px] md:w-full"
            }
          `}
        />
      </div>
      <div
        className={`${type === "landing" ? "md:mt-3 w-[70%] md:w-full mt-2 mr-2 md:ml-0" : "my-1"}`}
      >
        <div className="flex items-center justify-between gap-1.5 text-white">
          <div className="flex items-center gap-1 md:gap-2">
            <h5 className="md:text-[14px] text-[8px]">{user_title ? user_title : 'Lorenka'}</h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-white"></div>
            <h5 className="md:text-[14px] text-[8px]">{publishAt ? formattedDate(publishAt) : 'January 13, 2024'}</h5>
          </div>
          <Link className="block md:hidden" href={`/blog/${slug}`}>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow up"
              width={24}
              height={24}
              className="w-3 h-3"
            />
          </Link>
        </div>
        <div className="flex items-start w-full md:gap-2 my-1 md:my-3 justify-between">
          <Link className="font-medium text-white md:text-xl text-[10px] w-[150px] md:w-[291px] pb-2 hover:underline" href={`/blog/${slug}`}>
            {title ? title : 'Lorem Ipsum'}
          </Link>
          <Link className="hidden md:block" href={`/blog/${slug}`}>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow up"
              width={32}
              height={32}
              className="w-5 h-5"
            />
          </Link>
        </div>
        <p
          className={`${type === "landing" ? "-mt-2 md:text-sm w-[182px] md:w-full" : "w-[142px] md:w-full -mt-3"} text-[8px] md:text-sm text-gray line-clamp-2`}
        >
          {body ? body : "Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel ?"}
        </p>
        <div className="flex gap-1 pt-1 items-end">
          <div className="bg-[#480DEC] rounded-full px-[10px] py-[2px] md:py-1">
            <p className="text-white md:text-xs text-[8px]">{tagblog_title}</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CardBlog;

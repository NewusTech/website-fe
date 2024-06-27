import { formattedDate } from "@/utils/blog";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
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
  image: string | null,
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

const CardBlog = ({ blogs = {} as any, type }: any) => {
  const { id, title, body, user_title, publishAt, excerpt, kategoriblog_title, tagblog_title } = blogs;

  return (
    <div
      className={`${type === "landing"
        ? "bg-white flex-row md:flex-col rounded-[6px] md:rounded-[10px] md:p-5 md:w-[390px] w-full h-[97px] md:h-[465px]"
        : "bg-transparent flex-col  md:w-[410px] h-full rounded-[2px]"
        } flex`}
    >
      <div
        className={`${type === "landing"
          ? "md:w-full md:h-[233px] w-[118px] h-full rounded-l-[6px] md:rounded-[10px]"
          : "rounded-[2px] md:w-full"
          }`}
      >
        <Image
          src="/assets/images/blog.jpg"
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
        className={`${type === "landing" ? "md:mt-3 mt-2 mx-4 md:ml-0" : "my-1"}`}
      >
        <div className="flex items-center justify-between gap-1.5 text-dark">
          <div className="flex items-center gap-1 md:gap-2">
            <h5 className="md:text-[14px] text-[6px]">{user_title ? user_title : 'Lorenka'}</h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-dark"></div>
            <h5 className="md:text-[14px] text-[6px]">{publishAt ? formattedDate(publishAt) : 'January 13, 2024'}</h5>
          </div>
          <Link className="md:hidden" href={`/blog/${id}`}>
            <Image
              src="/assets/icons/arrow-up-right-black.svg"
              alt="arrow up"
              width={24}
              height={24}
              className="md:w-6 md:h-6 w-3 h-3"
            />
          </Link>
        </div>
        <div className="flex items-start w-full md:gap-2 my-1 md:my-4 justify-between">
          <h3 className="font-medium text-dark md:text-xl text-[6px] w-[150px] md:w-[291px]">
            {title ? title : 'Lorem Ipsum'}
          </h3>
          <Link className="hidden md:block" href={`/blog/${id}`}>
            <Image
              src="/assets/icons/arrow-up-right-black.svg"
              alt="arrow up"
              width={24}
              height={24}
              className="md:w-6 md:h-6 w-3 h-3"
            />
          </Link>
        </div>
        <p
          className={`${type === "landing" ? "md:text-sm w-[182px] md:w-full" : "w-[142px] md:w-full -mt-1"} text-[6px] md:text-sm text-gray`}
        >
          {body ? body : "Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel ?"}
        </p>
        <div className="flex gap-1 mt-3 md:mt-4">
          <div className="bg-gray rounded-full px-[10px] py-1">
            <p className="text-gray-2 md:text-xs text-[6px]">{tagblog_title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;

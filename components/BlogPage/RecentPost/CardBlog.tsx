import { removeHTMLTags } from "@/lib/utils";
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
      className={`${type === "landing"
        ? "bg-white flex-row md:flex-col rounded-[6px] md:rounded-[10px] md:p-5 md:w-[100%] w-full h-[97px] md:h-auto shadow-sm gap-3 "
        : "bg-transparent flex-col md:w-[32.5%] 2xl:w-[32.8%] h-full rounded-[2px]"
        } flex`}
    >
      <div
        className={`${type === "landing"
          ? "md:w-full w-[40%] md:h-[200px] h-full rounded-l-[6px] md:rounded-[10px]"
          : "rounded-[2px] md:w-full h-[133px] xl:h-[233px] "
          }`}
      >
        <Image
          src={`${image || '/assets/images/blog.jpg'}`}
          alt="blog"
          width={326}
          height={233}
          className={`${type === "landing"
            ? "w-full h-[200px] object-cover md:rounded-[10px] rounded-l-[6px]"
            : "rounded-[2px] md:w-full h-full object-cover"
            }
          `}
        />
      </div>
      <div
        className={`${type === "landing" ? "w-[70%] md:w-full mt-2 mr-2 md:ml-0" : "my-1"}`}
      >
        <div className="flex items-center justify-between gap-1.5 text-dark">
          <div className="flex items-center gap-1 md:gap-2 pt-1">
            <h5 className="md:text-webDesk text-mobileDesk capitalize">{user_title ? user_title : 'Lorenka'}</h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-dark"></div>
            <h5 className="md:text-webDesk text-mobileDesk">{publishAt ? formattedDate(publishAt) : 'January 13, 2024'}</h5>
          </div>
          <Link className="md:hidden" href={`/${slug}`}>
            <Image
              src="/assets/icons/arrow-up-right-black.svg"
              alt="arrow up"
              width={24}
              height={24}
              className="md:w-6 md:h-6 w-3 h-3"
            />
          </Link>
        </div>
        <div className="flex items-start w-full md:gap-2 my-1 justify-between">
          <Link className="font-medium text-dark md:text-webJudul  text-mobileJudul w-[150px] md:w-[291px] pb-1 hover:underline line-clamp-2" href={`/${slug}`}>
            {title || 'Lorem Ipsum'}
          </Link>
          <Link className="hidden md:block" href={`/${slug}`}>
            <Image
              src="/assets/icons/arrow-up-right-black.svg"
              alt="arrow up"
              width={24}
              height={24}
              className="md:w-full md:h-full"
            />
          </Link>
        </div>
        <p
          className={`${type === "landing" ? "md:text-webDesk text-mobileDesk w-[182px] md:w-full" : "md:text-webDesk text-mobileDesk w-full "}  md:text-sm text-gray line-clamp-2 xl:line-clamp-2`}
        >
          {removeHTMLTags(body) || "Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel ?"}
        </p>
        <div className="flex gap-1 pt-2 md:items-end">
          <div className="bg-[#480DEC] rounded-full px-[10px] py-[2px] md:py-1">
            <p className="text-white md:text-webDesk text-mobileDesk">{tagblog_title}</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CardBlog;

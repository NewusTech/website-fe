import { removeHTMLTags } from "@/lib/utils";
import { formattedDate } from "@/utils/blog";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  id: number;
  title: string;
  slug: string;
  keyword: string;
  excerpt: string;
  body: string;
  altImage: string;
  kategoriblog_id: number;
  kategoriblog_title: string;
  tagblog_id: number;
  tagblog_title: string;
  user_id: number;
  user_title: string;
  image: any;
  status: boolean;
  status_desc: string;
  tags: {
    id: number;
    title: string;
  }[];
  publishAt: Date | string;
  createdAt: Date;
  updatedAt: Date;
}

interface CardBlogProps {
  blogs?: BlogProps;
  type?: string;
}

const CardBlog = ({ blogs = {} as BlogProps, type }: CardBlogProps) => {
  const {
    id,
    title,
    body,
    image,
    user_title,
    publishAt,
    slug,
    excerpt,
    kategoriblog_title,
    altImage,
    tagblog_title,
    tags,
  } = blogs;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`${
        type === "landing"
          ? "bg-[#14141F] text-white flex-row md:flex-col rounded-[6px] md:rounded-[10px] md:p-5 md:w-[100%] w-full h-full md:h-auto shadow gap-3 shadow-gray md:shadow-white"
          : "bg-transparent flex-col md:w-[410px] h-full rounded-[2px]"
      } flex`}
    >
      <div
        className={`${
          type === "landing"
            ? "md:w-full w-[40%] md:h-[233px] h-full rounded-l-[6px] md:rounded-[10px]"
            : "rounded-[2px] md:w-full"
        }`}
      >
        <Image
          src={image || "/assets/images/blog.jpg"}
          alt={altImage || "blog"}
          loading="lazy"
          width={326}
          height={233}
          className={`${
            type === "landing"
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
            <h5 className="md:text-webDesk text-mobileDesk capitalize">
              {user_title ? user_title : "Lorenka"}
            </h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-white"></div>
            <h5 className="md:text-webDesk text-mobileDesk">
              {publishAt ? formattedDate(publishAt) : "January 13, 2024"}
            </h5>
          </div>
          <Link className="block md:hidden" href={`/${slug}`}>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow up"
              loading="lazy"
              width={24}
              height={24}
              className="w-3 h-3"
            />
          </Link>
        </div>
        <div className="flex items-start w-full md:gap-2 my-1 md:my-3 justify-between">
          <Link
            className="font-medium text-white md:text-webSubjudul text-mobileSubjudul w-full md:w-11/12 hover:underline line-clamp-2"
            href={`/${slug}`}
          >
            {title ? title : "Lorem Ipsum"}
          </Link>
          <Link className="hidden md:flex w-1/12 justify-end" href={`/${slug}`}>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow up"
              width={32}
              height={32}
              className="w-4 h-4"
            />
          </Link>
        </div>
        <p
          className={`${type === "landing" ? "md:text-webDesk md:w-full" : "w-[142px] md:w-full"} pb-1 md:text-webDesk text-mobileDesk text-gray line-clamp-1 md:line-clamp-2`}
        >
          {removeHTMLTags(body) ||
            "Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel ?"}
        </p>
        <div className="overflow-y-auto scrollbar-thin">
          <div className="flex flex-row gap-1 pt-2 md:items-end w-full justify-start min-w-0">
            {tags.map((data) => (
              <Link
                key={data.id}
                href={`/blog?tag=${data.title}`}
                className="bg-[#480DEC] rounded-full px-[10px] py-[2px] md:py-1 flex-none text-white md:text-webDesk text-mobileDesk"
              >
                {data.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;

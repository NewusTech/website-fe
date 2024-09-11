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
  tags: {
    id: number;
    title: string;
  }[];
  status_desc: string;
  publishAt: Date | string;
  createdAt: Date;
  updatedAt: Date;
}

interface CardBlogProps {
  blogs?: BlogProps;
  type?: string;
}

const CardBlogSquare = ({ blogs = {} as BlogProps, type }: CardBlogProps) => {
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
          ? "bg-[#14141F] text-white flex-row md:flex-col rounded-[6px] md:rounded-[10px] md:p-5 w-full h-[104px] md:h-auto shadow-sm gap-3 border-[0.5px]"
          : "bg-transparent flex-row md:w-[410px] h-full rounded-[2px]"
      } flex gap-3`}
    >
      <div
        className={`${
          type === "landing"
            ? "md:w-full w-[30%] md:h-[233px] min-h-[104px] rounded-l-[6px] md:rounded-[10px]"
            : "rounded-[2px] w-4/12 md:w-5/12"
        }`}
      >
        <Image
          loading="lazy"
          src={image || "/assets/images/blog.jpg"}
          alt={altImage || "blog"}
          width={326}
          height={233}
          className={`${
            type === "landing"
              ? "md:h-[300px] h-full object-cover md:rounded-[10px] rounded-l-[6px]"
              : "rounded-[2px] md:w-full md:h-[150px] object-cover"
          }
          `}
        />
      </div>
      <div
        className={`${type === "landing" ? "md:mt-3 w-[70%] md:w-full mt-2 mr-2 md:ml-0" : "w-8/12 md:w-7/12"}`}
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
              width={24}
              height={24}
              className="w-3 h-3"
            />
          </Link>
        </div>
        <div className="flex items-start w-full md:gap-2 my-1 md:my-3 justify-between">
          <Link
            className="font-medium text-white md:text-webSubjudul text-mobileSubjudul mb-1 hover:underline text-wrap line-clamp-2 w-[95%]"
            href={`/${slug}`}
          >
            {title || "Lorem Ipsum"}
          </Link>
          <Link className="hidden md:block w-[5%]" href={`/${slug}`}>
            <Image
              src="/assets/icons/arrow.svg"
              alt="arrow up"
              width={32}
              height={32}
              className="w-3 h-3"
            />
          </Link>
        </div>
        <p
          className={`${type === "landing" ? "md:text-webDesk w-full" : "w-full -mt-3"} text-mobileDesk md:text-webDesk text-gray line-clamp-1 md:line-clamp-1`}
        >
          {removeHTMLTags(body) ||
            "Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel ?"}
        </p>
        <div className="flex gap-1 mt-3 md:items-end">
          {tags.map((data) => (
            <div
              key={data.id}
              className="bg-[#480DEC] rounded-full px-[10px] py-[2px] md:py-1"
            >
              <p className="text-white md:text-webDesk text-mobileDesk">
                {data.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardBlogSquare;

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
  kategoriblog_id: number;
  kategoriblog_title: string;
  tagblog_id: number;
  tagblog_title: string;
  user_id: number;
  user_title: string;
  image: any;
  status: boolean;
  status_desc: string;
  publishAt: Date | string;
  createdAt: Date;
  updatedAt: Date;
}

interface CardBlogProps {
  blogs?: BlogProps;
  type?: string;
}

const CardBlogSide = ({ blogs = {} as BlogProps, type }: CardBlogProps) => {
  const { id, title, body, image, user_title, publishAt, slug, excerpt, kategoriblog_title, tagblog_title } = blogs;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="bg-transparent flex w-full h-full rounded-[2px] gap-2"
    >
      <div
        className="w-[40%] h-[80px] overflow-hidden rounded-[2px]"
      >
        <Image
          src={`${image || '/assets/images/blog.jpg'}`}
          loading="lazy"
          alt="blog"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="w-[60%] flex flex-col"
      >
        <div>
          <div className="flex items-center gap-1 md:gap-2">
            <h5 className="md:text-webDesk text-mobileDesk capitalize">{user_title ? user_title : 'Lorenka'}</h5>
            <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-black"></div>
            <h5 className="md:text-webDesk text-mobileDesk">{publishAt ? formattedDate(publishAt) : 'January 13, 2024'}</h5>
          </div>
          <div className="flex items-start md:gap-2 mt-1 justify-between">
            <Link
              className="font-medium text-black md:text-webDesk text-mobileDesk  hover:underline line-clamp-3"
              href={`/${slug}`}
            >
              {title || 'Lorem Ipsum'}
              {/* {title ? truncateTitle(title, 80) : 'Lorem Ipsum'} */}
            </Link>
            {/* <Link className="hidden md:block" href={`/${slug}`}>
              <Image
                src="/assets/icons/arrow.svg"
                alt="arrow up"
                width={32}
                height={32}
                className="w-5 h-5"
              />
            </Link> */}
          </div>
          {/* <p className="text-black text-mobileDesk md:text-webDesk line-clamp-2">
            {body ? body : "Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig. Terabel pov astrobel ?"}
          </p> */}
        </div>
        {/* <div className="flex gap-1 mt-3 md:items-end">
          <div className="bg-[#480DEC] rounded-full px-[10px] py-[2px] md:py-1">
            <p className="md:text-webDesk text-white text-mobileDesk">{tagblog_title}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CardBlogSide;

const truncateTitle = (title: any, maxLength: any) => {
  if (title.length <= maxLength) return title;
  return title.slice(0, maxLength) + '...';
};
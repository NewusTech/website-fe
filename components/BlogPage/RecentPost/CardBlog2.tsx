import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formattedDate } from '@/utils/blog';
import { removeHTMLTags } from '@/lib/utils';

interface BlogProps {
  id?: number,
  title?: string;
  slug?: string,
  keyword?: string,
  excerpt?: string,
  body?: string,
  kategoriblog_id?: number,
  kategoriblog_title?: string,
  tagblog_id?: number,
  tagblog_title?: string,
  user_id?: number,
  user_title?: string,
  image: any,
  status?: boolean,
  status_desc?: string,
  publishAt?: any,
  createdAt?: Date;
  updatedAt: Date;
}

interface CardBlogProps {
  blogs?: BlogProps;
  type?: string;
}

const CardBlog2 = ({ blogs = {} as BlogProps, type }: CardBlogProps) => {
  const { title, body, user_title, publishAt, excerpt, kategoriblog_title, tagblog_title, image, slug, createdAt, updatedAt, id } = blogs;

  return (
    <div className="gap-2 flex w-full h-auto">
      <div className="w-[40%] max-h-[130px] rounded-[10px]">
        <Link href={`/${slug}`}>
          <Image
            src={image || '/assets/images/blog.jpg'}
            alt="blog"
            width={267}
            height={305}
            className="w-full h-full object-cover rounded-sm"
          />
        </Link>
      </div>
      <div className="w-[70%] flex flex-col">
        <div className="flex items-center gap-1.5 text-gray-2">
          <h5 className="capitalize text-webDesk">{user_title}</h5>
          <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-gray-2"></div>
          <h5 className="text-webDesk">{formattedDate(publishAt)}</h5>
        </div>
        <h3 className="py-1 font-medium text-dark  md:text-webSubjudul text-mobileJudul md:w-[246px] line-clamp-3 hover:underline">
          <Link href={`/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className="md:text-webDesk text-mobileDesk text-gray line-clamp-2 text-wrap">
          {removeHTMLTags(body)}
        </p>
        {/* <div className="flex gap-1 mt-3 md:mt-4">
          <div className="bg-gray rounded-full px-[10px] py-1">
            <p className="text-gray-2 md:text-xs text-[6px]">{tagblog_title}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CardBlog2
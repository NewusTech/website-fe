import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formattedDate } from '@/utils/blog';

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
    <div className="flex gap-4">
      <div className="w-[267px] h-[205px] rounded-[10px]">
        <Link href={`/blog/${slug}`}>
          <Image
            src={`${image ? `${image}` : '/assets/images/blog.jpg'}`}
            alt="blog"
            width={267}
            height={205}
            className="w-full h-full object-cover rounded-[10px]"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-gray-2 pt-2">
          <h5 className="md:text-[14px] text-[6px]">{user_title}</h5>
          <div className="rounded-full w-[3px] h-[3px] md:w-[5px] md:h-[5px] bg-gray-2"></div>
          <h5 className="md:text-[14px] text-[6px]">{formattedDate(publishAt)}</h5>
        </div>
        <h3 className="my-4 font-medium text-dark md:text-2xl text-[8px] md:w-[246px]">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className="md:text-sm text-[8px] text-gray w-[249px] md:w-[400px] line-clamp-3">
          {body}
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

export default CardBlog2
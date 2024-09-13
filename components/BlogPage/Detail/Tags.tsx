"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Blog {
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
  tags: {
    id: number;
    title: string;
  }[];
  publishAt: Date | string;
  createdAt: Date;
  updatedAt: Date;
}

type TagsDisplayProps = {
  blogs: Blog[];
};

const extractUniqueTags = (data: Blog[]): string[] => {
  // Menggabungkan semua tags dari setiap blog menjadi satu array
  const allTags = data.flatMap((blog) => blog.tags.map((tag) => tag.title));
  // Menghapus duplikat dengan Set dan mengubah kembali menjadi array
  return [...new Set(allTags)];
};

const TagsDisplay = (props: TagsDisplayProps) => {
  const { blogs } = props;

  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const uniqueTags = extractUniqueTags(blogs);
    setTags(uniqueTags);
  }, [blogs]);

  return (
    <div>
      <h1 className="text-mobileJudul md:text-webJudul font-bold pb-3">Tags</h1>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((data, index) => (
          <Link
            key={index}
            href={`/blog?tag=${data}`}
            className="rounded-sm bg-blue text-white px-3 py-1 text-sm cursor-pointer"
          >
            {data}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagsDisplay;

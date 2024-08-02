import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const BASE_URL = process.env.NEXT_PUBLIC_URL;

  const blog = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sitemap/blog`, {
    cache: "no-store",
  });
  const portofolio = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/sitemap/portofolio`,
    {
      cache: "no-store",
    }
  );
  const career = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/sitemap/career`,
    {
      cache: "no-store",
    }
  );
  const team = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sitemap/team`, {
    cache: "no-store",
  });

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/service`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/team`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/career`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/service`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/portofolio`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}

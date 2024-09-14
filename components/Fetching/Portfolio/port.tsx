export async function getProjectList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/portfolio/lists`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch project list");
    }
    const data = await response.json();
    return data.portfolios;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return [];
  }
}

export async function getProjectDetail(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/${slug}/portfolio/detail`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return null;
  }
}

export async function getProjectKategoriList() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/kategoriportofolio/get`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch project detail");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return [];
  }
}

export type responseGetPortofolio = {
  id: number;
  title: string;
  slug: string;
  keyword: string;
  excerpt: string;
  body: string;
  image: string;
  altImage: string;
  logo: string;
  portfolioYear: string;
  webLink: string;
  appsLink: string;
  KategoriportofolioId: number;
  TagportofolioId: number;
  TechnologyPortofolioId: number;
  closingDescription: string;
  testimony: null | string;
  nameTestimony: null | string;
  dateTestimony: null | string;
  createdAt: string;
  updatedAt: string;
  Kategoriportofolio: {
    title: string;
    createdAt: string;
  };
  tags: { id: string; title: string }[];
  techs: {
    id: number;
    PortofolioId: number;
    TechnologyPortofolioId: number;
    tech: {
      title: string;
      image: string;
    };
  }[];
  galeri: [];
};

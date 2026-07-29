import { apiFetch, buildQuery, type PaginationMeta } from "./client";
import { adminMutateWithFile } from "./adminMutate";
import type { BlogArticle, ContentStatus } from "./types";

interface RawBlog {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  category_id: number | null;
  category_name: string | null;
  category_slug: string | null;
  author_name: string | null;
  cover_image_url: string | null;
  status: ContentStatus;
  is_featured: number;
  read_time_minutes: number | null;
  published_at: string | null;
}

function mapBlog(raw: RawBlog): BlogArticle {
  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt,
    content: raw.content,
    categoryId: raw.category_id,
    categoryName: raw.category_name,
    categorySlug: raw.category_slug,
    authorName: raw.author_name,
    coverImageUrl: raw.cover_image_url,
    status: raw.status,
    isFeatured: Boolean(raw.is_featured),
    readTimeMinutes: raw.read_time_minutes,
    publishedAt: raw.published_at,
  };
}

export interface GetBlogsParams {
  status?: string;
  category?: string;
  featured?: boolean;
  search?: string;
  page?: number;
  limit?: number;
}

export async function getBlogs(
  params: GetBlogsParams = {}
): Promise<{ items: BlogArticle[]; meta?: PaginationMeta }> {
  const query = buildQuery({ ...params, featured: params.featured ? "true" : undefined });
  const { data, meta } = await apiFetch<RawBlog[]>(`/blogs${query}`);
  return { items: data.map(mapBlog), meta };
}

export async function getBlogBySlug(slug: string): Promise<BlogArticle> {
  const { data } = await apiFetch<RawBlog>(`/blogs/slug/${slug}`);
  return mapBlog(data);
}

export async function getFeaturedBlog(): Promise<BlogArticle | null> {
  const { items } = await getBlogs({ status: "published", featured: true, limit: 1 });
  return items[0] || null;
}

export async function createBlog(fields: Record<string, unknown>, file: File | null, token: string): Promise<BlogArticle> {
  const raw = await adminMutateWithFile<RawBlog>("/blogs", "POST", fields, file, "coverImage", token);
  return mapBlog(raw);
}

export async function updateBlog(
  id: number,
  fields: Record<string, unknown>,
  file: File | null,
  token: string
): Promise<BlogArticle> {
  const raw = await adminMutateWithFile<RawBlog>(`/blogs/${id}`, "PUT", fields, file, "coverImage", token);
  return mapBlog(raw);
}

export async function deleteBlog(id: number, token: string): Promise<void> {
  await apiFetch(`/blogs/${id}`, { method: "DELETE", token, revalidate: false });
}

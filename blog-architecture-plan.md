# Blog System Architecture Plan

## 1. Cấu trúc thư mục (Tối ưu)

```
src/
├── app/
│   └── blog/
│       ├── page.tsx                 # Trang danh sách blog
│       └── [slug]/
│           └── page.tsx            # Dynamic route - parser markdown và render
├── components/
│   └── blog/
│       ├── BlogCard.tsx            # Card preview + metadata display
│       ├── BlogList.tsx            # List + pagination + filters + search
│       └── BlogPost.tsx            # Full post render + navigation
├── data/
│   └── blog/
│       ├── posts/
│       │   ├── 2024-01-15-first-blog-post.md
│       │   ├── 2024-02-20-react-tips.md
│       │   └── 2024-03-10-nextjs-guide.md
│       └── config.ts               # Categories, tags, và blog config
└── lib/
    └── blog.ts                     # Tất cả blog utilities trong 1 file

public/
└── images/
    └── blog/
        ├── 2024-01-15-first-blog-post/
        │   ├── hero.jpg
        │   └── diagram.png
        └── 2024-02-20-react-tips/
            └── hero.jpg
```

## 2. Format file markdown chuẩn

```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn gọn cho SEO và preview"
date: "2024-01-15"
author: "Tên tác giả"
category: "AI & ML"
tags: ["artificial-intelligence", "machine-learning", "deep-learning"]
image: "/images/blog/2024-01-15-first-blog-post/hero.jpg"
published: "published" # hoặc "draft"
---

# Tiêu đề chính của bài viết

Đoạn mở đầu giới thiệu về bài viết...

## Phần 1: Giới thiệu

Nội dung phần 1...

![Mô tả ảnh](/images/blog/2024-01-15-first-blog-post/diagram-1.png)

## Phần 2: Nội dung chính

Nội dung chi tiết...

### Phần con 2.1

Chi tiết hơn...

![Screenshot minh họa](/images/blog/2024-01-15-first-blog-post/screenshot-2.jpg)

## Kết luận

Tóm tắt và kết luận...
```

## 3. TypeScript Types (Trong lib/blog.ts)

```typescript
// Tất cả types trong lib/blog.ts
export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    image: string;
    published: "published" | "draft";
    content: string;
    readTime?: string;
}

export interface BlogMetadata {
    title: string;
    description: string;
    date: string;
    author: string;
    category: string;
    tags: string[];
    image: string;
    published: "published" | "draft";
}
```

## 4. Tính năng chính

### 4.1 Trang danh sách blog (`/blog`)

-   Hiển thị tất cả bài viết đã published
-   Pagination (10 bài/trang)
-   Filter theo category và tags
-   Search theo title/description/content
-   Sort theo date (mới nhất trước)

### 4.2 Trang chi tiết blog (`/blog/[slug]`)

-   **Dynamic parsing**: Đọc file markdown từ `data/blog/posts/` theo slug
-   **Real-time rendering**: Parse markdown và render thành HTML
-   Navigation đến bài trước/sau
-   Hiển thị metadata (author, date, tags, category)
-   Related posts (cùng category hoặc tags)
-   SEO optimization với metadata từ frontmatter

### 4.3 Filter và Search (trong trang danh sách)

-   Filter theo category: URL params `?category=AI%20%26%20ML`
-   Filter theo tags: URL params `?tag=machine-learning`
-   Search: URL params `?search=keyword`
-   Combine filters: `?category=AI&tag=deep-learning&search=neural`

## 5. Quy tắc đặt tên file

### 5.1 File markdown

Format: `YYYY-MM-DD-slug.md`

-   `2024-01-15-introduction-to-ai.md`
-   `2024-02-20-react-best-practices.md`

### 5.2 Thư mục ảnh

Format: `YYYY-MM-DD-slug/`

-   `/images/blog/2024-01-15-introduction-to-ai/`
-   `/images/blog/2024-02-20-react-best-practices/`

### 5.3 Slug generation

-   Từ filename: `2024-01-15-introduction-to-ai.md` → slug: `introduction-to-ai`
-   URL: `/blog/introduction-to-ai`

## 6. SEO & Performance

### 6.1 SEO

-   Metadata từ frontmatter
-   Open Graph tags
-   Structured data (JSON-LD)
-   Sitemap generation

### 6.2 Performance

-   Static generation với Next.js
-   Image optimization
-   Lazy loading cho ảnh
-   Code splitting

## 7. Development workflow

### 7.1 Tạo bài viết mới

1. Tạo file markdown với format chuẩn
2. Tạo thư mục ảnh tương ứng
3. Set `published: "draft"` khi đang viết
4. Set `published: "published"` khi hoàn thành

### 7.2 Quản lý ảnh

-   Ảnh hero: `hero.jpg` (1200x630px cho OG image)
-   Ảnh trong bài: tên mô tả rõ ràng
-   Optimize ảnh trước khi commit

## 8. Components (Chỉ 3 file)

### 8.1 BlogCard.tsx

-   Preview card cho danh sách
-   Hiển thị metadata (author, date, tags, category)
-   Link đến bài viết chi tiết

### 8.2 BlogList.tsx

-   Danh sách blog với pagination
-   Search bar tích hợp
-   Category và tag filters
-   Sort options

### 8.3 BlogPost.tsx

-   Render markdown content thành HTML
-   Previous/Next navigation
-   Related posts
-   Full metadata display

## 9. Utils functions (Tất cả trong lib/blog.ts)

```typescript
// lib/blog.ts - Single file chứa tất cả logic
export class BlogService {
    // Core functions
    static getAllPosts(): BlogPost[];
    static getPostBySlug(slug: string): BlogPost | null;
    static parseMarkdownFile(filePath: string): BlogPost;

    // Filter & Search
    static filterPosts(
        posts: BlogPost[],
        filters: {
            category?: string;
            tag?: string;
            search?: string;
        }
    ): BlogPost[];

    // Utilities
    static generateSlug(filename: string): string;
    static calculateReadTime(content: string): string;
    static getRelatedPosts(post: BlogPost, allPosts: BlogPost[]): BlogPost[];
}
```

**Chỉ 1 file utils duy nhất** thay vì 12 functions riêng lẻ

## 10. Dynamic Routing Flow

### 10.1 Blog List Page (`/blog`)

```
1. getAllPosts() → scan data/blog/posts/*.md
2. Parse frontmatter từ tất cả files
3. Filter published posts only
4. Apply search/category/tag filters từ URL params
5. Sort by date descending
6. Paginate results
7. Render BlogList component
```

### 10.2 Blog Detail Page (`/blog/[slug]`)

```
1. Extract slug từ URL params
2. getPostBySlug(slug) → tìm file tương ứng
3. readMarkdownFile() → đọc full content
4. parseFrontmatter() → extract metadata
5. parseMarkdown() → convert content to HTML
6. getRelatedPosts() → tìm bài liên quan
7. Render BlogPost component với parsed content
```

## 11. Key Benefits của Dynamic Parsing

### 11.1 Advantages

-   **No build-time dependency**: Thêm bài mới chỉ cần drop file .md
-   **Real-time updates**: Không cần rebuild khi có bài mới
-   **Flexible content**: Có thể edit markdown và thấy ngay kết quả
-   **Simple deployment**: Chỉ cần upload file .md lên server

### 11.2 Performance Considerations

-   Cache parsed content trong memory/Redis
-   Use Next.js ISR (Incremental Static Regeneration)
-   Lazy load images trong markdown content
-   Implement proper error handling cho missing files

## 12. Implementation Order (Tối ưu)

### Phase 1: Core Setup

1. Tạo `data/blog/config.ts` - categories và tags
2. Tạo `lib/blog.ts` - tất cả logic trong 1 file
3. Tạo 1-2 file markdown mẫu để test

### Phase 2: Components

4. Tạo `BlogCard.tsx` - component đơn giản nhất
5. Tạo `BlogList.tsx` - tích hợp search/filter
6. Tạo `BlogPost.tsx` - render markdown

### Phase 3: Pages

7. Setup `/blog` page - danh sách
8. Setup `/blog/[slug]` page - dynamic routing
9. Test và optimize

**Tổng cộng chỉ 8 files cần tạo:**

-   1 config file
-   1 utils file
-   3 components
-   2 pages
-   1-2 markdown samples

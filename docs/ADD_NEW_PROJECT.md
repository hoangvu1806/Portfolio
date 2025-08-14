# Hướng dẫn thêm Project mới

## 🎯 Tổng quan
Để thêm một project mới vào portfolio, bạn cần thực hiện 3 bước chính:
1. Chuẩn bị và upload ảnh
2. Cập nhật data trong profile.ts
3. Test và verify

## 📁 Bước 1: Chuẩn bị ảnh

### 1.1 Tạo thư mục cho project
```bash
# Tạo thư mục với tên slug của project
mkdir public/images/projects/my-new-project
```

### 1.2 Chuẩn bị ảnh với kích thước chuẩn
- **hero.jpg**: Ảnh chính (1920x1080 hoặc 16:9 ratio)
- **thumbnail.jpg**: Ảnh nhỏ (400x300 hoặc 4:3 ratio)
- **demo-1.jpg, demo-2.jpg**: Ảnh demo (tùy chọn)
- **architecture.png**: Sơ đồ kiến trúc (tùy chọn)
- **interface.png**: Giao diện (tùy chọn)

### 1.3 Tối ưu ảnh
- Nén ảnh để giảm dung lượng (80-90% quality)
- Format: JPG cho photos, PNG cho screenshots, SVG cho icons
- Đặt tên file đúng convention

## 📝 Bước 2: Cập nhật Data

### 2.1 Thêm project slug vào mapping
Trong `src/data/profile.ts`, thêm vào `projectSlugs`:

```typescript
const projectSlugs = {
    // ... existing projects
    "My New Project": "my-new-project", // Thêm dòng này
};
```

### 2.2 Thêm project vào danh sách
Có 2 nơi có thể thêm:

#### A. Main Projects (profile.projects)
Cho các project chính, enterprise, hoặc featured:

```typescript
projects: [
    // ... existing projects
    {
        title: "MY NEW PROJECT",
        type: "Web App", // hoặc "AI & ML", "Enterprise Solution"
        description: "Mô tả ngắn gọn về project...",
        details: [
            "Chi tiết tính năng 1",
            "Chi tiết tính năng 2",
            "Chi tiết tính năng 3",
        ],
        featured: true, // true nếu muốn hiện ở homepage
        image: getProjectImage(projectSlugs["My New Project"], 'hero'),
        thumbnail: getProjectImage(projectSlugs["My New Project"], 'thumbnail'),
        demoUrl: "https://demo-link.com", // tùy chọn
        githubUrl: "https://github.com/username/repo", // tùy chọn
        status: "Completed", // hoặc "In Development", "In Planning"
    },
],
```

#### B. Personal Projects (profile.personalProjects)
Cho các side projects, học tập:

```typescript
personalProjects: [
    // ... existing projects
    {
        title: "My New Project",
        type: "Web App",
        description: "Mô tả project...",
        details: [
            "Tính năng 1",
            "Tính năng 2",
        ],
        image: getProjectImage(projectSlugs["My New Project"], 'hero'),
        thumbnail: getProjectImage(projectSlugs["My New Project"], 'thumbnail'),
        githubUrl: "https://github.com/username/repo",
        featured: true, // nếu muốn hiện ở homepage
    },
],
```

## 🔧 Bước 3: Test và Verify

### 3.1 Kiểm tra ảnh
- Truy cập trực tiếp: `http://localhost:3000/images/projects/my-new-project/hero.jpg`
- Đảm bảo ảnh load được

### 3.2 Kiểm tra hiển thị
- Vào trang Projects: `http://localhost:3000/projects`
- Kiểm tra project mới có hiện không
- Test zoom ảnh bằng cách click vào

### 3.3 Kiểm tra featured (nếu có)
- Vào homepage: `http://localhost:3000`
- Kiểm tra section "Featured Projects"

## 📋 Template Project Object

```typescript
{
    title: "PROJECT NAME", // Tên hiển thị
    type: "Web App", // Loại project
    description: "Short description here...", // Mô tả ngắn
    details: [ // Chi tiết tính năng
        "Feature 1 description",
        "Feature 2 description", 
        "Feature 3 description",
    ],
    featured: true, // Hiện ở homepage
    image: getProjectImage(projectSlugs["PROJECT NAME"], 'hero'),
    thumbnail: getProjectImage(projectSlugs["PROJECT NAME"], 'thumbnail'),
    demoUrl: "https://demo.com", // Optional
    githubUrl: "https://github.com/user/repo", // Optional
    status: "Completed", // Optional
},
```

## 🎨 Project Types
- `"AI & ML"`: Machine Learning, AI projects
- `"Web App"`: Web applications
- `"Enterprise Solution"`: Enterprise projects
- `"Personal Project"`: Side projects
- `"Academic Group Project"`: School projects
- `"Research"`: Research projects

## ✅ Checklist
- [ ] Tạo thư mục project trong `/public/images/projects/`
- [ ] Upload ảnh hero.jpg và thumbnail.jpg
- [ ] Thêm project slug vào `projectSlugs`
- [ ] Thêm project object vào `projects` hoặc `personalProjects`
- [ ] Test ảnh load được
- [ ] Test hiển thị trong projects page
- [ ] Test zoom functionality
- [ ] Kiểm tra featured projects (nếu có)

## 🚨 Lưu ý
- Tên thư mục phải match với slug trong `projectSlugs`
- Ảnh phải có đúng tên: `hero.jpg`, `thumbnail.jpg`
- Description nên ngắn gọn, details mới chi tiết
- Featured projects sẽ hiện ở homepage (tối đa 3-4 projects)
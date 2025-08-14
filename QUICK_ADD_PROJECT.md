# 🚀 QUICK ADD PROJECT

## 📋 Checklist nhanh

### ✅ Bước 1: Ảnh
```bash
# Tạo thư mục
mkdir public/images/projects/my-project-slug

# Upload 2 file bắt buộc:
# - hero.jpg (1920x1080)  
# - thumbnail.jpg (400x300)
```

### ✅ Bước 2: Code
Trong `src/data/profile.ts`:

```typescript
// 1. Thêm slug
const projectSlugs = {
    // ... existing
    "My Project": "my-project-slug",
};

// 2. Thêm project
personalProjects: [ // hoặc projects:
    // ... existing
    {
        title: "My Project",
        type: "Web App", 
        description: "Short description...",
        details: ["Feature 1", "Feature 2"],
        image: getProjectImage(projectSlugs["My Project"], 'hero'),
        thumbnail: getProjectImage(projectSlugs["My Project"], 'thumbnail'),
        githubUrl: "https://github.com/...",
        featured: true, // optional
    },
],
```

### ✅ Bước 3: Test
- Visit: `http://localhost:3000/projects`
- Click ảnh để test zoom
- Check homepage nếu `featured: true`

## 🎯 Project Types
- `"AI & ML"` - Machine Learning
- `"Web App"` - Web applications  
- `"Enterprise Solution"` - Business projects
- `"Personal Project"` - Side projects

## 🛠️ Auto Script
```bash
# Tự động tạo structure (interactive)
npm run add-project

# Hoặc trực tiếp
node scripts/add-project.js
```

## 📖 Chi tiết
- Full guide: `docs/ADD_NEW_PROJECT.md`
- Example: `examples/project-example.js`
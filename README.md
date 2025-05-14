# Do Hoang Vu's Portfolio Website

A modern, cyberpunk-themed personal portfolio website showcasing my skills, projects, and experience as an AI Engineer. The site features dynamic particle backgrounds, neon glowing text effects, and glass-morphism UI elements.

![Portfolio Preview](public/screenshot.png)

## ✨ Features

-   Modern cyberpunk design with neon colors and dynamic elements
-   Interactive particle system background
-   Glass-morphism UI components with hover effects
-   Dark/light mode with theme persistence
-   Responsive design for all device sizes
-   Smooth animations and transitions using Framer Motion and GSAP
-   TypeScript for type safety and better developer experience

## 🛠️ Tech Stack

-   **Framework**: Next.js 15.3.2 (React 19)
-   **Styling**: Tailwind CSS 4.1.6
-   **Language**: TypeScript
-   **Animations**: Framer Motion & GSAP
-   **Icons**: React Icons
-   **Theming**: next-themes
-   **Development**: Turbopack for fast refresh

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:8001](http://localhost:8001) in your browser.

## 🐳 Docker Setup

You can also run the application using Docker:

1. Build the Docker image:

```bash
docker build -t portfolio:latest .
```

2. Run the container:

```bash
docker run -p 8000:8000 -d --restart unless-stopped --name portfolio-container portfolio:latest
```

3. Or use the provided scripts:

-   Linux/macOS:

```bash
chmod +x run.sh
./run.sh
```

-   Windows:

```
run.bat
```

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   └── ui/           # UI components
│   └── data/             # Static data
├── public/               # Static assets
└── ...
```

## 🔧 Key Components

-   **DynamicBackground**: Canvas-based particle system for interactive backgrounds
-   **GlowingText**: Text components with neon glow effects
-   **GlassCard**: Modern glass-morphism cards with hover effects
-   **ThemeToggle**: Dark/light mode toggle button

## 📱 Responsive Design

The website is fully responsive with optimizations for:

-   Mobile devices
-   Tablets
-   Desktops
-   Large screens

## 📝 License

MIT

import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "VU HOANG | AI-DEAS FOR BRIGHT MINDS",
    description:
        "Personal portfolio of VU HOANG, an AI Engineer specializing in Generative AI, NLP, and Computer Vision",
    keywords: [
        "AI Engineer",
        "Machine Learning",
        "Deep Learning",
        "Portfolio",
        "NextJS",
        "React",
    ],
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
    manifest: "/manifest.json",
    themeColor: "#030712",
    appleWebApp: {
        title: "VU HOANG",
        statusBarStyle: "black-translucent",
    },
};

export const viewport: Viewport = {
    themeColor: "#030712",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    );
}

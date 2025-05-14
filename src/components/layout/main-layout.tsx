"use client";

import { Header } from "./header";
import { Footer } from "./footer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <AnimatePresence mode="wait">
                <motion.main
                    key={pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex-grow"
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

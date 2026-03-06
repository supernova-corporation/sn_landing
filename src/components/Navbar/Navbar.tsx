"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Logo as CommonLogo } from "../common/logo";

/**
 * Supernova Logo Component
 * @returns JSX.Element
 */
const Logo = () => (
    <Link href="/" className="flex items-center gap-[11px] no-underline group relative z-[210]">
        <CommonLogo size={30} />
        <div>
            <div className="font-display font-black text-[17px] tracking-[0.14em] uppercase text-text-main">
                Supernova
            </div>
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-text-muted block">
                Log-Tech
            </span>
        </div>
    </Link>
);

/**
 * Navbar Component
 * @returns JSX.Element
 */
export const NavbarContent = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: "The Reality", href: "#truth" },
        { label: "What We Are", href: "#infra" },
        { label: "How It Works", href: "#hiw" },
        { label: "Roadmap", href: "#roadmap" },
        { label: "Team", href: "#team" },
    ];

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as any,
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as any,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 },
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-[24px] md:px-[52px] h-[68px] bg-dark/95 backdrop-blur-[24px] border-b border-border-subtle">
            <div className="w-6xl mx-auto flex items-center justify-between">
                <Logo />


                <div className="flex items-center gap-[32px]">
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex gap-[26px] list-none m-0 p-0">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="font-mono text-[11px] tracking-[0.18em] uppercase text-text-muted no-underline transition-colors duration-200 hover:text-text-main"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/login"
                        className="hidden lg:block font-mono text-[11px] tracking-[0.18em] uppercase text-dark bg-teal px-[22px] py-[10px] no-underline font-medium transition-colors duration-200 hover:bg-[#00d9a8] whitespace-nowrap"
                    >
                        Log In
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative z-[210] p-2 -mr-2 text-text-main hover:text-teal transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-dark z-[205] flex flex-col items-center justify-center p-[40px] lg:hidden h-screen"
                    >
                        <ul className="flex flex-col items-center gap-[40px] list-none m-0 p-0">
                            {links.map((link) => (
                                <motion.li key={link.href} variants={linkVariants}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-display font-black text-[32px] tracking-[0.05em] uppercase text-text-main hover:text-teal transition-colors no-underline"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li variants={linkVariants}>
                                <Link
                                    href="/login"
                                    onClick={() => setIsOpen(false)}
                                    className="font-mono text-[14px] tracking-[0.2em] uppercase text-dark bg-teal px-[48px] py-[16px] no-underline font-medium transition-colors duration-200 hover:bg-[#00d9a8]"
                                >
                                    Log In
                                </Link>
                            </motion.li>
                        </ul>

                        {/* Background Decoration */}
                        <div
                            className="absolute bottom-[-100px] right-[-100px] w-full h-screen pointer-events-none opacity-50"
                            style={{
                                background: 'radial-gradient(ellipse, var(--teal-dim) 0%, transparent 65%)'
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavbarContent;

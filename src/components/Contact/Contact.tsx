"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "../common/section-label";
import { Logo as CommonLogo } from "../common/logo";

const revealVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

/**
 * Contact Component
 * @returns JSX.Element
 */
export const Contact = () => {
    const points = [
        "We learn how you run before we touch your back office. Your lanes, your drivers, your way of working — built in from day one.",
        "Most carriers are up and running within a week of first contact.",
        "Your authority stays yours. We run the back office — we don't own any piece of your operation.",
        "We keep your operation lean and your numbers clean. When you decide to add a truck, the back office is ready.",
        "When the market shifts, we adapt. Coverage doesn't drop because rates went soft or a broker changed their terms.",
        "Small team. Big accountability. You get direct access to the people running your operation.",
    ];

    return (
        <section id="contact" className="bg-dark2 py-[120px] relative overflow-hidden">
            {/* Background Glow */}
            <div
                className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none opacity-40 z-0"
                style={{
                    background: 'radial-gradient(ellipse, var(--teal-glow) 0%, transparent 62%)'
                }}
            />

            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[96px] items-center">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.72 }}
                        variants={revealVariants}
                        className="flex flex-col"
                    >
                        <SectionLabel label="Get in Touch" />
                        <h2 className="font-display font-black text-[clamp(24px,4vw,58px)] leading-[0.97] uppercase tracking-[-0.01em] mb-[24px]">
                            Tell us<br />about your<br /><em className="not-italic text-teal">fleet.</em>
                        </h2>
                        <p className="text-[16px] font-light leading-[1.8] text-text-soft mb-[44px]">
                            No pitch. No commitment. Tell us how you&apos;re running today — trucks, lanes, what&apos;s working, what isn&apos;t. We&apos;ll tell you straight if we&apos;re the right fit and what the next step looks like.
                        </p>

                        <div className="bg-dark3 border border-border-muted border-t-[3px] border-t-teal p-[40px] mb-[14px]">
                            <div className="font-mono text-[9px] tracking-[0.28em] uppercase text-text-muted mb-[8px]">Start the Conversation</div>
                            <div className="font-display font-bold text-[22px] tracking-[0.03em] mb-[4px]">Supernova</div>
                            <a href="mailto:admin@supernova.center" className="font-mono text-[13px] text-teal no-underline tracking-[0.04em] block mb-[28px] transition-opacity duration-200 hover:opacity-70">
                                admin@supernova.center
                            </a>
                            <Link href="mailto:admin@supernova.center" className="font-mono text-[11px] tracking-[0.2em] uppercase text-dark bg-teal px-[38px] py-[16px] no-underline font-medium transition-colors duration-200 hover:bg-[#00d9a8] inline-block">
                                Send a Message
                            </Link>
                        </div>
                        <div className="font-mono text-[10px] tracking-[0.14em] text-text-muted uppercase">
                            Support & operations — <a href="mailto:support@supernova.center" className="text-text-soft no-underline border-b border-border-muted pb-[1px] transition-all duration-200 hover:text-teal hover:border-teal">support@supernova.center</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.72, staggerChildren: 0.1 }}
                        className="flex flex-col gap-[1px]"
                    >
                        {points.map((point, idx) => (
                            <motion.div
                                key={idx}
                                variants={revealVariants}
                                className="bg-dark3 p-[22px_26px] flex items-start gap-[16px] transition-colors duration-200 hover:bg-dark4 group"
                            >
                                <div className="font-mono text-[11px] text-teal shrink-0 mt-[1px]">&rarr;</div>
                                <p className="text-[14.5px] text-text-soft leading-[1.55]">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

/**
 * Footer Component
 * @returns JSX.Element
 */
export const Footer = () => {
    return (
        <footer className="bg-dark border-t border-border-subtle px-[24px] md:px-[52px] py-[26px] flex flex-col md:flex-row items-center justify-between gap-[16px]">
            <div className="w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                    <CommonLogo size={26} />
                    <div>
                        <div className="font-display font-black text-[14px] tracking-[0.14em] uppercase text-text-main">
                            Supernova
                        </div>
                        <span className="font-mono text-[7.5px] tracking-[0.25em] text-text-muted block mt-[2px]">
                            Log-Tech
                        </span>
                    </div>
                </div>

                <ul className="flex gap-[20px] list-none">
                    <li><a href="mailto:admin@supernova.center" className="font-mono text-[10px] tracking-[0.1em] text-text-muted no-underline transition-colors duration-200 hover:text-teal">admin@supernova.center</a></li>
                    <li><a href="mailto:support@supernova.center" className="font-mono text-[10px] tracking-[0.1em] text-text-muted no-underline transition-colors duration-200 hover:text-teal">support@supernova.center</a></li>
                    <li><a href="https://superload.app" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] tracking-[0.1em] text-text-muted no-underline transition-colors duration-200 hover:text-teal">superload.app ↗</a></li>
                </ul>

                <div className="font-mono text-[10px] text-text-muted tracking-[0.1em]">
                    © {new Date().getFullYear()} Supernova Log-Tech
                </div>
            </div>
        </footer>
    );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../common/section-label";

const revealVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

/**
 * DifferentSection Component
 * @returns JSX.Element
 */
const DifferentSection = () => {
    const rows = [
        { aspect: "Human ops team, 24/7", others: "Some do", us: "Always" },
        { aspect: "Proprietary dispatch tooling", others: "No", us: "Yes — Superload" },
        { aspect: "Adapts to your operation", others: "Template-based", us: "Built around you" },
        { aspect: "Lean-first philosophy", others: "Growth at any cost", us: "Stable > fast" },
        { aspect: "You own your authority", others: "Mixed", us: "Always yours" },
        { aspect: "Talk to the founders", others: "Account manager", us: "Directly" },
    ];

    return (
        <section id="different" className="bg-dark2 py-[120px]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[48px] lg:gap-[96px] items-start">

                    {/* Left - Copy */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.72 }}
                        variants={revealVariants}
                        className="flex flex-col"
                    >
                        <SectionLabel label="Why Different" />
                        <h2 className="font-display font-black text-[clamp(36px,4vw,58px)] leading-[0.97] uppercase tracking-[-0.01em] mb-[24px]">
                            Not just<br />back-office.<br /><em className="not-italic text-teal">Not just tech.</em><br /><span className="text-text-muted">Both.</span>
                        </h2>
                        <p className="text-[16px] font-light leading-[1.8] text-text-soft max-w-[360px] mt-[24px]">
                            Most services give you one piece. A back-office outfit with no proprietary tooling. Software that tries to automate what needs human judgment on a live load at 10pm. Supernova runs both — an experienced ops team on your freight, backed by tools we built and use ourselves. That combination doesn&apos;t exist anywhere else in this space.
                        </p>
                    </motion.div>

                    {/* Right - Table */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.72, staggerChildren: 0.08 }}
                        className="flex flex-col gap-[1px]"
                    >
                        <div className="bg-dark4 p-[16px_28px] grid grid-cols-2 md:grid-cols-3 gap-[16px]">
                            <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-text-muted">What Matters</span>
                            <span className="hidden md:block font-mono text-[9px] tracking-[0.22em] uppercase text-text-muted">Others</span>
                            <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-teal">Supernova</span>
                        </div>

                        {rows.map((row) => (
                            <motion.div
                                key={row.aspect}
                                variants={revealVariants}
                                className="bg-dark3 p-[20px_28px] grid grid-cols-2 md:grid-cols-3 gap-[16px] items-center border-l-[3px] border-transparent transition-all duration-200 hover:bg-dark4 hover:border-teal group"
                            >
                                <div className="text-[13px] text-text-soft font-normal">
                                    {row.aspect}
                                </div>
                                <div className="hidden md:flex font-mono text-[11px] text-text-muted items-center gap-[6px]">
                                    <span className="text-warn shrink-0">✗</span> {row.others}
                                </div>
                                <div className="font-mono text-[11px] text-teal flex items-center gap-[6px]">
                                    <span className="shrink-0">✓</span> {row.us}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DifferentSection;

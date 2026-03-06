"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../common/section-label";

const revealVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

/**
 * Team Component
 * @returns JSX.Element
 */
const Team = () => {
    const members = [
        {
            init: "MC",
            name: "Mihail Cernei",
            role: "CEO & Co-Founder",
            bio: "Built Qoobus — a freight brokerage and carrier platform that onboarded over 40,000 carriers and shippers across the U.S. and Europe. He built the operational infrastructure for a multi-country freight network, raised institutional capital, and has seen at real scale exactly which back-office gaps kill carriers that had every reason to survive.",
            em: "Supernova is built on that pattern recognition — not theory. What collapses at truck 12 without systems behind it, he's watched happen thousands of times. That's what we're protecting your operation against."
        },
        {
            init: "RN",
            name: "Robert Nürnberger",
            role: "CFO & Co-Founder",
            bio: "Former CFO at Eurowag and UTA — two of Europe's largest fleet payment and fuel card networks, collectively managing the financial operations of hundreds of thousands of commercial vehicles. He ran treasury, financial reporting, and ops finance at a scope most fleet businesses never approach.",
            em: "Your margin structure, cash flow, and billing are handled with the same discipline that runs at enterprise scale. The difference: you get it applied to your fleet, not diluted into a shared service center."
        }
    ];

    return (
        <section id="team" className="bg-dark py-[120px]">
            <div className="max-w-[1280px] mx-auto px-[24px] md:px-[64px]">
                <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-[48px] lg:gap-[96px] items-start">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.72 }}
                        variants={revealVariants}
                        className="flex flex-col"
                    >
                        <SectionLabel label="Who&apos;s Behind It" />
                        <h2 className="font-display font-black text-[clamp(36px,4vw,58px)] leading-[0.97] uppercase tracking-[-0.01em] mb-[24px]">
                            Operators.<br />Not consultants.<br /><em className="not-italic text-teal">Not software guys.</em>
                        </h2>
                        <p className="text-[16px] font-light leading-[1.8] text-text-soft mt-[20px]">
                            Supernova is run by people who have built freight infrastructure at a scale most carriers will never see — and applied that to what running a tight, profitable fleet actually requires.
                        </p>
                        <p className="text-[16px] font-light leading-[1.8] text-text-soft mt-[14px]">
                            No theory. No outsourced ops team. The people who built this run it.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-[1px]">
                        {members.map((member) => (
                            <motion.div
                                key={member.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.72 }}
                                variants={revealVariants}
                                className="bg-dark3 p-[40px] border-l-[3px] border-transparent transition-all duration-250 hover:bg-dark4 hover:border-teal group"
                            >
                                <div className="flex items-center gap-[16px] mb-[22px]">
                                    <div className="w-[48px] h-[48px] border-[1.5px] border-teal bg-dark4 flex items-center justify-center font-display font-black text-[18px] text-teal shrink-0">
                                        {member.init}
                                    </div>
                                    <div>
                                        <div className="font-display font-bold text-[22px] tracking-[0.03em] leading-[1.1] mb-[4px]">
                                            {member.name}
                                        </div>
                                        <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-teal">
                                            {member.role}
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-[12px]">
                                    <p className="text-[14px] leading-[1.78] text-text-muted">
                                        {member.bio}
                                    </p>
                                    <p className="text-[14px] leading-[1.78] text-text-soft italic">
                                        {member.em}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Team;

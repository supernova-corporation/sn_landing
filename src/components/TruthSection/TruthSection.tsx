"use client";

import React from "react";
import { motion } from "framer-motion";

const revealVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

/**
 * TruthSection Component
 * @returns JSX.Element
 */
const TruthSection = () => {
    return (
        <section id="truth" className="bg-dark2 py-[120px]">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] lg:gap-[96px] items-start">

                    {/* Left - FMCSA data */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.72, staggerChildren: 0.1 }}
                        className="flex flex-col"
                    >
                        <motion.div variants={revealVariants} className="font-mono text-xs tracking-[0.34em] uppercase text-teal mb-[28px] flex items-center gap-[12px]">
                            <span className="w-[16px] h-[1px] bg-teal shrink-0" />
                            The Reality
                        </motion.div>

                        <motion.h2 variants={revealVariants} className="font-display font-black text-[clamp(36px,4vw,58px)] leading-[0.97] uppercase tracking-[-0.01em]">
                            This industry<br />doesn&apos;t forgive<br /><em className="not-italic text-teal">weak structure.</em>
                        </motion.h2>

                        <motion.div variants={revealVariants} className="mt-[28px] space-y-[20px] text-[16px] leading-[1.8] text-text-soft">
                            <p>Adding trucks without adding systems doesn&apos;t build a fleet — it builds a liability. Every load you can&apos;t track, every hours-of-service gap, every broker relationship you haven&apos;t locked in — it compounds quietly. Then all at once.</p>
                            <p>Running more miles doesn&apos;t mean you&apos;re ahead. <strong className="text-text-main font-medium">Eight trucks running clean and profitable beats twenty held together by luck and late nights.</strong> Revenue on the load confirmation means nothing if the cost of getting there eats what&apos;s left.</p>
                            <p>The carriers who make it through the rough years aren&apos;t always the biggest. They&apos;re the ones who had something solid running behind their trucks — before they needed it.</p>
                        </motion.div>

                        <div className="flex flex-col gap-[1px] mt-[44px]">
                            <motion.div variants={revealVariants} className="bg-dark3 p-[32px] md:p-[40px] grid grid-cols-[auto_1fr] gap-[28px] items-center border-l-[3px] border-warn transition-colors duration-250 hover:bg-dark4">
                                <div className="font-display font-black text-[36px] lg:text-[56px] leading-none whitespace-nowrap text-warn">12–18%</div>
                                <div>
                                    <div className="font-mono text-xs tracking-[0.22em] uppercase mb-[5px] text-warn">Annual carrier exit rate — FMCSA</div>
                                    <div className="text-md leading-[1.65] text-text-muted">Between <strong className="text-text-soft font-normal">60,000 and 90,000 carriers</strong> shut down every year. Not in a bad year. Every year. That&apos;s not a crisis — that&apos;s the baseline.</div>
                                </div>
                            </motion.div>

                            <motion.div variants={revealVariants} className="bg-dark3 p-[32px] md:p-[40px] grid grid-cols-[auto_1fr] gap-[28px] items-center border-l-[3px] border-teal transition-colors duration-250 hover:bg-dark4">
                                <div className="font-display font-black text-[36px] lg:text-[56px] leading-none whitespace-nowrap text-teal">2–4%</div>
                                <div>
                                    <div className="font-mono text-xs tracking-[0.22em] uppercase mb-[5px]  text-teal">Exit from regulatory violations</div>
                                    <div className="text-md leading-[1.65] text-text-muted">Only <strong className="text-text-soft font-normal">2 to 4 percent</strong> go dark from violations. The rest lose control of the business side — not the truck side.</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right - Philosophy */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.72, staggerChildren: 0.15 }}
                        className="pt-[4px]"
                    >
                        <div className="flex flex-col gap-0">
                            <motion.div variants={revealVariants} className="py-[44px] first:pt-0 border-b border-border-muted">
                                <div className="font-display font-black text-[clamp(30px,3.2vw,44px)] leading-[0.95] uppercase tracking-[-0.01em] mb-[16px] text-text-main">
                                    Scale without<br />systems <em className="not-italic text-teal">kills</em><br /><span className="text-text-muted">carriers.</span>
                                </div>
                                <p className="text-[15px] leading-[1.78] text-text-muted">At 5 trucks, running your own back office is survivable. At 10, it&apos;s a warning sign. At 15 it breaks — and it takes the whole operation down with it. <strong className="text-text-soft font-normal">Every truck you add without systems behind it is a risk multiplier, not a win.</strong></p>
                            </motion.div>

                            <motion.div variants={revealVariants} className="py-[44px] border-b border-border-muted">
                                <div className="font-display font-black text-[clamp(30px,3.2vw,44px)] leading-[0.95] uppercase tracking-[-0.01em] mb-[16px] text-text-main">
                                    <em className="not-italic text-teal">Your authority.</em><br />Your trucks.<br /><span className="text-text-muted">Your call.</span>
                                </div>
                                <p className="text-[15px] leading-[1.78] text-text-muted">Supernova runs your back office. That&apos;s the whole job. <strong className="text-text-soft font-normal">Your MC number, your broker relationships, your loads — nothing moves without your say.</strong> We execute. You own it. Step in anytime — we answer to you, not the other way around.</p>
                            </motion.div>

                            <motion.div variants={revealVariants} className="py-[44px] last:border-b-0 last:pb-0">
                                <div className="font-display font-black text-[clamp(30px,3.2vw,44px)] leading-[0.95] uppercase tracking-[-0.01em] mb-[16px] text-text-main">
                                    Slower.<br /><em className="not-italic text-teal">Stable.</em><br />Profitable.
                                </div>
                                <p className="text-[15px] leading-[1.78] text-text-muted">Whether you run 5 trucks or 25, the job is the same: keep the operation tight, keep the numbers clean, and make sure the back office holds when you decide to add a truck. <strong className="text-text-soft font-normal">Adding capacity is always your call. Our job is to make sure the infrastructure is ready when you do.</strong></p>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default TruthSection;

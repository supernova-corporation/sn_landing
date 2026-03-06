"use client";

import React from "react";
import { Logo } from "@/components/common/logo";
import { LOGO_DOCS } from "@/constants/logo-docs";

/**
 * Logo Documentation Page
 * @returns {JSX.Element} The documentation page for the Logo component
 */
export default function LogoDocsPage() {
    return (
        <div className="container py-12 px-6 max-w-4xl mx-auto bg-dark text-text-soft min-h-screen">
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-4 text-text-main">Logo</h1>
                <p className="text-lg text-text-muted">
                    The core visual identifier for the Supernova platform.
                </p>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-text-main border-b border-border-muted pb-2">Example Demos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-dark3 border border-border-muted p-12 flex flex-col items-center justify-center rounded-lg">
                        <Logo size={80} />
                        <span className="mt-4 font-mono text-xs text-text-muted">Default (80px)</span>
                    </div>
                    <div className="bg-dark3 border border-border-muted p-12 flex flex-col items-center justify-center rounded-lg">
                        <Logo size={40} className="opacity-50" />
                        <span className="mt-4 font-mono text-xs text-text-muted">Small & Muted (40px)</span>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-text-main border-b border-border-muted pb-2">Installation</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium mb-3">Registry</h3>
                        <pre className="bg-dark4 p-4 rounded-md overflow-x-auto border border-border-subtle">
                            <code className="text-teal text-sm">{LOGO_DOCS.installation.registry}</code>
                        </pre>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-3">Manual</h3>
                        <p className="text-sm text-text-muted mb-3">{LOGO_DOCS.installation.manual}</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-text-main border-b border-border-muted pb-2">Usage</h2>
                <pre className="bg-dark4 p-4 rounded-md overflow-x-auto border border-border-subtle">
                    <code className="text-text-soft text-sm">{LOGO_DOCS.usage}</code>
                </pre>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-6 text-text-main border-b border-border-muted pb-2">Source Code</h2>
                <pre className="bg-dark4 p-4 rounded-md overflow-x-auto border border-border-subtle max-h-[400px]">
                    <code className="text-text-soft text-sm">{LOGO_DOCS.source}</code>
                </pre>
            </section>
        </div>
    );
}

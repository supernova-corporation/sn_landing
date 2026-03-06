/**
 * Logo Documentation Constants
 * Contains code snippets for the Logo component documentation.
 */
export const LOGO_DOCS = {
    installation: {
        registry: "npx shadcn@latest add logo",
        manual: "Copy the component to your `src/components/common/logo.tsx` file."
    },
    usage: `import { Logo } from "@/components/common/logo";

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Logo size={32} />
      <Logo size={48} className="text-teal" />
    </div>
  );
}`,
    source: `"use client";

import React from "react";

/**
 * LogoProps Interface
 * @interface LogoProps
 */
export interface LogoProps {
    /** Optional size for the logo (width and height) */
    size?: number;
    /** Optional height override */
    height?: number;
    /** Optional width override */
    width?: number;
    /** Optional additional CSS classes */
    className?: string;
}

/**
 * Logo Component
 * A reusable SVG logo component for the Supernova brand.
 * 
 * @param {LogoProps} props - The component props
 * @returns {JSX.Element} The rendered SVG logo
 */
export const Logo = ({ size = 36, width, height, className }: LogoProps) => {
    const finalWidth = width || size;
    const finalHeight = height || size;

    return (
        <svg 
            width={finalWidth} 
            height={finalHeight} 
            viewBox="0 0 20.83659 19.99998" 
            fill="none"
            className={className}
        >
            <defs>
                <linearGradient id="logo-linear-gradient" x1="-568.55849" y1="-606.7947" x2="-559.5595" y2="-624.79262" gradientTransform="translate(574 626.59369)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#4cb899" />
                    <stop offset="1" stopColor="#317b5e" />
                </linearGradient>
                <linearGradient id="logo-linear-gradient-2" x1="-570.59164" y1="-607.56203" x2="-566.57312" y2="-612.66481" xlinkHref="#logo-linear-gradient" />
                <linearGradient id="logo-linear-gradient-3" x1="-557.81341" y1="-614.48738" x2="-554.69927" y2="-619.93599" xlinkHref="#logo-linear-gradient" />
            </defs>
            <path fill="url(#logo-linear-gradient)" d="M13.17226,4.23024c.39131,1.15662,1.47634,1.94503,2.69724,1.95973l3.14399.03814c-3.41236,1.71637-3.08016,6.42023-3.08016,6.42023,0,0,.76644,2.45944,1.54482,4.95733.52404,1.68188-1.38909,3.0652-2.82658,2.0471l-2.56586-1.8172c-.99648-.70575-2.3376-.70575-3.33408.00006l-2.56586,1.81729c.68757-3.14094-1.28176-7.00442-1.28176-7.00442L.74497,9.54914c-1.41325-1.05319-.68339-3.29964,1.07902-3.32087l3.14382-.03811c1.22101-.01474,2.30596-.80311,2.69735-1.95973l1.00777-2.97831c.56489-1.66954,2.92691-1.66948,3.49179.00009l1.00755,2.97806v-.00003Z" />
            <path fill="url(#logo-linear-gradient-2)" d="M4.90389,12.64851l-1.54296,4.95199c-.45034,1.44512.89559,2.67164,2.1957,2.34421.21874-.0791.42942-.1755.62911-.292l.39484-.27952c1.99296-1.70056,1.29-4.56932-1.67668-6.72468h-.00001Z" />
            <path fill="url(#logo-linear-gradient-3)" d="M15.93301,12.64825l4.15896-3.09939c1.2137-.9044.84594-2.68781-.39851-3.18712-.22349-.06453-.45056-.11043-.68063-.13372l-.4837-.00584c-2.61174.20441-3.72929,2.93843-2.59612,6.42607Z" />
        </svg>
    );
};`
};

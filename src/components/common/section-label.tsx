export const SectionLabel = ({ label }: { label: string }) => (
    <div className="font-mono text-xs tracking-[0.34em] uppercase text-teal mb-[28px] flex items-center gap-[12px]">
        <span className="w-[16px] h-[1px] bg-teal shrink-0" />
        {label}
    </div>
);
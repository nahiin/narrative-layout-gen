import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

type PlaceholderProps = {
  label?: string;
  ratio?: string;
  className?: string;
  type?: string;
};

export const PlaceholderImage = ({ label = "IMAGE", ratio, type, className }: PlaceholderProps) => (
  <div className={cn("wire-box w-full h-full min-h-[120px]", className)}>
    <div className="text-center px-2">
      <div className="font-medium">{label}</div>
      {type && <div className="text-[9px] mt-1 opacity-80 normal-case tracking-normal">{type}</div>}
      {ratio && <div className="text-[9px] mt-1 opacity-60">[{ratio}]</div>}
    </div>
  </div>
);

export const PlaceholderVideo = ({ label = "VIDEO", ratio, type, className }: PlaceholderProps) => (
  <div className={cn("wire-box w-full h-full min-h-[120px]", className)}>
    <div className="text-center px-2 flex flex-col items-center gap-2">
      <Play className="w-8 h-8 stroke-[1]" />
      <div className="font-medium">{label}</div>
      {type && <div className="text-[9px] opacity-80 normal-case tracking-normal">{type}</div>}
      {ratio && <div className="text-[9px] opacity-60">[{ratio}]</div>}
    </div>
  </div>
);

export const PlaceholderLogo = ({ label = "LOGO", className }: { label?: string; className?: string }) => (
  <div className={cn("wire-box min-h-[40px] px-4", className)}>
    <span className="font-medium">{label}</span>
  </div>
);

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">
    <span className="wire-label">{children}</span>
  </div>
);

export const TextLine = ({ width = "100%" }: { width?: string }) => (
  <div className="wire-text-line" style={{ width }} />
);

export const TextBlock = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-2">
    {Array.from({ length: lines }).map((_, i) => (
      <TextLine key={i} width={i === lines - 1 ? "70%" : "100%"} />
    ))}
  </div>
);

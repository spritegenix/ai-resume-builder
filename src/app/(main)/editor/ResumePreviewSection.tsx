import ResumePreview from "@/components/ResumeStyles/ResumePreview";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import BorderStyleButton from "./BorderStyleButton";
import ColorPicker from "./ColorPicker";
import FullScreenPreviewButton from "./FullScreenPreviewButton";
import DownloadButton from "./DownloadButton";
import ShareButton from "./ShareButton";
import { resumeStyles } from "@/components/ResumeStyles/Styles";
import { useSearchParams } from "next/navigation";

interface ResumePreviewSectionProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
  className?: string;
}

export default function ResumePreviewSection({
  resumeData,
  setResumeData,
  className,
}: ResumePreviewSectionProps) {
    const searchParams = useSearchParams();

    const currentStyleId = searchParams.get("resume-style") || resumeStyles[0].id;
  
    function setStep(key: string) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("resume-style", key);
      window.history.pushState(null, "", `?${newSearchParams.toString()}`);
    } 

    const ResumeStyleComponent = resumeStyles.find(
      (step) => step.id === currentStyleId,
    )?.component;

  return (
    <div
      className={cn("group relative hidden w-full md:flex md:w-1/2", className)}
    >
      <div className="absolute left-1 top-1 z-10 flex flex-none flex-col gap-3 opacity-50 transition-opacity group-hover:opacity-100 lg:left-3 lg:top-3 xl:opacity-100">
        <ColorPicker
          color={resumeData.colorHex}
          onChange={(color) =>
            setResumeData({ ...resumeData, colorHex: color.hex })
          }
        />
        <BorderStyleButton
          borderStyle={resumeData.borderStyle}
          onChange={(borderStyle) =>
            setResumeData({ ...resumeData, borderStyle })
          }
        />
        <FullScreenPreviewButton slug={resumeData.id || ""} />
        <DownloadButton resumeId={resumeData.id || ""} />
        <ShareButton resumeData={resumeData} />
      </div>
      <div className="flex w-full justify-center overflow-y-auto bg-secondary p-3">
        <div className="relative">
          <p className="absolute -left-6  top-[912px] w-24 text-nowrap border-t text-red-600 border-red-600 text-[10px]">
            Next Page
          </p>
          <ResumePreview
            resumeData={resumeData}
            className="max-w-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

"use client";
import { useStyleAsideState } from "@/app/(main)/editor/Footer";
import React, { useState } from "react";
import { Sidebar } from "./SideBar";
import { resumeStyles } from "../ResumeStyles/Styles";
import { Card } from "@/app/(resumeSample)/templates/TemplateCard";
import { ResumeValues } from "@/lib/validation";
import { cn, mapToResumeValues } from "@/lib/utils";
import { ResumeServerData } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import useAutoSaveResume from "@/app/(main)/editor/useAutoSaveResume";
import useUnloadWarning from "@/hooks/useUnloadWarning";
import { CircleX } from "lucide-react";

interface ResumeEditorProps {
  resumeToEdit: ResumeServerData | null;
}

export default function ResumeTemplateAside({
  resumeToEdit,
}: ResumeEditorProps) {
  const { open, setOpen } = useStyleAsideState();
  const [resumeData, setResumeData] = useState<ResumeValues>(
    resumeToEdit ? mapToResumeValues(resumeToEdit) : {},
  );

  const { hasUnsavedChanges } = useAutoSaveResume(resumeData);

  useUnloadWarning(hasUnsavedChanges);
  const router = useRouter();
  const searchParams = useSearchParams();
  function handleSelectResumeTemplate(styleId: string) {
    setResumeData({ ...resumeData, styleId });
    // Update styleId in URL without losing other query params
    const params = new URLSearchParams(searchParams.toString());
    params.set("styleId", styleId);

    router.push(`/editor?${params.toString()}`);
  }
  return (
    <Sidebar
      isOpen={open}
      onClose={() => setOpen(false)}
      className="bg-w3/80 p-4 md:w-[26rem]"
    >
      <button
        className="float-right text-white transition-all duration-300 hover:text-red-600"
        onClick={() => setOpen(false)}
      >
        <CircleX />
      </button>
      <h2 className="mb-4 text-center text-lg font-medium text-white">
        Change Resume Style
      </h2>
      {/* tabs  */}
      
      {/* Search  */}
      <div className="grid h-full grid-cols-2 gap-4 overflow-y-auto">
        {resumeStyles.map((style) => (
          <div
            key={style.id}
            className={cn(
              "cursor-pointer",
              style.id === resumeData.styleId && "h-min border-4 border-w1 p-1",
            )}
            onClick={() => handleSelectResumeTemplate(style.id)}
          >
            <Card style={style} isOnEditPage />
          </div>
        ))}
      </div>
    </Sidebar>
  );
}
